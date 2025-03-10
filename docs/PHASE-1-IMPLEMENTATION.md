# Dijital Ayak İzi İzleyici - Faz 1 İmplementasyon Planı

# 📌 Genel Özet

Bu doküman, **Faz 1: Proje Altyapısı ve Temel Kurulum** aşamasının detaylı uygulama planını içermektedir. Plan, geliştirme ortamının hazırlanması, monorepo yapılandırması, CI/CD pipeline kurulumu ve kodlama standartlarının belirlenmesi gibi adımları içermektedir.

## 🎯 Hedefler

- **Güvenli, ölçeklenebilir ve modüler bir proje yapısı oluşturmak**
- **Sürekli entegrasyon ve dağıtım (CI/CD) süreçlerini otomatize etmek**
- **Kod standartlarını ve geliştirme kurallarını belirlemek**
- **Ekip üyeleri için tutarlı bir geliştirme ortamı sağlamak**

# 🚀 Faz 1: Proje Altyapısı ve Temel Kurulum (2 Hafta)

## 📌 Adım 1.1: Monorepo Yapısının Kurulması

### Açıklama

- Proje, **pnpm workspaces** kullanılarak monorepo olarak yapılandırılacaktır
- Backend, frontend ve tarayıcı uzantısı için ayrı modüller oluşturulacaktır
- Her modül bağımsız olarak geliştirilebilir ve test edilebilir olacaktır

### 🛠 Teknolojiler

- pnpm workspaces
- TypeScript
- Git

### 📂 Klasör Yapısı

```bash
📦 digital-footprint-tracker/
┣ 📂 packages/
┃ ┣ 📂 backend/         # NestJS API
┃ ┃ ┣ 📂 src/
┃ ┃ ┣ 📂 test/
┃ ┃ ┣ 📜 package.json
┃ ┃ ┗ 📜 tsconfig.json
┃ ┣ 📂 extension/       # Tarayıcı Uzantısı
┃ ┃ ┣ 📂 src/
┃ ┃ ┣ 📂 public/
┃ ┃ ┣ 📜 manifest.json
┃ ┃ ┗ 📜 package.json
┃ ┣ 📂 dashboard/       # Web Dashboard (React)
┃ ┃ ┣ 📂 src/
┃ ┃ ┣ 📂 public/
┃ ┃ ┗ 📜 package.json
┃ ┣ 📂 common/          # Ortak bileşenler ve utils
┃ ┃ ┣ 📂 src/
┃ ┃ ┗ 📜 package.json
┃ ┗ 📂 ml-service/      # ML Servisi (Python FastAPI)
┃   ┣ 📂 src/
┃   ┗ 📜 pyproject.toml
┣ 📂 infrastructure/    # DevOps Konfigürasyonları
┃ ┣ 📂 docker/
┃ ┗ 📂 k8s/
┣ 📂 docs/              # Dokümantasyon
┣ 📜 package.json       # Root package.json
┣ 📜 pnpm-workspace.yaml
┗ 📜 .gitignore

```

### ✅ Kontrol Noktaları

- [ ] Monorepo yapısı başarıyla oluşturuldu mu?
- [ ] Backend, frontend ve uzantı modülleri birbirinden bağımsız çalışabiliyor mu?
- [ ] Common paket diğer modüller tarafından import edilebiliyor mu?

### 📌 Onay Gereksinimleri

- [ ] Monorepo klasör yapısı doğrulandı
- [ ] Bağımlılıklar başarıyla yüklendi
- [ ] `pnpm install` sorunsuz çalışıyor
- [ ] Her modül kendi development scriptlerini çalıştırabiliyor

## 📌 Adım 1.2: Git Repository Kurulumu ve Branch Stratejisi

### Açıklama

- Git Flow modeli uygulanacaktır
- Branch yapısı ve commit mesaj formatları standardize edilecektir
- Code review ve merge request süreçleri tanımlanacaktır

### 🛠 Teknolojiler

- Git
- GitHub
- Husky (git hooks)
- Commitlint

### 📂 Konfigürasyon Dosyaları

```bash
📦 root/
┣ 📜 .gitignore
┣ 📜 .gitattributes
┣ 📜 .husky/
┃ ┣ 📜 pre-commit
┃ ┗ 📜 commit-msg
┗ 📜 commitlint.config.js
```

### Branch Stratejisi

```yaml
Branches:
  main:
    - Production-ready kod
    - Tag'lenmiş release'ler
  develop:
    - Development entegrasyon branch'i
    - Feature branch'lerin hedefi
  feature/*:
    - Yeni özellik geliştirmeleri
    - develop'dan branch'lenir
  bugfix/*:
    - Hata düzeltmeleri
  release/*:
    - Release hazırlık branch'leri
```

