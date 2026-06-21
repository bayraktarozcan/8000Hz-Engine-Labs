# 8000Hz Engine Labs — Girdi Uyumluluk Portalı

**8000Hz / 4000Hz / 1000Hz fare, klavye ve diğer girdi aygıtlarının oyun motorlarıyla uyumluluğunu test eden teşhis portalı.**

## Özellikler

- **Oyun Veritabanı:** 30 oyunun girdi aygıtı uyumluluk durumu (Native, Unity, Unreal, Custom motorları)
- **Diagnostik Testler:** Polling rate, DPI/CPI, click/key latency, sensor/tracking doğrulama, tuş/eksen tepki süresi
- **Uyumluluk Durumları:** Tam uyumlu, kısmi uyumlu, uyumsuz, test edilmedi

## Kullanım

Site doğrudan GitHub Pages üzerinde yayındadır:
→ [8000Hz Engine Labs](https://bayraktarozcan.github.io/8000Hz-Engine-Labs/)

Yerelde çalıştırmak için herhangi bir build adımı gerekmez — `index.html`'i doğrudan tarayıcıda açın.

## Teknoloji

- **HTML5** + **Tailwind CSS** (CDN, derleme yok)
- **Vanilla JavaScript** (bağımlılık yok)
- **GitHub Pages** (static deploy)

## Proje Yapısı

```
8000Hz-Engine-Labs/
├── index.html      # Ana uygulama (tek sayfa)
├── favicon.svg     # I/O temalı favicon
└── README.md       # Bu dosya
```

## Katkı

Bu proje kişisel bir araştırma/teşhis aracıdır. Öneri ve düzeltmeler için issue açabilirsiniz.

## Lisans

MIT
