<!-- ===================================================================== -->
<!--          8000Hz ENGINE LABS — CHANGELOG                           -->
<!--       Input Compatibility Portal · Game Engine Analysis            -->
<!-- ===================================================================== -->

<div align="center">

<br>

# 8000Hz Engine Labs — Changelog

<br>

> **Language / Dil** &nbsp;
> [EN English](#-english-changelog) &nbsp;·&nbsp; [TR Türkçe](#-türkçe-değişiklik-günlüğü)

<br>

</div>

---

<a id="-english-changelog"></a>

## EN English Changelog

> Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

---

### v1.2.0 — 2026-06-21

#### Added
- **Bilingual support (TR/EN)**: Client-side language toggle button with localStorage persistence. All UI text, game data, diagnostic tool, source cards, and error messages in both Turkish and English.
- **Bilingual documentation**: English sections added to `README.md`, `CHANGELOG.md`, and `SECURITY.md`

#### Changed
- **Game database corrections** (verified against primary sources as of June 21, 2026):
  - **Back 4 Blood**: Fully Compatible → Incompatible (stutter reports at 125Hz+ confirmed)
  - **PAYDAY 3**: Fully Compatible → Incompatible (UE4 input stack cannot handle 4000/8000Hz)
  - **Battlefield 2042**: Compatible → Partially Compatible (input lag reports at 2000Hz+)
  - **Ready or Not**: UE4 → UE5.x (migrated to UE5 in December 2023)
  - **Battlefield V**: API description corrected ("Buffer" removed)

#### Fixed
- **Back 4 Blood**: Critical classification error fixed. Previously marked "Fully Compatible" — user reports confirm stuttering above 125Hz.
- **PAYDAY 3**: Critical classification error fixed. Starbreeze's claim of optimized raw input pipeline disproven by primary sources.
- **Battlefield 2042**: Status downgraded from "Compatible" to "Partially Compatible" (2000Hz+ input lag).

---

### v1.1.0 — 2026-06-21

#### Added
- **Game database**: 30-game engine compatibility analysis
- **Interactive diagnostic tool**: 4-parameter (CPU, year, engine, API) estimated compatibility score
- **Primary information sources section**: 6 source cards with verified URL links
- **Statistics panel**: Game counts and proportional fill bars
- **Back-to-top button**: Quick scroll up on long pages
- **Empty state message**: Notification when no filter results match
- **`package.json`**: `serve` dependency for local development
- **GitHub Pages Actions workflow**: CI/CD publishing `src/` directory
- **Project foundation files**: `CHANGELOG.md`, `SECURITY.md`, `LICENSE`, `.gitignore`, `.github/dependabot.yml`
- **`Docs/README.md`**: Documentation index

#### Changed
- **Tailwind CSS CDN → custom CSS**: All utility classes rewritten by hand (~420 lines). Zero external dependencies, offline-capable.
- **File structure reorganized**: `index.html`, `style.css`, `favicon.svg` moved to `src/`
- **JavaScript extracted**: All JS logic moved from `index.html` to `src/index.js`
- **Favicon**: Unicode character → I/O themed SVG
- **Dark theme improvements**:
  - `color-scheme: dark` added (scrollbar, form fields dark)
  - `--gaming-card: #0e1322` (was `#0a0e18`)
  - Body: radial gradient background
  - Header: `blur(14px)` glassmorphism
  - Autofill override (input background black)
- **Switched to Tailwind-esque class names**: `bg-dark` → `bg-gaming-dark`, `bg-card` → `bg-gaming-card`, etc.
- **Link text fixed**: `lang="en"` added to `Source: ...` lines (Turkish İ→I conversion issue resolved)

#### Fixed
- **Turkish character normalization**: Fixed capitalization
- **LaTeX math expressions**: Converted to plain text
- **Missing CSS classes added**: `bg-gaming-success`, `bg-gaming-warning`, `bg-gaming-danger`, `bg-gaming-dark/80` (critical for progress bars)
- **CSS duplicates removed**: Repeated class block eliminated (~30 lines)
- **focus:ring-1 removed**: Produced same effect as `focus:ring-indigo-500`
- **Squad UE5.7 analysis corrected**: Engine version updated UE4 → UE5.5 (v9.0, Sep 2025) → UE5.7 (v10.4, Apr 2026). API updated to "OWI Custom Input Layer (Main Thread-Bound RawInput)". Analysis verified against primary sources (SteamDB, UE5.7 release notes). "incompatible" classification confirmed.
- **`.env.example` removed from repository**: Template files should not be under version control.
- **File structure**: `.en.md` files removed, English content merged into existing `.md` files (TR + EN in same file)

### Security
- **CodeQL disabled** (unnecessary for static site)
- **Built-in CodeQL disabled** (API set to `state: not-configured`)
- **Auto-approve workflow removed** (`GITHUB_TOKEN` cannot approve PRs)
- **Dependabot stopped** (`open-pull-requests-limit: 0`), 5 existing PRs closed
- **`.gitignore` fixed**: `!.env.example` exception removed

### Infrastructure
- **Pages `build_type: legacy` → `workflow`**: Dual deploy issue resolved. Only Actions workflow deploys now.
- **`.disabled` workflows deleted**: `codeql.yml.disabled`, `auto-approve.yml.disabled`

---

### v1.0.0 — 2026-06-21

Initial release.

#### Added
- Game database: 30-game engine compatibility analysis
- Compatibility status labels (Full / Partial / Incompatible)
- Filtering (name, status, engine)
- Static HTML + Tailwind CSS CDN + Vanilla JS
- GitHub Pages (legacy branch deploy)
- MIT license

#### Notes
- Tailwind CSS loaded via CDN (no offline support)
- All code in a single `index.html`
- CSS dependent on Tailwind CDN version
- Pages `build_type: legacy` (deploy from repo root)

---

### Future Plan

| Version | Goal |
|---|---|
| v1.3.0 | Graphical polling rate test tool (real-time), Community-contributed game database |
| v2.0.0 | User theme preferences, expanded diagnostic tool |

---

<a id="-türkçe-değişiklik-günlüğü"></a>

## TR Türkçe Değişiklik Günlüğü

> Biçim: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

---

### v1.2.0 — 2026-06-21

#### Eklenenler
- **İki dilli destek (TR/EN)**: İstemci tarafında dil değiştirme butonu, localStorage ile kalıcı tercih. Tüm UI metinleri, oyun verileri, diagnostik araç, kaynak kartları ve hata mesajları hem Türkçe hem İngilizce.
- **İngilizce dokümantasyon**: Tüm dokümantasyon dosyalarına (`README.md`, `CHANGELOG.md`, `SECURITY.md`) İngilizce bölüm eklendi

#### Değişenler
- **Oyun veritabanı düzeltmeleri** (21 Haziran 2026 itibariyle birincil kaynaklarla teyit edildi):
  - **Back 4 Blood**: Tamamen Uyumlu → Kesinlikle Uyumsuz (125Hz üstü stutter raporları doğrulandı)
  - **PAYDAY 3**: Tamamen Uyumlu → Kesinlikle Uyumsuz (UE4 input stack 4000/8000Hz işleyemiyor)
  - **Battlefield 2042**: Uyumlu → Kısmen Uyumlu (2000Hz üzeri input lag raporları)
  - **Ready or Not**: UE4 → UE5.x (Aralık 2023'te UE5'e geçirildi)
  - **Battlefield V**: API açıklaması düzeltildi ("Buffer" ifadesi kaldırıldı)

#### Düzeltmeler
- **Back 4 Blood**: Kritik sınıflandırma hatası düzeltildi. Daha önce "Tamamen Uyumlu" olarak işaretlenmişti — kullanıcı raporları 125Hz üstünde stutter olduğunu doğruluyor.
- **PAYDAY 3**: Kritik sınıflandırma hatası düzeltildi. Starbreeze'in raw input pipeline'ı optimize ettiği iddiası birincil kaynaklarla çürütüldü.
- **Battlefield 2042**: Durum "Uyumlu"dan "Kısmen Uyumlu"ya düşürüldü (2000Hz üzeri giriş gecikmesi).

---

### v1.1.0 — 2026-06-21

#### Eklenenler
- **Oyun veritabanı**: 30 oyun motoru uyumluluk analizi
- **Etkileşimli diagnostik araç**: 4 parametreli (işlemci, yıl, motor, API) tahmini uyumluluk puanı hesaplama
- **Birincil bilgi kaynakları bölümü**: 6 kaynak kartı, doğrulanmış URL bağlantıları
- **İstatistik paneli**: Oyun sayıları ve oransal dolum çubukları
- **Back-to-top butonu**: Uzun sayfada hızlı yukarı dönüş
- **Boş durum mesajı**: Filtreleme sonucu eşleşme yoksa kullanıcıya bildirim
- **`package.json`**: Yerel geliştirme için `serve` bağımlılığı
- **GitHub Pages Actions workflow**: `src/` dizinini yayınlayan CI/CD
- **Proje temel dosyaları**: `CHANGELOG.md`, `SECURITY.md`, `LICENSE`, `.gitignore`, `.github/dependabot.yml`
- **`Docs/README.md`**: Dokümantasyon indeksi

#### Değişenler
- **Tailwind CSS CDN → özel CSS**: Tüm utility sınıfları elle yazıldı (~420 satır). Sıfır harici bağımlılık, çevrimdışı çalışabilirlik.
- **Dosya yapısı yeniden düzenlendi**: `index.html`, `style.css`, `favicon.svg` → `src/` altına taşındı.
- **JavaScript ayrıştırıldı**: Tüm JS mantığı `index.html` içinden `src/index.js`'e çıkarıldı.
- **Favicon**: Unicode karakter → I/O temalı SVG
- **Karanlık tema iyileştirmeleri**:
  - `color-scheme: dark` eklendi (scrollbar, form alanları koyu)
  - `--gaming-card: #0e1322` (öncesi `#0a0e18`)
  - Body: radial gradient arka plan
  - Header: `blur(14px)` glassmorphism
  - Autofill override (input arka planı siyah)
- **Tailwind-eske sınıf adlarına geçildi**: `bg-dark` → `bg-gaming-dark`, `bg-card` → `bg-gaming-card`, vb.
- **Bağlantı metinleri düzeltildi**: `Kaynak: ...` satırlarına `lang="en"` etiketi eklendi (Türkçe İ→I dönüşümü sorunu giderildi)

#### Düzeltmeler
- **Türkçe karakter normalizasyonu**: "8000Hz Oyun Motoru Uyumluluk Portalı" (Portali → Portalı)
- **LaTeX matematik ifadeleri**: Sade metne dönüştürüldü
- **CSS eksik sınıfları eklendi**: `bg-gaming-success`, `bg-gaming-warning`, `bg-gaming-danger`, `bg-gaming-dark/80` (progress bar için kritik)
- **CSS fazlalıkları temizlendi**: Yinelenen sınıf bloğu kaldırıldı (~30 satır)
- **focus:ring-1 kaldırıldı**: `focus:ring-indigo-500` ile aynı etkiyi üretiyordu
- **Squad UE5.7 analizi düzeltildi**: Motor sürümü UE4 → UE5.5 (v9.0, Eyl 2025) → UE5.7 (v10.4, Nis 2026) olarak düzeltildi. API "OWI Custom Input Layer (Main Thread-Bound RawInput)" olarak güncellendi. Analiz birincil kaynaklarla (SteamDB, UE5.7 release notes) teyit edildi. "incompatible" sınıflandırması doğrulandı.
- **`.env.example` repository'den kaldırıldı**: Template dosyaları sürüm kontrolünde tutulmamalı.
- **Dosya yapısı**: `.en.md` dosyaları kaldırıldı, İngilizce içerik mevcut `.md` dosyalarına eklendi (TR + EN aynı dosyada)

#### Güvenlik
- **CodeQL devre dışı** (statik site için gereksiz)
- **Built-in CodeQL devre dışı** (API ile `state: not-configured`)
- **Auto-approve workflow'u kaldırıldı** (`GITHUB_TOKEN` PR onaylayamaz)
- **Dependabot durduruldu** (`open-pull-requests-limit: 0`), 5 mevcut PR kapatıldı
- **`.gitignore` düzeltildi**: `!.env.example` exception'ı kaldırıldı

#### Altyapı
- **Pages `build_type: legacy` → `workflow`**: Çift deploy sorunu çözüldü. Artık yalnızca Actions workflow'u deploy eder.
- **`.disabled` workflow'ları silindi**: `codeql.yml.disabled`, `auto-approve.yml.disabled`

---

### v1.0.0 — 2026-06-21

İlk sürüm.

#### Eklenenler
- Oyun veritabanı: 30 oyun motoru uyumluluk analizi
- Uyumluluk durumu etiketleri (Tam / Kısmi / Uyumsuz)
- Filtreleme (isim, durum, motor)
- Statik HTML + Tailwind CSS CDN + Vanilla JS
- GitHub Pages (legacy branch deploy)
- MIT lisansı

#### Notlar
- Tailwind CSS CDN üzerinden yükleniyordu (çevrimdışı çalışmaz)
- Tüm kod tek `index.html` içindeydi
- CSS, Tailwind'in CDN sürümüne bağımlıydı
- Pages `build_type: legacy` (repo kökünden deploy)

---

### Gelecek Planı

| Sürüm | Hedef |
|---|---|
| v1.3.0 | Grafiksel polling rate test aracı (gerçek zamanlı), Community katkılı oyun veritabanı |
| v2.0.0 | Kullanıcı tema tercihleri, genişletilmiş diagnostik araç |
