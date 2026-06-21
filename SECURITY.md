# Güvenlik Politikası

## Zafiyet Bildirimi

Bir güvenlik açığı keşfettiyseniz lütfen **public issue açmayın**.
Bunun yerine doğrudan depo sahibine e-posta gönderin.

Bildiriminiz 48 saat içinde alındığında teyit edilecek ve
düzeltme sürecinde düzenli güncellemeler alacaksınız.

## Desteklenen Sürümler

| Sürüm | Destek |
|-------|--------|
| 1.x   | Aktif geliştirme |

## Süreç

1. Bildirim alınır ve 48 saat içinde teyit edilir
2. Doğrulama ve etki analizi yapılır
3. Düzeltme geliştirilir ve test edilir
4. Güvenlik güncellemesi yayınlanır
5. Bildirim sahibi bilgilendirilir

## Kapsam

Bu proje, GitHub Pages üzerinde barındırılan statik bir
teşhis aracıdır. Kimlik doğrulama, veritabanı veya kullanıcı
verisi depolama içermez. Güvenlik endişeleri şunlarla sınırlıdır:

- Tedarik zinciri (CDN üzerinden sunulan bağımlılıklar — Tailwind CSS)
- İçerik enjeksiyonu (tüm oyun verileri statiktir, kullanıcı
  tarafından oluşturulmaz)
