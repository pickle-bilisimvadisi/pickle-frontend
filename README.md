# 🥒 Pickle Frontend

Modern ve responsive bir web uygulaması frontend projesi. React, TypeScript ve HeroUI ile geliştirilmiştir.

## 📋 İçindekiler

- [Genel Bakış](#-genel-bakış)
- [Teknolojiler](#-teknolojiler)
- [Özellikler](#-özellikler)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Ortam Değişkenleri](#-ortam-değişkenleri)
- [Scripts](#-scripts)
- [Deploy](#-deploy)

## 🎯 Genel Bakış

Pickle, modern web standartlarına uygun, kullanıcı dostu bir arayüz sunan bir frontend uygulamasıdır. Dashboard yönetimi, dosya işlemleri ve kimlik doğrulama özellikleriyle donatılmıştır.

## 🚀 Teknolojiler

### Core
- **React 18.3.1** - UI kütüphanesi
- **TypeScript 5.6.3** - Tip güvenli geliştirme
- **Vite 6.0.11** - Hızlı geliştirme ve build aracı
- **React Router DOM 6.23.0** - Routing yönetimi

### UI & Styling
- **HeroUI** - Modern UI component kütüphanesi
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Framer Motion 11.18.2** - Animasyon kütüphanesi
- **Lottie** - Animasyon desteği

### State Management & API
- **Zustand 5.0.9** - Hafif state management
- **Axios 1.13.2** - HTTP client
- **js-cookie 3.0.5** - Cookie yönetimi

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript linting

## ✨ Özellikler

- ✅ Modern ve responsive tasarım
- ✅ Kimlik doğrulama sistemi (Sign In, Sign Up, Forgot Password)
- ✅ Dashboard yönetimi
- ✅ Dosya yönetimi
- ✅ Dark/Light tema desteği
- ✅ Bildirim sistemi
- ✅ Kullanıcı profil yönetimi
- ✅ Animasyonlu geçişler
- ✅ Responsive navbar ve sidebar
- ✅ FAQ ve müşteri yorumları bölümü
- ✅ Docker desteği
- ✅ Nginx konfigürasyonu

## 📦 Kurulum

### Gereksinimler

- Node.js 18+ veya Bun
- npm, yarn veya bun

### Adımlar

1. Repoyu klonlayın:
```bash
git clone <repository-url>
cd pickle-frontend
```

2. Bağımlılıkları yükleyin:

**npm kullanarak:**
```bash
npm install
```

**yarn kullanarak:**
```bash
yarn install
```

**bun kullanarak:**
```bash
bun install
```

3. Ortam değişkenlerini ayarlayın:
```bash
cp .env.example .env
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
# veya
bun dev
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

## 🎮 Kullanım

### Geliştirme Modu

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview (Build'i test etmek için)

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Proje Yapısı

```
pickle-frontend/
├── public/                  # Statik dosyalar
│   └── animations/         # Lottie animasyon dosyaları
├── src/
│   ├── assets/            # Resimler ve medya dosyaları
│   ├── components/        # React bileşenleri
│   │   ├── dashboard-navbar/
│   │   ├── home/
│   │   ├── icons/
│   │   └── sidebar/
│   ├── config/           # Konfigürasyon dosyaları
│   ├── ctx/              # React Context'ler
│   ├── layouts/          # Layout bileşenleri
│   ├── pages/            # Sayfa bileşenleri
│   │   ├── auth/
│   │   └── dashboard/
│   ├── services/         # API servisleri
│   │   └── api/
│   ├── stores/           # Zustand store'ları
│   ├── styles/           # Global stil dosyaları
│   ├── types/            # TypeScript tip tanımlamaları
│   └── utils/            # Yardımcı fonksiyonlar
├── Dockerfile            # Docker konfigürasyonu
├── nginx.conf            # Nginx konfigürasyonu
└── vite.config.ts        # Vite konfigürasyonu
```

### Önemli Klasörler

- **`components/`**: Yeniden kullanılabilir UI bileşenleri
- **`pages/`**: Route'lara karşılık gelen sayfa bileşenleri
- **`services/`**: API çağrıları ve servis katmanı
- **`stores/`**: Global state yönetimi (Zustand)
- **`layouts/`**: Sayfa layout'ları (Auth, Dashboard, Default)

## 🔐 Ortam Değişkenleri

`.env` dosyasında aşağıdaki değişkenleri tanımlayın:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📜 Scripts

| Script | Açıklama |
|--------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Production build oluşturur |
| `npm run preview` | Build'i preview eder |
| `npm run lint` | ESLint ile kod kontrolü yapar |

## 🐳 Docker ile Deploy

### Docker Image Oluşturma

```bash
docker build -t pickle-frontend .
```

### Container Çalıştırma

```bash
docker run -p 80:80 pickle-frontend
```

## 🌐 Vercel Deploy

Proje Vercel üzerinde deploy edilebilir. `vercel.json` dosyası yapılandırılmıştır.

```bash
vercel deploy
```

## 🏗️ Mimari Kararlar

### State Management
Uygulama, basit ve performanslı state yönetimi için **Zustand** kullanır. Auth state, `useAuthStore` içerisinde yönetilir.

### API Yönetimi
Axios instance'ı ile merkezi API yönetimi yapılır. Otomatik token yenileme ve hata yönetimi mevcuttur.

### Routing
React Router DOM v6 kullanılarak sayfa yönlendirmeleri yapılır. Layout bazlı route yapısı mevcuttur.

### Styling
Tailwind CSS ile utility-first yaklaşımı benimsenmiştir. HeroUI bileşenleri ile tutarlı bir tasarım dili sağlanır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje özel bir projedir.

## 👥 Ekip

Batuhan Tanır

---

**Not**: Bu README, projenin mevcut durumuna göre oluşturulmuştur. Proje geliştikçe güncellenmelidir.