### ✅ Kontrol Noktaları

- [ ] Git repository başarıyla oluşturuldu mu?
- [ ] Branch protection kuralları tanımlandı mı?
- [ ] Commit hook'ları çalışıyor mu?

### 📌 Onay Gereksinimleri

- [ ] Git repo başarıyla oluşturuldu
- [ ] İlk commit gerçekleştirildi
- [ ] Branch protection kuralları aktif
- [ ] Commit mesaj formatı kontrolleri devrede

## 📌 Adım 1.3: TypeScript, ESLint ve Prettier Konfigürasyonu

### Açıklama

- TypeScript strict mode aktif olacak
- ESLint kuralları belirlenecek
- Prettier ile kod formatı standardize edilecek
- VS Code entegrasyonu sağlanacak

### 🛠 Teknolojiler

- TypeScript 5.x
- ESLint
- Prettier
- VS Code Extensions

### 📂 Konfigürasyon Dosyaları

```bash
📦 root/
┣ 📜 tsconfig.base.json
┣ 📜 .eslintrc.js
┣ 📜 .prettierrc
┣ 📜 .editorconfig
┗ 📜 .vscode/
  ┣ 📜 settings.json
  ┗ 📜 extensions.json
```

### TypeScript Konfigürasyonu

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### ✅ Kontrol Noktaları

- [ ] TypeScript konfigürasyonu tüm modüllerde çalışıyor mu?
- [ ] ESLint hataları otomatik düzeltiliyor mu?
- [ ] VS Code entegrasyonu sorunsuz mu?

### 📌 Onay Gereksinimleri

- [ ] TypeScript derleme başarılı
- [ ] ESLint kontrolleri geçiyor
- [ ] Prettier formatlaması çalışıyor
- [ ] VS Code extension önerileri aktif

## 📌 Adım 1.4: CI/CD Pipeline Kurulumu

### Açıklama

- GitHub Actions ile CI/CD pipeline kurulacak
- Test, build ve deployment süreçleri otomatize edilecek
- Docker container'ları için build pipeline'ı oluşturulacak

### 🛠 Teknolojiler

- GitHub Actions
- Docker
- Docker Compose
- Jest

### 📂 Pipeline Konfigürasyonları

```bash
📦 .github/
┣ 📂 workflows/
┃ ┣ 📜 ci.yml
┃ ┣ 📜 cd.yml
┃ ┗ 📜 release.yml
┗ 📂 actions/
  ┗ 📜 setup-project/
```

### CI Pipeline Adımları

```yaml
CI Steps:
  - Dependency Installation
  - Type Checking
  - Linting
  - Unit Tests
  - Integration Tests
  - Build Check
  - Docker Build Test

CD Steps:
  - Build Docker Images
  - Push to Registry
  - Deploy to Staging
  - Run E2E Tests
  - Deploy to Production
```

### ✅ Kontrol Noktaları

- [ ] CI pipeline başarıyla çalışıyor mu?
- [ ] CD pipeline test ortamına deploy edebiliyor mu?
- [ ] Docker image'ları oluşturuluyor mu?

### 📌 Onay Gereksinimleri

- [ ] Tüm CI adımları başarılı
- [ ] CD pipeline test ortamında doğrulandı
- [ ] Docker registry entegrasyonu çalışıyor

# 🚀 Faz 1 Sonuç ve Değerlendirme

## 📌 Faz 1 Çıktıları

✅ Monorepo yapısı kuruldu ve çalışır durumda
✅ Git workflow ve branch stratejisi belirlendi
✅ Kod kalitesi araçları (TypeScript, ESLint, Prettier) entegre edildi
✅ CI/CD pipeline'ları hazır ve çalışır durumda

## 📌 Sonraki Adımlar

- Faz 2'ye geçiş için hazırlık
- Takım üyelerinin geliştirme ortamı kurulumu
- İlk feature branch'lerinin oluşturulması

## 📌 Riskler ve Azaltma Stratejileri

- Monorepo kompleksitesi → Detaylı dokümantasyon
- CI/CD süre yönetimi → Paralel job'lar ve cache optimizasyonu
- Dependency conflicts → pnpm strict mode ve version locking

---

**Not:** Bu plan, projenin gereksinimlerine göre güncellenebilir ve değiştirilebilir. Her adım tamamlandıkça kontrol noktaları ve onay gereksinimleri gözden geçirilmelidir.
