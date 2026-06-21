# 8000Hz Engine Labs — Girdi Uyumluluk Portalı

**8000Hz / 4000 Hz / 1000 Hz fare, klavye ve diğer girdi aygıtlarının oyun motorlarıyla uyumluluğunu test eden teşhis portalı.**

> 8000Hz fare, klavye ve diğer girdi aygıtlarının 0.125 ms zaman aralığındaki veri akışını işletim sisteminiz kaldırsa dahi, oyun motorunun iç kod mimarisi bu yoğunluğu sindiremeyebilir. İşte 30 oyunun motor düzeyinde kapsamlı testi.

Canlı: **[bayraktarozcan.github.io/8000Hz-Engine-Labs](https://bayraktarozcan.github.io/8000Hz-Engine-Labs/)**

---

## İçindekiler

- [Özellikler](#özellikler)
- [Oyun Veritabanı (30 Oyun)](#oyun-veritabanı-30-oyun)
- [Uyumluluk Durumları](#uyumluluk-durumları)
- [Diagnostik Test Aracı](#diagnostik-test-aracı)
- [Birincil Bilgi Kaynakları](#birincil-bilgi-kaynakları)
- [Mimari Kararlar](#mimari-kararlar)
- [Proje Yapısı](#proje-yapısı)
- [Kullanım](#kullanım)
- [Yerel Geliştirme](#yerel-geliştirme)
- [CI/CD](#cicd)
- [Teknoloji Yığını](#teknoloji-yığını)
- [Güvenlik](#güvenlik)
- [Katkı](#katkı)
- [Lisans](#lisans)

---

## Özellikler

- **30 oyunluk veritabanı**: Her oyun için motor mimarisi, girdi API'si, teknik analiz ve uyumluluk etiketi
- **Etkileşimli filtreleme**: İsme, uyumluluk durumuna ve oyun motoruna göre anlık filtreleme
- **Diagnostik test aracı**: İşlemci gücü, oyun yılı, motor mimarisi ve grafik API'sine göre 8000Hz tahmini uyumluluk puanı hesaplama
- **İstatistik paneli**: Tam uyumlu / kısmi uyumlu / uyumsuz oyun sayıları ve oransal çubuklar
- **Detaylı teknik analizler**: Her oyun için ana iş parçacığı darboğazı, matematiksel yuvarlama hataları ve girdi mesajı yığılması açıklamaları
- **Karanlık tema**: Özel CSS ile sıfırdan tasarlanmış koyu tema, radial gradient arka plan, cam efekti (glassmorphism) header
- **Mobil uyumlu**: Duyarlı grid yapısı (1/2/3/4 kolon)
- **Tamamen istemci tarafı**: Veri tabanı, sunucu veya kimlik doğrulama gerektirmez
- **İki dilli (TR/EN)**: Sayfa üzerinde anlık dil değiştirme, localStorage ile kalıcı tercih

---

## Oyun Veritabanı (30 Oyun)

| # | Oyun | Motor | Durum |
|---|---|---|---|
| 1 | American Truck Simulator | Prism3D | ❌ Uyumsuz |
| 2 | Assetto Corsa Competizione | Unreal Engine 4 | ⚠️ Kısmi |
| 3 | Back 4 Blood | Unreal Engine 4 | ✅ Tam |
| 4 | Battlefield 4 | Frostbite 3 | ❌ Uyumsuz |
| 5 | Battlefield V | Frostbite 3 | ⚠️ Kısmi |
| 6 | Battlefield 2042 | Frostbite (Modern) | ✅ Tam |
| 7 | Chivalry 2 | Unreal Engine 4 | ❌ Uyumsuz |
| 8 | Counter-Strike 2 | Source 2 | ✅ Tam |
| 9 | Euro Truck Simulator 2 | Prism3D | ❌ Uyumsuz |
| 10 | F1 22 | EGO Engine 4.0 | ❌ Uyumsuz |
| 11 | Farming Simulator 22 | GIANTS Engine 9 | ❌ Uyumsuz |
| 12 | Forza Horizon 5 | Forzatech | ✅ Tam |
| 13 | Ghostrunner | Unreal Engine 4 | ⚠️ Kısmi |
| 14 | Grand Theft Auto V Enhanced | RAGE | ❌ Uyumsuz |
| 15 | Insurgency: Sandstorm | Unreal Engine 4 | ❌ Uyumsuz |
| 16 | Mafia: Definitive Edition | Illusion Engine | ❌ Uyumsuz |
| 17 | Mafia II: Definitive Edition | Illusion Engine | ❌ Uyumsuz |
| 18 | Metro 2033 Redux | 4A Engine (Eski) | ❌ Uyumsuz |
| 19 | Metro Exodus Enhanced Edition | 4A Engine (Modern) | ⚠️ Kısmi |
| 20 | Metro: Last Light Redux | 4A Engine (Eski) | ❌ Uyumsuz |
| 21 | Mount & Blade II: Bannerlord | TaleWorlds Custom | ❌ Uyumsuz |
| 22 | Need for Speed Unbound | Frostbite (Modern) | ✅ Tam |
| 23 | PAYDAY 3 | Unreal Engine 4 | ✅ Tam |
| 24 | Ready or Not | Unreal Engine 4 | ❌ Uyumsuz |
| 25 | Red Dead Online | RAGE (Modern) | ⚠️ Kısmi |
| 26 | Squad — Public Testing | Unreal Engine 5.7 | ❌ Uyumsuz |
| 27 | Squad | Unreal Engine 5.7 | ❌ Uyumsuz |
| 28 | The Long Dark | Unity (Eski) | ❌ Uyumsuz |
| 29 | World War Z | Swarm Engine | ✅ Tam |
| 30 | Zero Hour | Unity (Modern) | ❌ Uyumsuz |

**Dağılım**: 9 Tam uyumlu · 6 Kısmi uyumlu · 15 Uyumsuz

---

## Uyumluluk Durumları

| Durum | Açıklama |
|---|---|
| ✅ **Tam Uyumlu** | Motor, 8000Hz girdi sinyalini asenkron iş parçacığında eritir. Takılma, gecikme veya titreme olmaz. |
| ⚠️ **Kısmen Uyumlu** | 8000Hz çalışır ancak yoğun anlarda mikro takılmalar veya kare zamanlaması dalgalanmaları olabilir. 2000–4000 Hz önerilir. |
| ❌ **Kesinlikle Uyumsuz** | Motor, girdileri ana iş parçacığına kilitli işler. 8000Hz'de kamera titremesi, FPS düşüşü ve input lag kaçınılmazdır. 1000 Hz'a sabitlenmesi önerilir. |

### Sınıflandırma Kriterleri

1. **Ana İş Parçacığı Darboğazı**: Motor, girdi verilerini fizik ve render döngüleriyle aynı iş parçacığında mı işliyor?
2. **Matematiksel Hassasiyet**: 32-bit float, 0.125 ms delta zamanlarını yuvarlama hatasız hesaplayabiliyor mu?
3. **Girdi Kuyruğu Mimarisi**: RawInput mesajları asenkron bir kuyrukta mı toplanıyor, yoksa doğrudan senkron mu tüketiliyor?

---

## Diagnostik Test Aracı

Portalın alt kısmında bulunan etkileşimli test aracı, 4 parametreye göre tahmini uyumluluk puanı hesaplar:

1. **İşlemci Gücü**: Son nesil 8+ çekirdek vs. orta seviye/eski
2. **Oyun Çıkış Yılı**: 2021+ (Modern) / 2016–2020 (Ara) / 2015 ve öncesi (Klasik)
3. **Motor Mimarisi**: Modern asenkron / Unreal Engine 4/5 / Unity / Özel eski motorlar
4. **Grafik API'si**: DX12/Vulkan vs. DX11/DX9

Puan aralığı: 0–100. 80+ "Güvenli", 50–79 "Riskli", <50 "Uyumsuz".

> **Uyarı**: Bu test, seçilen oyun motorunun girdi veri tabanı kütüphanesini baz alarak tahmini bir veri stabilizasyonu sonucu üretir. Gerçek sonuçlar arka plan uygulamalarına bağlı olarak değişiklik gösterebilir.

---

## Birincil Bilgi Kaynakları

Portalda kullanılan tüm teknik analizler aşağıdaki kaynaklara dayanır:

| Kaynak | Konu |
|---|---|
| [Microsoft Win32 Raw Input API](https://learn.microsoft.com/en-us/windows/win32/inputdev/raw-input) | Windows HID / RawInput mimari standartları |
| [Valve Source 2 Sub-Tick System](https://developer.valvesoftware.com/wiki/Source_2#Sub-tick_System) | CS2 sub-tick asenkron girdi katmanı |
| [Blur Busters Mouse Guide](https://blurbusters.com/faq/mouse-guide/) | Yüksek polling rate test metodolojileri |
| [Razer HyperPolling Technology](https://www.razer.com/technology/razer-hyperpolling) | Donanım geliştirici kılavuzları |
| [Logitech Polling Rate Guide](https://www.logitech.com/en-us/discover/a/polling-rate-on-a-mouse) | Logitech G polling rate optimizasyonları |
| [Digital Foundry](https://www.digitalfoundry.net) / [Eurogamer Tech](https://www.eurogamer.net/topics/tech) | Frame-time ve input lag analizleri |
| [IEEE Transactions on Games](https://transactions.games) | HCI ve espor akademik yayınları |

---

## Mimari Kararlar

### Neden Tailwind CDN değil de özel CSS?

İlk sürüm Tailwind CSS CDN üzerinden kullanıyordu. CDN bağımlılığı, çevrimdışı çalışmayı engelliyor ve tedarik zinciri güvenlik riski oluşturuyordu. v1.1.0 ile tüm Tailwind utility sınıfları elle yazılmış özel CSS'e dönüştürüldü. Portal artık sıfır harici bağımlılıkla çalışır.

### Neden `src/` dizini?

v1.1.0 ile dosyalar `src/` altına taşındı. GitHub Pages Actions workflow'u `src/` dizinini yayınlar. Bu ayrım, repo kökünün proje dosyaları (README, LICENSE, CI yapılandırmaları) ile karışmasını engeller.

### Neden GitHub Actions (legacy branch deploy değil)?

Legacy Pages (`build_type: legacy`) repo kökünü yayınlıyordu. Dosyalar `src/`'ye taşınınca kökte `index.html` kalmadı ve GitHub README.md render etti. `build_type: workflow`'a geçilerek Actions tabanlı deploy'a sabitlendi. Böylece her push'ta yalnızca bir deploy çalışır.

### Neden CodeQL devre dışı?

Proje statik HTML/CSS/JS olduğu için CodeQL taraması anlamlı bir güvenlik katkısı sağlamıyordu. GitHub'ın built-in CodeQL (yalnızca YAML taraması) da devre dışı bırakıldı.

### Neden Dependabot durduruldu?

GitHub Actions bağımlılıkları (`checkout`, `upload-pages-artifact`, vb.) için Dependabot PR'leri açılıyordu. Workflow'lar askıya alınınca PR'lerin manuel yönetimi gereksiz hale geldi. `open-pull-requests-limit: 0` ile durduruldu, mevcut 5 PR kapatıldı.

---

## Proje Yapısı

```
8000Hz-Engine-Labs/
├── .github/
│   ├── dependabot.yml                  # Dependabot yapılandırması (durduruldu)
│   └── workflows/
│       └── pages.yml                   # GitHub Pages deploy workflow
├── Docs/
│   └── README.md                       # Dokümantasyon indeksi
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css               # Tüm stiller (~420 satır, Tailwind-esque)
│   │   └── favicon.svg                 # I/O temalı SVG favicon
│   ├── index.html                      # Ana uygulama sayfası (TR/EN)
│   └── index.js                        # Oyun veritabanı + JS mantığı (TR/EN)
├── .gitignore
├── CHANGELOG.md                        # Sürüm geçmişi (TR/EN)
├── LICENSE                             # MIT
├── package.json                        # serve bağımlılığı (isteğe bağlı)
├── README.md                           # Bu dosya (TR/EN)
└── SECURITY.md                         # Güvenlik politikası (TR/EN)
```

---

## Kullanım

Site doğrudan GitHub Pages üzerinde yayındadır:

**[https://bayraktarozcan.github.io/8000Hz-Engine-Labs/](https://bayraktarozcan.github.io/8000Hz-Engine-Labs/)**

Hiçbir build adımı, kayıt veya kurulum gerektirmez. Site tamamen istemci tarafında çalışır.

---

## Yerel Geliştirme

```bash
# 1. Depoyu klonlayın
git clone https://github.com/bayraktarozcan/8000Hz-Engine-Labs.git
cd 8000Hz-Engine-Labs

# 2. Bağımlılıkları yükleyin (opsiyonel — sadece serve için)
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
# → http://localhost:3000

# 4. VEYA doğrudan tarayıcıda açın
# src/index.html dosyasını herhangi bir tarayıcıya sürükleyin
```

> `serve` bağımlılığı isteğe bağlıdır. Site, hiçbir build adımı olmadan doğrudan dosya sistemi üzerinden çalışır. `serve` yalnızca yerel HTTP sunucusu içindir (service worker'lar, absolute path testleri vb. için).

---

## CI/CD

| İş Akışı | Tetikleyici | Yaptığı |
|---|---|---|
| **Deploy to GitHub Pages** | `push → main` | `src/` dizinini GitHub Pages'e yayınlar |

Deploy durumu: [![pages-build-deployment](https://github.com/bayraktarozcan/8000Hz-Engine-Labs/actions/workflows/pages.yml/badge.svg)](https://github.com/bayraktarozcan/8000Hz-Engine-Labs/actions/workflows/pages.yml)

Pull request'ler otomatik deploy tetiklemez; yalnızca `main` branch'ine push'lar tetikler.

---

## Teknoloji Yığını

| Bileşen | Teknoloji |
|---|---|
| İşaretleme | HTML5 (`lang="tr"`/`lang="en"`, semantic HTML5) |
| Stil | Özel CSS (Tailwind-eske utility sınıfları, ~420 satır) |
| JavaScript | Vanilla JS (ES6+, 0 bağımlılık, ~540 satır) |
| İkon | SVG (I/O temalı özel tasarım) |
| Barındırma | GitHub Pages (Actions ile deploy) |
| Yerel sunucu | `serve` (npm, isteğe bağlı) |
| CI/CD | GitHub Actions (pages.yml) |

**Sıfır runtime bağımlılık.** Harici CDN, framework, kütüphane veya build aracı kullanılmaz. İki dilli yapı (TR/EN) istemci tarafında localStorage ile çalışır.

---

## Güvenlik

Detaylı güvenlik politikası için [`SECURITY.md`](SECURITY.md) dosyasına bakın.

Özet:
- Statik site, sunucu tarafı işleme yok
- Kimlik doğrulama, veritabanı veya kullanıcı verisi depolama içermez
- Tüm oyun verileri statiktir, kullanıcı tarafından oluşturulmaz
- Tedarik zinciri riski yoktur (sıfır harici bağımlılık)
- `.env` dosyaları `.gitignore` ile korunur, repository'de bulunmaz

---

## Katkı

Bu proje kişisel bir araştırma/teşhis aracıdır. Öneri ve düzeltmeler için:

1. [GitHub Issues](https://github.com/bayraktarozcan/8000Hz-Engine-Labs/issues) üzerinden konu açın
2. Veya doğrudan Pull Request gönderin

Oyun veritabanına yeni oyun ekleme, motor analizini düzeltme veya yeni test senaryoları önerme konularında katkılarınızı bekleriz.

---

## Lisans

**MIT License** — Detaylar için [`LICENSE`](LICENSE) dosyasına bakın.

Telif &copy; 2026 [bayraktarozcan](https://github.com/bayraktarozcan)

---

# 8000Hz Engine Labs — Input Compatibility Portal (EN)

**Diagnostic portal testing compatibility of 8000Hz / 4000Hz / 1000Hz mice, keyboards, and other input devices against game engines.**

> Even if your OS can handle the 0.125ms data stream from an 8000Hz mouse or keyboard, the game engine's internal code architecture might not. Here is a comprehensive engine-level test of 30 games.

Live: **[bayraktarozcan.github.io/8000Hz-Engine-Labs](https://bayraktarozcan.github.io/8000Hz-Engine-Labs/)**

---

## Table of Contents

- [Features](#features-en)
- [Game Database (30 Games)](#game-database-30-games-en)
- [Compatibility Statuses](#compatibility-statuses-en)
- [Diagnostic Test Tool](#diagnostic-test-tool-en)
- [Primary Information Sources](#primary-information-sources-en)
- [Architecture Decisions](#architecture-decisions-en)
- [Project Structure](#project-structure-en)
- [Usage](#usage-en)
- [Local Development](#local-development-en)
- [CI/CD](#cicd-en)
- [Technology Stack](#technology-stack-en)
- [Security](#security-en)
- [Contributing](#contributing-en)
- [License](#license-en)

---

<h2 id="features-en">Features</h2>

- **30-game database**: Engine architecture, input API, technical analysis, and compatibility label for each game
- **Interactive filtering**: Real-time filtering by name, compatibility status, and game engine
- **Diagnostic test tool**: Estimated 8000Hz compatibility score based on CPU power, game year, engine architecture, and graphics API
- **Statistics panel**: Fully compatible / partially compatible / incompatible counts with proportional bars
- **Detailed technical analysis**: Main thread bottleneck, floating-point rounding errors, and input message pileup explanations for each game
- **Dark theme**: Custom dark theme with radial gradient background and glassmorphism header
- **Mobile responsive**: Adaptive grid layout (1/2/3/4 columns)
- **Fully client-side**: No database, server, or authentication required
- **Bilingual (TR/EN)**: Instant language switching on the page with localStorage persistence

---

<h2 id="game-database-30-games-en">Game Database (30 Games)</h2>

| # | Game | Engine | Status |
|---|---|---|---|
| 1 | American Truck Simulator | Prism3D | ❌ Incompatible |
| 2 | Assetto Corsa Competizione | Unreal Engine 4 | ⚠️ Partial |
| 3 | Back 4 Blood | Unreal Engine 4 | ❌ Incompatible |
| 4 | Battlefield 4 | Frostbite 3 | ❌ Incompatible |
| 5 | Battlefield V | Frostbite 3 | ⚠️ Partial |
| 6 | Battlefield 2042 | Frostbite (Modern) | ⚠️ Partial |
| 7 | Chivalry 2 | Unreal Engine 4 | ❌ Incompatible |
| 8 | Counter-Strike 2 | Source 2 | ✅ Compatible |
| 9 | Euro Truck Simulator 2 | Prism3D | ❌ Incompatible |
| 10 | F1 22 | EGO Engine 4.0 | ❌ Incompatible |
| 11 | Farming Simulator 22 | GIANTS Engine 9 | ❌ Incompatible |
| 12 | Forza Horizon 5 | Forzatech | ✅ Compatible |
| 13 | Ghostrunner | Unreal Engine 4 | ⚠️ Partial |
| 14 | Grand Theft Auto V Enhanced | RAGE | ❌ Incompatible |
| 15 | Insurgency: Sandstorm | Unreal Engine 4 | ❌ Incompatible |
| 16 | Mafia: Definitive Edition | Illusion Engine | ❌ Incompatible |
| 17 | Mafia II: Definitive Edition | Illusion Engine | ❌ Incompatible |
| 18 | Metro 2033 Redux | 4A Engine (Legacy) | ❌ Incompatible |
| 19 | Metro Exodus Enhanced Edition | 4A Engine (Modern) | ⚠️ Partial |
| 20 | Metro: Last Light Redux | 4A Engine (Legacy) | ❌ Incompatible |
| 21 | Mount & Blade II: Bannerlord | TaleWorlds Custom | ❌ Incompatible |
| 22 | Need for Speed Unbound | Frostbite (Modern) | ✅ Compatible |
| 23 | PAYDAY 3 | Unreal Engine 4 | ❌ Incompatible |
| 24 | Ready or Not | Unreal Engine 5.x | ❌ Incompatible |
| 25 | Red Dead Online | RAGE (Modern) | ⚠️ Partial |
| 26 | Squad — Public Testing | Unreal Engine 5.7 | ❌ Incompatible |
| 27 | Squad | Unreal Engine 5.7 | ❌ Incompatible |
| 28 | The Long Dark | Unity (Legacy) | ❌ Incompatible |
| 29 | World War Z | Swarm Engine | ✅ Compatible |
| 30 | Zero Hour | Unity (Modern) | ❌ Incompatible |

**Distribution**: 7 Compatible · 6 Partial · 17 Incompatible

---

<h2 id="compatibility-statuses-en">Compatibility Statuses</h2>

| Status | Description |
|---|---|
| ✅ **Compatible** | The engine processes 8000Hz input signals on an async thread. No stuttering, lag, or jitter. |
| ⚠️ **Partially Compatible** | 8000Hz works but micro-stutters or frame-time fluctuations may occur under heavy load. 2000–4000Hz recommended. |
| ❌ **Incompatible** | The engine processes inputs locked to the main thread. Camera jitter, FPS drops, and input lag are unavoidable at 8000Hz. Locking to 1000Hz is recommended. |

### Classification Criteria

1. **Main Thread Bottleneck**: Does the engine process input data on the same thread as physics and render loops?
2. **Mathematical Precision**: Can 32-bit floats calculate 0.125ms delta times without rounding errors?
3. **Input Queue Architecture**: Are RawInput messages collected in an async queue, or consumed synchronously?

---

<h2 id="diagnostic-test-tool-en">Diagnostic Test Tool</h2>

The interactive test tool at the bottom of the portal calculates an estimated compatibility score based on 4 parameters:

1. **CPU Power**: Latest-gen 8+ cores vs. mid-range/legacy
2. **Game Release Year**: 2021+ (Modern) / 2016–2020 (Mid) / 2015 and earlier (Classic)
3. **Engine Architecture**: Modern async / Unreal Engine 4/5 / Unity / Legacy custom engines
4. **Graphics API**: DX12/Vulkan vs. DX11/DX9

Score range: 0–100. 80+ "Safe", 50–79 "Risky", <50 "Incompatible".

> **Warning**: This test produces an estimated stability result based on the selected game engine's input database library. Actual results may vary depending on background applications.

---

<h2 id="primary-information-sources-en">Primary Information Sources</h2>

All technical analyses used in this portal are based on the following sources:

| Source | Topic |
|---|---|
| [Microsoft Win32 Raw Input API](https://learn.microsoft.com/en-us/windows/win32/inputdev/raw-input) | Windows HID / RawInput architecture standards |
| [Valve Source 2 Sub-Tick System](https://developer.valvesoftware.com/wiki/Source_2#Sub-tick_System) | CS2 sub-tick async input layer |
| [Blur Busters Mouse Guide](https://blurbusters.com/faq/mouse-guide/) | High polling rate testing methodologies |
| [Razer HyperPolling Technology](https://www.razer.com/technology/razer-hyperpolling) | Hardware developer guides |
| [Logitech Polling Rate Guide](https://www.logitech.com/en-us/discover/a/polling-rate-on-a-mouse) | Logitech G polling rate optimizations |
| [Digital Foundry](https://www.digitalfoundry.net) / [Eurogamer Tech](https://www.eurogamer.net/topics/tech) | Frame-time and input lag analysis |
| [IEEE Transactions on Games](https://transactions.games) | HCI and esports academic publications |

---

<h2 id="architecture-decisions-en">Architecture Decisions</h2>

### Why custom CSS instead of Tailwind CDN?

The initial version used Tailwind CSS via CDN. The CDN dependency blocked offline usage and created a supply chain security risk. In v1.1.0, all Tailwind utility classes were rewritten as hand-crafted CSS. The portal now runs with zero external dependencies.

### Why `src/` directory?

Files were moved under `src/` in v1.1.0. The GitHub Pages Actions workflow publishes the `src/` directory. This separation keeps the repo root clean for project files (README, LICENSE, CI configs).

### Why GitHub Actions (instead of legacy branch deploy)?

Legacy Pages (`build_type: legacy`) published the repo root. After files moved to `src/`, there was no `index.html` in the root, so GitHub rendered the README.md instead. Switched to `build_type: workflow` for Actions-based deployment. Now only one deploy runs per push.

### Why is CodeQL disabled?

Since this project is static HTML/CSS/JS, CodeQL scanning does not provide meaningful security value. GitHub's built-in CodeQL (YAML-only scanning) is also disabled.

### Why was Dependabot stopped?

Dependabot was opening PRs for GitHub Actions dependencies (`checkout`, `upload-pages-artifact`, etc.). After workflows were suspended, manual PR management became unnecessary. Stopped with `open-pull-requests-limit: 0`; existing 5 PRs were closed.

---

<h2 id="project-structure-en">Project Structure</h2>

```
8000Hz-Engine-Labs/
├── .github/
│   ├── dependabot.yml                  # Dependabot config (suspended)
│   └── workflows/
│       └── pages.yml                   # GitHub Pages deploy workflow
├── Docs/
│   └── README.md                       # Documentation index
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css               # All styles (~420 lines, Tailwind-esque)
│   │   └── favicon.svg                 # I/O themed SVG favicon
│   ├── index.html                      # Main app page (TR/EN)
│   └── index.js                        # Game database + JS logic (TR/EN)
├── .gitignore
├── CHANGELOG.md                        # Changelog (TR/EN)
├── LICENSE                             # MIT
├── package.json                        # serve dependency (optional)
├── README.md                           # This file (TR/EN)
└── SECURITY.md                         # Security policy (TR/EN)
```

---

<h2 id="usage-en">Usage</h2>

The site is live on GitHub Pages:

**[https://bayraktarozcan.github.io/8000Hz-Engine-Labs/](https://bayraktarozcan.github.io/8000Hz-Engine-Labs/)**

No build step, registration, or setup required. The site runs entirely client-side.

---

<h2 id="local-development-en">Local Development</h2>

```bash
# 1. Clone the repository
git clone https://github.com/bayraktarozcan/8000Hz-Engine-Labs.git
cd 8000Hz-Engine-Labs

# 2. Install dependencies (optional — for serve only)
npm install

# 3. Start development server
npm run dev
# → http://localhost:3000

# 4. OR open directly in browser
# Drag src/index.html into any browser
```

> The `serve` dependency is optional. The site works directly from the filesystem without any build step. `serve` is only for a local HTTP server (service workers, absolute path tests, etc.).

---

<h2 id="cicd-en">CI/CD</h2>

| Workflow | Trigger | Action |
|---|---|---|
| **Deploy to GitHub Pages** | `push → main` | Publishes `src/` directory to GitHub Pages |

Deploy status: [![pages-build-deployment](https://github.com/bayraktarozcan/8000Hz-Engine-Labs/actions/workflows/pages.yml/badge.svg)](https://github.com/bayraktarozcan/8000Hz-Engine-Labs/actions/workflows/pages.yml)

Pull requests do not trigger automatic deployment; only pushes to the `main` branch trigger it.

---

<h2 id="technology-stack-en">Technology Stack</h2>

| Component | Technology |
|---|---|
| Markup | HTML5 (`lang="tr"`/`lang="en"`, semantic HTML5) |
| Style | Custom CSS (Tailwind-esque utility classes, ~420 lines) |
| JavaScript | Vanilla JS (ES6+, 0 dependencies, ~540 lines) |
| Icon | SVG (custom I/O design) |
| Hosting | GitHub Pages (Actions deploy) |
| Local server | `serve` (npm, optional) |
| CI/CD | GitHub Actions (pages.yml) |

**Zero runtime dependencies.** No external CDN, framework, library, or build tool. Bilingual structure (TR/EN) works client-side with localStorage.

---

<h2 id="security-en">Security</h2>

See [`SECURITY.md`](SECURITY.md) for the full security policy.

Summary:
- Static site, no server-side processing
- No authentication, database, or user data storage
- All game data is static, not user-generated
- No supply chain risk (zero external dependencies)
- `.env` files protected by `.gitignore`, not present in repository

---

<h2 id="contributing-en">Contributing</h2>

This is a personal research/diagnostic tool. For suggestions and corrections:

1. Open a topic via [GitHub Issues](https://github.com/bayraktarozcan/8000Hz-Engine-Labs/issues)
2. Or submit a Pull Request directly

We welcome contributions for adding new games to the database, correcting engine analysis, or suggesting new test scenarios.

---

<h2 id="license-en">License</h2>

**MIT License** — See [`LICENSE`](LICENSE) for details.

Copyright &copy; 2026 [bayraktarozcan](https://github.com/bayraktarozcan)
