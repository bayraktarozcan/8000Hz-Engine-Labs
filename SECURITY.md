<!-- ===================================================================== -->
<!--          8000Hz ENGINE LABS — SECURITY                              -->
<!--       Input Compatibility Portal · Game Engine Analysis            -->
<!-- ===================================================================== -->

<div align="center">

<br>

# 🛡️ 8000Hz Engine Labs — Security Policy

<br>

> **Language / Dil** &nbsp;
> [EN English](#-english-security-policy) &nbsp;·&nbsp; [TR Türkçe](#-türkçe-güvenlik-politikası)

<br>

</div>

---

<a id="-english-security-policy"></a>

## EN English Security Policy

### Project Security Profile

8000Hz Engine Labs is a **static diagnostic tool** hosted on GitHub Pages:

- **No server-side processing** — all code runs client-side
- **No authentication** — no user accounts, sessions, or cookie management
- **No database** — all game data is defined in a static JavaScript array
- **No user data storage** — form inputs processed in local memory, never sent anywhere
- **Zero runtime dependencies** — no external CDN, libraries, or third-party code

This profile architecturally invalidates most traditional web application vulnerability classes (XSS, CSRF, SQLi, SSRF, auth bypass).

---

### Supported Versions

| Version | Status | Security Support |
|---|---|---|
| v1.2.x | :white_check_mark: Active development | Full support |
| v1.1.x | :warning: Maintenance mode | Critical security fixes only |
| v1.0.x | :x: Discontinued | Not supported |

Users are recommended to always use the latest version (v1.2.x).

---

### Vulnerability Reporting Process

If you discover a security vulnerability:

#### :warning: DO NOT
- **Open a public issue** — do not share vulnerability details publicly
- **Submit a public Pull Request** — send the fix privately
- **Disclose on social media** — follow responsible disclosure rules

#### :white_check_mark: DO
1. **Submit a report**: Contact the repository owner directly via email
2. **Wait**: Your report will be acknowledged **within 48 hours**
3. **Collaborate**: Additional information may be requested during verification and impact analysis
4. **Wait for the fix**: You will be notified when a security update is published

#### Process
```
Report → Acknowledgment within 48h → Verification & impact analysis → Fix development → Testing → Release → Thank the reporter
```

---

### Security Scope

#### In-scope concerns

| Area | Description |
|---|---|
| **Supply chain** | Although the project has zero runtime dependencies, the `serve` dev dependency and GitHub Actions workers carry potential supply chain risk. `package.json` / `package-lock.json` should be audited regularly. |
| **CI/CD pipeline** | GitHub Actions workflows (`pages.yml`) should be reviewed for privilege escalation or secret leakage. The current config uses `GITHUB_TOKEN` only for Pages deploy; no other secrets are defined. |
| **Content injection** | All game data is static and not user-generated. `innerHTML` usage is limited to safe, predefined templates. |
| **Dependency confusion** | The `serve` package is installed from the npm registry. Since the package name is a common word, internal confusion risk should be considered. |

#### Out-of-scope concerns

| Area | Rationale |
|---|---|
| **SQL/NoSQL injection** | No database |
| **Authentication vulnerabilities** | No sessions, accounts, or auth mechanisms |
| **Server-side processing** | No backend; all processing is client-side |
| **SSL/TLS configuration** | Managed by GitHub Pages |
| **DDoS attacks** | Protected by GitHub Pages infrastructure |

---

### Secure Configuration Checklist

When forking the project or running it in your own environment, perform the following checks:

- [ ] `.env` file is not in the repository (protected by `.gitignore`)
- [ ] `GITHUB_TOKEN` configured with only necessary permissions (Pages deploy)
- [ ] `open-pull-requests-limit` set to 0 or a reasonable value for Dependabot
- [ ] No outdated dependencies in `package.json`
- [ ] GitHub Pages `build_type` set to `workflow`

---

### Security Update History

| Date | Change |
|---|---|
| 2026-06-21 | `.env.example` removed from repository, `!.env.example` exception in `.gitignore` deleted |
| 2026-06-21 | CodeQL default setup disabled (unnecessary for static site) |
| 2026-06-21 | Auto-approve workflow removed (`GITHUB_TOKEN` cannot approve PRs) |
| 2026-06-21 | `package.json` added, dependencies formally defined |

---

### Contact

For security reports, please contact via **private message** on GitHub Issues or through the repository owner's GitHub profile.

Thank you to all open-source security researchers.

---

<a id="-türkçe-güvenlik-politikası"></a>

## TR Türkçe Güvenlik Politikası

### Proje Güvenlik Profili

8000Hz Engine Labs, GitHub Pages üzerinde barındırılan **statik bir teşhis aracıdır**:

- **Sunucu tarafı işleme yoktur** — tüm kod istemci tarafında çalışır
- **Kimlik doğrulama yoktur** — kullanıcı hesabı, oturum veya çerez yönetimi içermez
- **Veritabanı yoktur** — tüm oyun verileri statik JavaScript dizisinde tanımlıdır
- **Kullanıcı verisi depolanmaz** — form girdileri yerel bellekte işlenir, hiçbir yere gönderilmez
- **Sıfır runtime bağımlılık** — harici CDN, kütüphane veya üçüncü taraf kodu içermez

Bu profil, geleneksel web uygulamalarındaki çoğu güvenlik açığı sınıfını (XSS, CSRF, SQLi, SSRF, auth bypass) mimari olarak geçersiz kılar.

---

### Desteklenen Sürümler

| Sürüm | Durum | Güvenlik Desteği |
|---|---|---|
| v1.2.x | :white_check_mark: Aktif geliştirme | Tam destek |
| v1.1.x | :warning: Bakım modu | Yalnızca kritik güvenlik düzeltmeleri |
| v1.0.x | :x: Durduruldu | Desteklenmiyor |

Kullanıcıların her zaman en son sürümü (v1.2.x) kullanmaları önerilir.

---

### Zafiyet Bildirim Süreci

Bir güvenlik açığı keşfettiyseniz:

#### :warning: YAPILMAMASI GEREKENLER
- **Public issue açmayın** — zafiyet detaylarını herkese açık şekilde paylaşmayın
- **Public Pull Request göndermeyin** — düzeltmeyi özel olarak iletin
- **Sosyal medyada ifşa etmeyin** — sorumlu ifşa (responsible disclosure) kurallarına uyun

#### :white_check_mark: YAPILMASI GEREKENLER
1. **Bildirimi gönderin**: Doğrudan depo sahibine e-posta ile ulaşın
2. **Bekleyin**: Bildiriminiz **48 saat içinde** alındığında teyit edilecektir
3. **İş birliği yapın**: Doğrulama ve etki analizi sürecinde ek bilgiler istenebilir
4. **Düzeltmeyi bekleyin**: Güvenlik güncellemesi yayınlandığında bilgilendirileceksiniz

#### Süreç
```
Bildirim → 48h içinde teyit → Doğrulama ve etki analizi → Düzeltme geliştirme → Test → Yayın → Bildirim sahibine teşekkür
```

---

### Güvenlik Kapsamı

#### Kapsam dahilindeki endişeler

| Alan | Açıklama |
|---|---|
| **Tedarik zinciri** | Proje sıfır runtime bağımlılık içerse de, `serve` dev bağımlılığı ve GitHub Actions worker'ları potansiyel tedarik zinciri riski taşır. `package.json` / `package-lock.json` düzenli denetlenmelidir. |
| **CI/CD boru hattı** | GitHub Actions workflow'ları (`pages.yml`) yetki yükseltme veya sır sızdırma açısından incelenmelidir. Mevcut yapılandırmada `GITHUB_TOKEN` yalnızca Pages deploy için kullanılır, başka secret tanımlı değildir. |
| **İçerik enjeksiyonu** | Tüm oyun verileri statiktir ve kullanıcı tarafından oluşturulmaz. `innerHTML` kullanımı yalnızca güvenli, önceden tanımlı şablonlarla sınırlıdır. |
| **Bağımlılık karıştırması (dependency confusion)** | `serve` paketi npm registry'den yüklenir. Paket adı yaygın bir kelime olduğu için iç kaynaklı karıştırma riski göz önünde bulundurulmalıdır. |

#### Kapsam dışındaki endişeler

| Alan | Gerekçe |
|---|---|
| **SQL/NoSQL enjeksiyonu** | Veritabanı yok |
| **Kimlik doğrulama zafiyetleri** | Oturum, hesap veya auth mekanizması yok |
| **Sunucu tarafı işleme** | Backend yok, tüm işlemler istemci tarafında |
| **SSL/TLS yapılandırması** | GitHub Pages tarafından yönetilir |
| **DDoS saldırıları** | GitHub Pages altyapısı tarafından korunur |

---

### Güvenli Yapılandırma Kontrol Listesi

Projeyi fork'ladığınızda veya kendi ortamınızda çalıştırdığınızda aşağıdaki kontrolleri yapın:

- [ ] `.env` dosyası repository'de değil (`.gitignore` ile korunuyor)
- [ ] `GITHUB_TOKEN` yalnızca gerekli izinlerle yapılandırılmış (Pages deploy)
- [ ] `open-pull-requests-limit` Dependabot için 0 veya makul bir değerde
- [ ] `package.json`'da güncel olmayan bağımlılık yok
- [ ] GitHub Pages `build_type: workflow` olarak ayarlanmış

---

### Güvenlik Güncelleme Geçmişi

| Tarih | Değişiklik |
|---|---|
| 2026-06-21 | `.env.example` repository'den kaldırıldı, `.gitignore`'daki `!.env.example` exception'ı silindi |
| 2026-06-21 | CodeQL default setup devre dışı bırakıldı (statik site için gereksiz) |
| 2026-06-21 | Auto-approve workflow'u kaldırıldı (`GITHUB_TOKEN` PR onaylayamaz) |
| 2026-06-21 | `package.json` eklendi, bağımlılıklar resmî olarak tanımlandı |

---

### İletişim

Güvenlik bildirimleri için lütfen doğrudan GitHub Issues üzerinden **özel mesaj** veya depo sahibinin GitHub profili üzerinden iletişime geçin.

Açık kaynak güvenlik araştırmacılarına teşekkür ederiz.
