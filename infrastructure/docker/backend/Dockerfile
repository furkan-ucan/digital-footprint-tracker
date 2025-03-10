# Base stage for dependencies
FROM node:18-alpine as base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app

# Sadece bağımlılıkları yükle
FROM base as dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/common/package.json ./packages/common/
COPY packages/backend/package.json ./packages/backend/

# pnpm store dizinini oluştur ve workspace'lere recursive şekilde yükleme yap
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Development stage - geliştirme ortamı için
FROM base as development
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
CMD ["pnpm", "--filter", "@digital-footprint-tracker/backend", "dev"]

# Build aşaması
FROM base as build
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/packages ./packages
COPY . .

# Önce common paketini build et, sonra backend'i
RUN pnpm --filter="@digital-footprint-tracker/common" install && \
    pnpm --filter="@digital-footprint-tracker/common" build && \
    pnpm --filter="@digital-footprint-tracker/backend" install && \
    pnpm --filter="@digital-footprint-tracker/backend" build

# Production aşaması
FROM node:18-alpine AS production
WORKDIR /app

# NODE_ENV ayarla ve gerekli dosyaları kopyala
ENV NODE_ENV=production
ARG APP_ENV=production
ENV APP_ENV=${APP_ENV}

# Sadece gerekli dosyaları kopyala
COPY --from=build /app/packages/backend/dist /app/dist
COPY --from=build /app/packages/backend/package.json /app/package.json
COPY --from=build /app/packages/common/dist /app/node_modules/@digital-footprint-tracker/common/dist
COPY --from=build /app/packages/common/package.json /app/node_modules/@digital-footprint-tracker/common/package.json
COPY --from=build /app/node_modules ./node_modules

# Sıkılaştırma ve güvenlik
USER node
EXPOSE 3000

CMD ["node", "dist/main.js"]
