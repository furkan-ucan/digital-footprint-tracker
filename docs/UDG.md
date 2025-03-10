# Dijital Ayak İzi İzleyici - Kullanıcı Dokümantasyonu ve Rehber

## İçindekiler

1. [Başlarken](#1-başlarken)
2. [Kurulum Rehberi](#2-kurulum-rehberi)
3. [Kullanım Kılavuzu](#3-kullanım-kılavuzu)
4. [Sıkça Sorulan Sorular](#4-sıkça-sorulan-sorular)
5. [Sorun Giderme](#5-sorun-giderme)
6. [Gizlilik ve Veri Yönetimi](#6-gizlilik-ve-veri-yönetimi)
7. [Destek ve İletişim](#7-destek-ve-iletişim)

## 1. Başlarken

### 1.1 Ürün Hakkında

Dijital Ayak İzi İzleyici, çevrimiçi gizliliğinizi korumak ve dijital ayak izinizi yönetmek için tasarlanmış kapsamlı bir platformdur. Bu araç:

- Web sitelerindeki takipçileri tespit eder
- Gizlilik risk skorunuzu hesaplar
- Kişisel verilerinizin korunmasına yardımcı olur
- Gerçek zamanlı koruma sağlar

### 1.2 Sistem Gereksinimleri

```yaml
Tarayıcı Gereksinimleri:
  - Google Chrome: v88 veya üzeri
  - Mozilla Firefox: v78 veya üzeri
  - Microsoft Edge: v88 veya üzeri

Sistem Gereksinimleri:
  - Minimum RAM: 4GB
  - Tavsiye Edilen İnternet Hızı: 10Mbps+
  - Disk Alanı: 100MB
```

## 2. Kurulum Rehberi

### 2.1 Tarayıcı Uzantısı Kurulumu

#### Google Chrome için:

1. Chrome Web Mağazası'nı ziyaret edin
2. "Dijital Ayak İzi İzleyici" uzantısını arayın
3. "Chrome'a Ekle" butonuna tıklayın
4. İzin istemlerini onaylayın

![Chrome Kurulum](images/chrome-install.png)

#### Firefox için:

1. Firefox Add-ons sayfasını ziyaret edin
2. Uzantıyı bulun ve "Firefox'a Ekle"ye tıklayın
3. İzinleri gözden geçirin ve onaylayın

![Firefox Kurulum](images/firefox-install.png)

### 2.2 İzin Açıklamaları

| İzin                 | Neden Gerekli?         | Güvenlik Etkisi |
| -------------------- | ---------------------- | --------------- |
| Web Sitelerini Okuma | Tracker tespiti için   | Orta            |
| Çerezleri Yönetme    | Çerez analizi için     | Orta            |
| Depolama             | Ayarları saklamak için | Düşük           |
| Bildirimler          | Uyarılar için          | Düşük           |

### 2.3 Hesap Oluşturma

1. www.digitalfootprint.com adresini ziyaret edin
2. "Üye Ol" butonuna tıklayın
3. Gerekli bilgileri doldurun:
   - E-posta adresi
   - Şifre (en az 8 karakter)
   - Ad-soyad
4. Gizlilik politikasını okuyun ve onaylayın
5. E-posta doğrulamasını tamamlayın

## 3. Kullanım Kılavuzu

### 3.1 Ana Arayüz

![Ana Arayüz](images/main-interface.png)

```yaml
Arayüz Bileşenleri:
  Üst Bar:
    - Gizlilik Skoru Göstergesi
    - Site Adı
    - Ayarlar Menüsü

  Ana Panel:
    - Tespit Edilen Tracker'lar
    - Risk Seviyesi
    - Hızlı Eylemler

  Alt Panel:
    - Detaylı İstatistikler
    - Rapor Oluşturma
    - Yardım
```

### 3.2 Temel Özellikler

#### 3.2.1 Tracker Tespiti

1. Herhangi bir web sitesini ziyaret edin
2. Uzantı ikonuna tıklayın
3. "Tracker'ları Analiz Et" butonuna basın
4. Tespit edilen tracker'ları görüntüleyin

#### 3.2.2 Gizlilik Skoru

- 0-100 arası puanlama
- Yeşil (70-100): Güvenli
- Sarı (40-69): Orta risk
- Kırmızı (0-39): Yüksek risk

### 3.3 Ayarlar ve Özelleştirme

#### 3.3.1 Koruma Seviyeleri

```yaml
Temel Koruma:
  - Üçüncü taraf çerezleri engelleme
  - Basit tracker koruması
  - Temel raporlama

Gelişmiş Koruma:
  - Tüm tracker'ları engelleme
  - Fingerprinting koruması
  - Detaylı analiz
  - Gerçek zamanlı uyarılar

Özel Koruma:
  - Whitelist/Blacklist
  - Özel kurallar
  - Gelişmiş filtreler
```

#### 3.3.2 Bildirim Ayarları

- Anlık uyarılar
- Günlük özetler
- Risk bildirimleri
- Rapor hatırlatmaları

## 4. Sıkça Sorulan Sorular

### 4.1 Genel Sorular

**S: Uzantı tarayıcımı yavaşlatır mı?**
C: Hayır, uzantı optimize edilmiş şekilde çalışır ve minimum sistem kaynağı kullanır.

**S: Verilerim nerede saklanıyor?**
C: Verileriniz şifrelenmiş şekilde güvenli sunucularımızda ve lokal olarak cihazınızda saklanır.

**S: Premium sürüm ne sunuyor?**
C: Premium sürüm gelişmiş analitik, özel koruma kuralları ve öncelikli destek sunar.

### 4.2 Teknik Sorular

**S: Uzantı çalışmıyorsa ne yapmalıyım?**
C: [Sorun Giderme](#5-sorun-giderme) bölümündeki adımları takip edin.

**S: Yanlış tracker tespiti yapılıyorsa?**
C: Yanlış tespitleri "Hatalı Bildir" butonu ile raporlayabilirsiniz.

## 5. Sorun Giderme

### 5.1 Genel Sorunlar ve Çözümleri

#### Kurulum Sorunları

```yaml
Sorun: Uzantı yüklenmiyor
Çözümler:
  1. Tarayıcıyı yeniden başlatın
  2. Tarayıcı önbelleğini temizleyin
  3. Antivirüs yazılımını kontrol edin

Sorun: İzinler verilemiyor
Çözümler:
  1. Tarayıcı ayarlarını kontrol edin
  2. Diğer güvenlik yazılımlarını kontrol edin
```

#### Performans Sorunları

```yaml
Sorun: Tarayıcı yavaşlıyor
Çözümler:
  1. Önbelleği temizleyin
  2. Koruma seviyesini düşürün
  3. Whitelist kullanın

Sorun: Yüksek RAM kullanımı
Çözümler:
  1. Tarayıcıyı yeniden başlatın
  2. Açık sekme sayısını azaltın
  3. Önbellek boyutunu sınırlayın
```

### 5.2 Hata Kodları

| Kod  | Açıklama              | Çözüm                              |
| ---- | --------------------- | ---------------------------------- |
| E001 | API Bağlantı Hatası   | İnternet bağlantınızı kontrol edin |
| E002 | İzin Hatası           | Tarayıcı izinlerini yenileyin      |
| E003 | Depolama Hatası       | Disk alanını kontrol edin          |
| E004 | Senkronizasyon Hatası | Oturumu yeniden başlatın           |

## 6. Gizlilik ve Veri Yönetimi

### 6.1 Toplanan Veriler

```yaml
Zorunlu Veriler:
  - Ziyaret edilen domain bilgileri
  - Tracker istatistikleri
  - Gizlilik skoru

İsteğe Bağlı Veriler:
  - Tarama geçmişi
  - Detaylı analitikler
  - Kişiselleştirilmiş öneriler
```

### 6.2 Veri Kontrolü

#### 6.2.1 Veri Görüntüleme

1. Web platformuna giriş yapın
2. "Verilerim" sekmesine gidin
3. İstediğiniz veri kategorisini seçin
4. Detaylı raporu görüntüleyin

#### 6.2.2 Veri Silme

1. Ayarlar > Gizlilik menüsüne gidin
2. "Verilerimi Yönet" seçeneğini tıklayın
3. Silmek istediğiniz verileri seçin
4. "Kalıcı Olarak Sil" butonuna basın

### 6.3 Gizlilik Yasaları Uyumu

#### GDPR Hakları

- Verilerinizi görüntüleme
- Verilerinizi silme
- Verilerinizi taşıma
- İşlemeye itiraz etme

#### CCPA Hakları

- Veri toplamayı reddetme
- Verilerinizi silme
- Veri satışını engelleme

## 7. Destek ve İletişim

### 7.1 Destek Kanalları

```yaml
E-posta Desteği:
  Adres: support@digitalfootprint.com
  Yanıt Süresi: 24 saat

Canlı Destek:
  Çalışma Saatleri: 09:00-18:00
  Diller: Türkçe, İngilizce

Forum:
  URL: community.digitalfootprint.com
  Moderasyon: 7/24
```

### 7.2 Geri Bildirim

#### Hata Bildirimi

1. Uzantıdaki "Hata Bildir" butonunu kullanın
2. Sorunu detaylı şekilde açıklayın
3. Varsa ekran görüntüsü ekleyin
4. Sistem bilgilerinizi paylaşın

#### Özellik Önerisi

- Forum üzerinden öneride bulunun
- Topluluk oylamasına katılın
- Geliştirici ekibiyle tartışın

---

## Versiyon Geçmişi

| Versiyon | Tarih | Değişiklikler |
| -------- | ----- | ------------- |
| 1.0.0    | -     | İlk sürüm     |

## İletişim

**Web:** www.digitalfootprint.com  
**E-posta:** contact@digitalfootprint.com  
**Adres:** [Şirket Adresi]  
**Tel:** [Telefon Numarası]
