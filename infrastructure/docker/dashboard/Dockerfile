# Base stage for dependencies
FROM node:18-alpine as base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app

# Sadece bağımlılıkları yükle
FROM base as dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/common/package.json ./packages/common/
COPY packages/dashboard/package.json ./packages/dashboard/

# pnpm store dizinini oluştur ve workspace'lere recursive şekilde yükleme yap
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Development stage - geliştirme ortamı için
FROM base as development
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
CMD ["pnpm", "--filter", "@digital-footprint-tracker/dashboard", "dev"]

# Build aşaması
FROM base as build
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/packages ./packages
COPY . .

# Önce common paketini build et, sonra dashboard'u
RUN pnpm --filter="@digital-footprint-tracker/common" install && \
    pnpm --filter="@digital-footprint-tracker/common" build && \
    pnpm --filter="@digital-footprint-tracker/dashboard" install && \
    pnpm --filter="@digital-footprint-tracker/dashboard" build

# Production aşaması - nginx üzerinden statik dosyaları sunma
FROM nginx:alpine as production
WORKDIR /usr/share/nginx/html

# Ortam değişkenleri
ARG APP_ENV=production
ENV APP_ENV ${APP_ENV}

# nginx yapılandırması
COPY infrastructure/docker/dashboard/nginx.conf /etc/nginx/conf.d/default.conf

# Build aşamasından oluşturulan dosyaları kopyala
COPY --from=build /app/packages/dashboard/dist /usr/share/nginx/html

# Sıkılaştırma ve güvenlik - nginx non-root kullanıcı ile çalıştırma
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
