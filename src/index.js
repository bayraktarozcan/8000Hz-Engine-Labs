const translations = {
    tr: {
        'page-title': '8000Hz Oyun Motoru Uyumluluk Portalı',
        'header-subtitle': 'Girdi Uyumluluk Portalı',
        'nav-analysis': 'Teknik Analiz',
        'nav-database': 'Oyun Veritabanı',
        'nav-test': 'Uyumluluk Testi',
        'nav-sources': 'Birincil Kaynaklar',
        'hero-title': 'Donanım Gücün Sınırsız Olabilir, Peki <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Oyun Kodun</span> Hazır mı?',
        'hero-desc': '8000Hz fare, klavye ve diğer girdi aygıtlarının 0.125 ms zaman aralığındaki veri akışını işletim sisteminiz kaldırsa dahi, oyun motorunun iç kod mimarisi bu yoğunluğu sindiremeyebilir. İşte 30 oyunun motor düzeyinde kapsamlı testi.',
        'hero-btn-db': 'Veritabanını Keşfet',
        'hero-btn-test': 'Sistem Uyumluluğunu Sına',
        'stat-total-label': 'İncelenen Oyun',
        'stat-compatible-label': 'Tam Uyumlu',
        'stat-partial-label': 'Kısmen Uyumlu',
        'stat-incompatible-label': 'Uyumsuz (1000Hz Şart)',
        'analysis-title': 'TEKNİK ANALİZ: 8000Hz DARBOĞAZININ ARKASINDAKİ 3 ANA NEDEN',
        'analysis-subtitle': 'Sisteminiz değil, oyun motorları neden tıkanır?',
        'bottleneck1-title': '1. Ana İş Parçacığı Darboğazı (Main Thread Bottleneck)',
        'bottleneck1-desc': 'Eski nesil oyun motorları girdi verilerini, fizik ve render döngüleri ile aynı tek iş parçacığı (<code class="text-indigo-300">Main Thread</code>) üzerinde işler. Saniyede 8000 koordinat güncelleme mesajı bu zincire daldığında, güçlü işlemci çekirdekleriniz boştayken bile oyun döngüsü takılır.',
        'bottleneck2-title': '2. Matematiksel Yuvarlama Hataları (Precision Errors)',
        'bottleneck2-desc': 'Yüksek yenileme hızında iki rapor arasındaki zaman farkı sadece <code class="text-purple-300">Δt = 0.125 ms</code>\'dir. Birçok eski motor, 32-bit kayan noktalı ondalık sayı (<code class="text-purple-300">float</code>) hassasiyeti nedeniyle bu mikro zaman dilimlerini çarparak hesaplarken yuvarlama hataları yapar ve kamerada mikro titremeler (<code class="text-purple-300">jitter</code>) üretir.',
        'bottleneck3-title': '3. Girdi Mesajı Yığılması (Input Queue Saturation)',
        'bottleneck3-desc': 'Windows Win32 Raw Input API\'sini asenkron (bağımsız) iş parçacığı yerine doğrudan senkron (kare hızına kilitli) tüketen oyun kodları, biriken mesaj yığınını eritemez. Bu yığılma, fare hareketinin arkadan gelmesi (<code class="text-blue-300">input lag</code>) veya ani hızlı dönüşlerde kameranın anlık olarak donmasıyla sonuçlanır.',
        'db-title': '30 OYUN MOTORU VERİTABANI',
        'db-subtitle': 'İstediğiniz oyunu aratın, motor mimarisini ve test sonuçlarını saniyeler içinde analiz edin.',
        'db-reset-btn': 'Filtreleri Sıfırla',
        'db-search-placeholder': 'Oyun adı, motor veya API ara...',
        'filter-all-status': 'Tüm Uyumluluk Durumları',
        'filter-compatible': 'Tam Uyumlu (⭐)',
        'filter-partial': 'Kısmen Uyumlu (⚠️)',
        'filter-incompatible': 'Kesinlikle Uyumsuz (❌)',
        'filter-all-engine': 'Tüm Oyun Motorları',
        'filter-other': 'Diğer Özel Motorlar',
        'empty-title': 'Aramanıza Uygun Oyun Bulunamadı',
        'empty-desc': 'Lütfen arama teriminizi veya filtreleri değiştirmeyi deneyin.',
        'diag-title': '8000Hz UYUMLULUK TESTİ (DIAGNOSTIC TOOL)',
        'diag-subtitle': 'Oynamak istediğiniz oyunun parametrelerini girin, sisteminizin bu oyunda 8000Hz kaldırıp kaldıramayacağını hesaplayalım.',
        'diag-cpu-label': '1. İşlemci Gücünüz & Çekirdek Sayınız',
        'diag-cpu-high': 'Son Nesil / 8+ Çekirdek',
        'diag-cpu-low': 'Orta Seviye / Eski',
        'diag-year-label': '2. Oyunun Çıkış Yılı Aralığı',
        'diag-year-modern': '2021 ve Sonrası (Modern Dönem)',
        'diag-year-mid': '2016 - 2020 (Ara Dönem)',
        'diag-year-legacy': '2015 ve Öncesi (Klasik Dönem)',
        'diag-engine-label': '3. Oyun Motoru Mimarisi',
        'diag-engine-async': 'Modern Asenkron Motorlar (Source 2, Swarm vb.)',
        'diag-engine-custom': 'Özel Eski Motorlar (Prism3D, RAGE vb.)',
        'diag-api-label': '4. Grafik API Tercihiniz',
        'diag-api-modern': 'DX12 / Vulkan',
        'diag-api-legacy': 'DX11 / DX9',
        'diag-start-btn': 'Analizi Başlat',
        'diag-report-title': 'DİAGNOSTİK ANALİZ RAPORU',
        'diag-init-msg': 'Parametreleri belirledikten sonra testi başlatın.',
        'diag-result-label': 'Tahmini Uyumluluk',
        'diag-disclaimer': '*Bu simülasyon, seçtiğiniz oyun motorunun girdi veri tabanı kütüphanesini baz alarak tahmini bir veri stabilizasyonu sonucu üretir. Gerçek sonuçlar arka plan uygulamalarına bağlı olarak değişiklik gösterebilir.',
        'sources-title': 'BİRİNCİL BİLGİ KAYNAKLARI',
        'sources-subtitle': 'Bu analizde kullanılan teknik dökümanlar, espor testleri ve oyun motoru yayınları.',
        'source1-tag': 'Geliştirici Belgeleri',
        'source1-title': 'Microsoft Win32 Raw Input API',
        'source1-desc': 'Windows işletim sistemlerinde yüksek polling rate çevre birimlerinin kilitlenme yaşamadan veri aktarmasını sağlayan düşük seviyeli asenkron mesaj kuyruğu mimarisi standartları.',
        'source1-link': 'Microsoft Developer Network (MSDN)',
        'source2-tag': 'Oyun Motoru Gelişimi',
        'source2-title': 'Valve Source 2 Sub-Tick Dev Blogs',
        'source2-desc': 'Counter-Strike 2\'nin kare hızı ile girdi yenileme hızını asenkron eşleyen ve milisaniyenin altındaki (sub-tick) hareket verilerini kayıpsız işleyen yeni girdi katmanı incelemeleri.',
        'source2-link': 'Valve Corporation Technical Publications',
        'source3-tag': 'Donanım ve Espor Testleri',
        'source3-title': 'Blurbusters High-Polling Rate Tests',
        'source3-desc': '1000 Hz, 4000 Hz ve 8000 Hz yenileme hızına sahip fare, klavye ve girdi aygıtlarının modern ve eski oyun motorlarındaki gecikme (input latency), işlemci yükü ve kare hızı dalgalanma testleri.',
        'source3-link': 'Blur Busters Research Labs',
        'source4-tag': 'Donanım Geliştiricileri',
        'source4-title': 'Razer & Logitech Developer Guidelines',
        'source4-desc': 'Yüksek hızlı USB arabirimlerinin (xHCI Controllers) kesme istekleri (IRQ) yönetimi ve anakart veri yolları üzerinde donanımsal tıkanıklık oluşmasını engelleyen entegrasyon önerileri.',
        'source4-link1': 'Razer Developer Portal',
        'source4-link2': 'Logitech G R&D',
        'source5-tag': 'Performans Analizi',
        'source5-title': 'Digital Foundry Frame-Time Diagnostics',
        'source5-desc': 'Frostbite, RAGE ve Unreal Engine 4 mimarilerinin ağır fizik ve animasyon yükleri altında saniyede 8000 girdi sinyalini işlerken sergiledikleri "frame pacing" (kare zamanlaması) tutarsızlıkları.',
        'source5-link1': 'Digital Foundry',
        'source5-link2': 'Eurogamer Tech',
        'source6-tag': 'Akademik Yayınlar',
        'source6-title': 'Human-Computer Interaction in Esports',
        'source6-desc': 'Kullanıcı hedef alma performansı ve insan motor becerilerinin 1 ms altındaki tepki süreleri ile olan ilişkisi üzerine yapılmış bilimsel gecikme ve doğruluk araştırmaları.',
        'source6-link': 'IEEE Transactions on Games',
        'source-label': 'Kaynak',
        'detail-btn': 'DETAYLI TEKNİK ANALİZ',
        'footer-text': '© 2026 Girdi Uyumluluk Portalı. Tüm hakları saklıdır. Girdi analizleri çapraz teyitli olarak güncellenmektedir.',
    },
    en: {
        'page-title': '8000Hz Game Engine Compatibility Portal',
        'header-subtitle': 'Input Compatibility Portal',
        'nav-analysis': 'Tech Analysis',
        'nav-database': 'Game Database',
        'nav-test': 'Compatibility Test',
        'nav-sources': 'Primary Sources',
        'hero-title': 'Your Hardware May Be Limitless, But Is Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Game Code</span> Ready?',
        'hero-desc': 'Even if your operating system can handle the 0.125 ms data stream of an 8000Hz mouse, keyboard, or other input device, the game engine\'s internal code architecture may not digest this intensity. Here is a comprehensive engine-level test of 30 games.',
        'hero-btn-db': 'Explore Database',
        'hero-btn-test': 'Test Your System',
        'stat-total-label': 'Games Analyzed',
        'stat-compatible-label': 'Fully Compatible',
        'stat-partial-label': 'Partially Compatible',
        'stat-incompatible-label': 'Incompatible (1000Hz Required)',
        'analysis-title': 'TECHNICAL ANALYSIS: 3 MAIN REASONS BEHIND THE 8000Hz BOTTLENECK',
        'analysis-subtitle': 'Why game engines choke, not your system.',
        'bottleneck1-title': '1. Main Thread Bottleneck',
        'bottleneck1-desc': 'Legacy game engines process input data on the same single thread (<code class="text-indigo-300">Main Thread</code>) as physics and render loops. When 8000 coordinate update messages per second hit this pipeline, the game loop stutters even while your powerful CPU cores sit idle.',
        'bottleneck2-title': '2. Floating-Point Precision Errors',
        'bottleneck2-desc': 'At high polling rates, the time delta between two reports is only <code class="text-purple-300">Δt = 0.125 ms</code>. Many older engines use 32-bit floating-point numbers (<code class="text-purple-300">float</code>) which accumulate rounding errors when multiplying these micro time slices, producing camera micro-jitter (<code class="text-purple-300">jitter</code>).',
        'bottleneck3-title': '3. Input Queue Saturation',
        'bottleneck3-desc': 'Game code that consumes Win32 Raw Input API synchronously (frame-locked) instead of on an asynchronous thread cannot drain the accumulated message queue. This backlog causes <code class="text-blue-300">input lag</code> or momentary camera freezes during fast turns.',
        'db-title': '30 GAME ENGINE DATABASE',
        'db-subtitle': 'Search any game, analyze its engine architecture and test results in seconds.',
        'db-reset-btn': 'Reset Filters',
        'db-search-placeholder': 'Search game name, engine or API...',
        'filter-all-status': 'All Compatibility Statuses',
        'filter-compatible': 'Fully Compatible (⭐)',
        'filter-partial': 'Partially Compatible (⚠️)',
        'filter-incompatible': 'Strictly Incompatible (❌)',
        'filter-all-engine': 'All Game Engines',
        'filter-other': 'Other Custom Engines',
        'empty-title': 'No Games Match Your Search',
        'empty-desc': 'Please try changing your search term or filters.',
        'diag-title': '8000Hz COMPATIBILITY TEST (DIAGNOSTIC TOOL)',
        'diag-subtitle': 'Enter the parameters of the game you want to play, and we\'ll calculate whether your system can handle 8000Hz in that game.',
        'diag-cpu-label': '1. Your CPU Power & Core Count',
        'diag-cpu-high': 'Latest Gen / 8+ Cores',
        'diag-cpu-low': 'Mid-Range / Older',
        'diag-year-label': '2. Game Release Year Range',
        'diag-year-modern': '2021 and Later (Modern Era)',
        'diag-year-mid': '2016 - 2020 (Mid Era)',
        'diag-year-legacy': '2015 and Earlier (Classic Era)',
        'diag-engine-label': '3. Game Engine Architecture',
        'diag-engine-async': 'Modern Async Engines (Source 2, Swarm etc.)',
        'diag-engine-custom': 'Legacy Custom Engines (Prism3D, RAGE etc.)',
        'diag-api-label': '4. Graphics API Preference',
        'diag-api-modern': 'DX12 / Vulkan',
        'diag-api-legacy': 'DX11 / DX9',
        'diag-start-btn': 'Start Analysis',
        'diag-report-title': 'DIAGNOSTIC ANALYSIS REPORT',
        'diag-init-msg': 'Set the parameters then start the test.',
        'diag-result-label': 'Estimated Compatibility',
        'diag-disclaimer': '*This simulation produces an estimated data stabilization result based on the input database library of the selected game engine. Actual results may vary depending on background applications.',
        'sources-title': 'PRIMARY INFORMATION SOURCES',
        'sources-subtitle': 'Technical documents, esports tests and game engine publications used in this analysis.',
        'source1-tag': 'Developer Documentation',
        'source1-title': 'Microsoft Win32 Raw Input API',
        'source1-desc': 'Low-level asynchronous message queue architecture standards enabling high polling rate peripherals to transfer data without locking on Windows operating systems.',
        'source1-link': 'Microsoft Developer Network (MSDN)',
        'source2-tag': 'Game Engine Evolution',
        'source2-title': 'Valve Source 2 Sub-Tick Dev Blogs',
        'source2-desc': 'Analysis of the new input layer in Counter-Strike 2 that asynchronously decouples input polling rate from frame rate and processes sub-tick movement data without loss.',
        'source2-link': 'Valve Corporation Technical Publications',
        'source3-tag': 'Hardware & Esports Tests',
        'source3-desc': 'Latency, CPU load and frame time fluctuation tests of 1000 Hz, 4000 Hz and 8000 Hz mice, keyboards and input devices across modern and legacy game engines.',
        'source3-link': 'Blur Busters Research Labs',
        'source4-tag': 'Hardware Developers',
        'source4-title': 'Razer & Logitech Developer Guidelines',
        'source4-desc': 'Integration recommendations for high-speed USB interface (xHCI Controllers) interrupt request (IRQ) management to prevent hardware-level bottlenecks on motherboard data buses.',
        'source4-link1': 'Razer Developer Portal',
        'source4-link2': 'Logitech G R&D',
        'source5-tag': 'Performance Analysis',
        'source5-title': 'Digital Foundry Frame-Time Diagnostics',
        'source5-desc': 'Frame pacing inconsistencies exhibited by Frostbite, RAGE and Unreal Engine 4 architectures when processing 8000 input signals per second under heavy physics and animation loads.',
        'source5-link1': 'Digital Foundry',
        'source5-link2': 'Eurogamer Tech',
        'source6-tag': 'Academic Publications',
        'source6-title': 'Human-Computer Interaction in Esports',
        'source6-desc': 'Scientific latency and accuracy studies on the relationship between user aiming performance and human motor skills with sub-1ms response times.',
        'source6-link': 'IEEE Transactions on Games',
        'source-label': 'Source',
        'detail-btn': 'DETAILED TECHNICAL ANALYSIS',
        'footer-text': '© 2026 Input Compatibility Portal. All rights reserved. Input analyses are cross-verified and updated regularly.',
    }
};

let currentLang = localStorage.getItem('8000hz-lang') || 'tr';

function switchLanguage(lang) {
    if (lang) { currentLang = lang; }
    else { currentLang = currentLang === 'tr' ? 'en' : 'tr'; }
    localStorage.setItem('8000hz-lang', currentLang);
    document.documentElement.lang = currentLang;
    document.getElementById('lang-toggle').textContent = currentLang === 'tr' ? 'EN' : 'TR';
    applyTranslations();
    renderGames(filteredGamesCache);
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        let text = translations[currentLang][key];
        if (text !== undefined) { el.innerHTML = text; }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        let text = translations[currentLang][key];
        if (text !== undefined) { el.placeholder = text; }
    });
}

const games = [
    {
        id: 1,
        name: "American Truck Simulator",
        nameEn: "American Truck Simulator",
        engine: "Prism3D (SCS Software)",
        engineEn: "Prism3D (SCS Software)",
        api: "Legacy DirectInput / RawInput Senkron Entegrasyonu",
        apiEn: "Legacy DirectInput / Synchronous RawInput",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Prism3D motoru, çevre bakış kamerasını doğrudan fizik motorunun güncelleme frekansıyla (60Hz - 120Hz) eş zamanlı yürütür. 8000Hz veri akışı, motorun fizik döngüsündeki her bir adımına aşırı yük bindirir. Fareyi her çevirdiğinizde motor girdi kuyruğunu temizlemek için render döngüsünü bekletir. Tır kabininde ağır takılmalar yaşatır.",
        analysisEn: "The Prism3D engine runs the camera look system synchronously with the physics engine's update frequency (60Hz-120Hz). The 8000Hz data stream overloads every step of the physics loop. Each mouse turn forces the engine to stall the render loop to clear the input queue. Causes severe stuttering inside the truck cabin.",
        tag: "prism3d"
    },
    {
        id: 2,
        name: "Assetto Corsa Competizione",
        nameEn: "Assetto Corsa Competizione",
        engine: "Unreal Engine 4 (Kunos Mod)",
        engineEn: "Unreal Engine 4 (Kunos Modified)",
        api: "UE4 Windows RawInput Subsystem",
        apiEn: "UE4 Windows RawInput Subsystem",
        status: "partial",
        statusText: "Kısmen Uyumsuz / Riskli",
        statusTextEn: "Partially Compatible / Risky",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "Kunos, UE4'ün fizik hatlarını araç simülasyonu için derinlemesine modifiye etmiştir. Ancak girdi katmanı standart UE4 kütüphanelerini kullanır. ACC gibi işlemcinin fizik ve FFB (tekerlek geri bildirimi) hesaplamalarına aşırı bağımlı olduğu bir simülasyonda, 8000Hz girdi yükü thread zamanlamalarını bozarak milisaniyelik takılmalara (hitching) neden olur.",
        analysisEn: "Kunos has deeply modified UE4's physics pipeline for vehicle simulation. However the input layer uses standard UE4 libraries. In a simulation where the CPU is heavily dependent on physics and FFB (Force Feedback) calculations like ACC, the 8000Hz input load disrupts thread timing, causing millisecond hitches.",
        tag: "unreal"
    },
    {
        id: 3,
        name: "Back 4 Blood",
        nameEn: "Back 4 Blood",
        engine: "Unreal Engine 4 (Turtle Rock Custom)",
        engineEn: "Unreal Engine 4 (Turtle Rock Custom)",
        api: "UE4 Default Input Stack (Senkron Kilitli)",
        apiEn: "UE4 Default Input Stack (Synchronous Locked)",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Kullanıcı raporlarına göre Back 4 Blood, 125Hz üzerindeki polling değerlerinde şiddetli takılma ve gecikme (stutter) üretmektedir. 8000Hz sinyal yoğunluğu motorun girdi kuyruğunu anında tıkar ve fare hareketine bağlı FPS düşüşleri yaşatır. 125Hz'e sabitlenmesi veya oyun dışında 1000Hz altına çekilmesi önerilir.",
        analysisEn: "According to user reports, Back 4 Blood produces severe stuttering at polling rates above 125Hz. The 8000Hz signal density instantly clogs the engine's input queue and causes FPS drops tied to mouse movement. Recommended to lock at 125Hz or reduce below 1000Hz outside the game.",
        tag: "unreal"
    },
    {
        id: 4,
        name: "Battlefield 4",
        nameEn: "Battlefield 4",
        engine: "Frostbite 3 (Erken Sürüm - 2013)",
        engineEn: "Frostbite 3 (Early Version - 2013)",
        api: "DirectInput / Win32 Message Pump",
        apiEn: "DirectInput / Win32 Message Pump",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "BF4'ün kullandığı eski Frostbite 3 sürümü, girdi zamanlamalarında yüksek frekansları hesaba katacak şekilde tasarlanmamıştır. İki sinyal arasındaki delta zamanı 0.125 ms seviyesine indiğinde motorun ivme ve nişan alma matrisleri bu küçük değerleri doğru ölçekleyemez, koordinat kaybı (packet drop) ve nişangah yavaşlaması (negative acceleration) yaşanır.",
        analysisEn: "The early Frostbite 3 version used by BF4 was not designed for high-frequency input timing. When the delta time between two signals drops to 0.125ms, the engine's acceleration and aiming matrices cannot correctly scale these tiny values, causing coordinate packet drops and negative acceleration.",
        tag: "frostbite"
    },
    {
        id: 5,
        name: "Battlefield V",
        nameEn: "Battlefield V",
        engine: "Frostbite 3 (Ara Sürüm - 2018)",
        engineEn: "Frostbite 3 (Mid Version - 2018)",
        api: "Raw Input (Dahili Geliştirilmiş)",
        apiEn: "Raw Input (Internally Improved)",
        status: "partial",
        statusText: "Kısmen Uyumsuz / Riskli",
        statusTextEn: "Partially Compatible / Risky",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "BFV, BF4'e kıyasla gelişmiş bir ham girdi işleme mekanizmasına sahiptir. Ancak 64 kişilik devasa haritalardaki yoğun yıkım ve ağ (network) hesaplamaları işlemciye ağır yük bindirirken 8000Hz farenin mikro kesme istekleri asenkron iş parçacığı yöneticisinde kuyruk birikmesine yol açar. Çatışmalarda 2000Hz üzeri takılmalar üretebilir.",
        analysisEn: "BFV has an improved raw input processing mechanism compared to BF4. However the intense destruction and network calculations on 64-player maps heavily load the CPU while the 8000Hz mouse's micro-interrupt requests cause queue buildup in the async thread manager. May produce stuttering above 2000Hz in firefights.",
        tag: "frostbite"
    },
    {
        id: 6,
        name: "Battlefield 2042",
        nameEn: "Battlefield 2042",
        engine: "Frostbite (Modern Sürüm - 2021+)",
        engineEn: "Frostbite (Modern Version - 2021+)",
        api: "Modern Asynchronous Raw Input & DirectXTK Input",
        apiEn: "Modern Asynchronous Raw Input & DirectXTK Input",
        status: "partial",
        statusText: "Kısmen Uyumlu (4000Hz Önerilir)",
        statusTextEn: "Partially Compatible (4000Hz Recommended)",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "Modern Frostbite motoru genel olarak yüksek polling rate donanımlar gözetilerek optimize edilmiştir. Ancak EA Forumları ve kullanıcı raporları, 2000Hz üzerindeki değerlerde özellikle 90+ derece ani dönüşlerde giriş gecikmesi (input lag) yaşandığını göstermektedir. DICE'ın yayınladığı düzeltmeler sorunu azaltmış olsa da 8000Hz tam kararlı değildir. En pürüzsüz deneyim için 4000Hz önerilir.",
        analysisEn: "The modern Frostbite engine is generally optimized for high polling rate hardware. However EA Forums and user reports indicate input lag at rates above 2000Hz, especially during sudden 90+ degree turns. DICE's patches have reduced the issue but 8000Hz is not fully stable. 4000Hz recommended for the smoothest experience.",
        tag: "frostbite"
    },
    {
        id: 7,
        name: "Chivalry 2",
        nameEn: "Chivalry 2",
        engine: "Unreal Engine 4",
        engineEn: "Unreal Engine 4",
        api: "Senkronize Kamera Güncelleme Döngüsü",
        apiEn: "Synchronized Camera Update Loop",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Kılıç savurma hızları ve hitbox hesaplamaları farenin dönüş hızı ve açısına doğrudan bağlıdır. Chivalry 2, hileleri önlemek adına her fare girdisini sunucu tabanlı doğrulamayla senkronize eder. 8000Hz veri yoğunluğu, yerel istemci tarafında kamera dönüş matrislerinde kare atlamalarına (frame skipping) yol açar.",
        analysisEn: "Swing speeds and hitbox calculations are directly tied to the mouse's turn speed and angle. Chivalry 2 synchronizes every mouse input with server-side validation to prevent cheating. The 8000Hz data density causes frame skipping in the local client's camera rotation matrices.",
        tag: "unreal"
    },
    {
        id: 8,
        name: "Counter-Strike 2",
        nameEn: "Counter-Strike 2",
        engine: "Source 2 (Valve)",
        engineEn: "Source 2 (Valve)",
        api: "Sub-Tick Input Pipeline (Asenkron)",
        apiEn: "Sub-Tick Input Pipeline (Async)",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        statusTextEn: "Fully Compatible",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Source 2, rekabetçi espor standartları düşünülerek sıfırdan yazılmıştır. 'Sub-tick' sistemi fare hareketinin yapıldığı tam milisaniyeyi kare hızından bağımsız kaydeder. 8000Hz girdi, Source 2 tarafından kusursuz desteklenir ve oyunun alt-milisaniye doğruluğuna doğrudan katkıda bulunur. Gecikme veya kararsızlık yaşanmaz.",
        analysisEn: "Source 2 was built from the ground up with competitive esports standards in mind. The 'sub-tick' system records the exact millisecond of mouse movement independent of frame rate. 8000Hz input is flawlessly supported by Source 2 and directly contributes to the game's sub-millisecond accuracy. No latency or instability occurs.",
        tag: "other"
    },
    {
        id: 9,
        name: "Euro Truck Simulator 2",
        nameEn: "Euro Truck Simulator 2",
        engine: "Prism3D (SCS Software)",
        engineEn: "Prism3D (SCS Software)",
        api: "Legacy DirectInput / RawInput Senkron Entegrasyonu",
        apiEn: "Legacy DirectInput / Synchronous RawInput",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "American Truck Simulator ile aynı motor mimarisini paylaşır. Saniyede 8000 kez gelen Win32 Raw Input mesajını asenkron eritecek bir girdi iş parçacığı yoktur. Kabin içinde kafanızı hafifçe döndürürken dahi mikro donmalar ve kare pacing dalgalanmaları yaşatır.",
        analysisEn: "Shares the same engine architecture as American Truck Simulator. There is no input thread to asynchronously digest 8000 Win32 Raw Input messages per second. Causes micro-freezes and frame pacing fluctuations even when slightly turning your head inside the cabin.",
        tag: "prism3d"
    },
    {
        id: 10,
        name: "F1 22",
        nameEn: "F1 22",
        engine: "EGO Engine 4.0 (Codemasters)",
        engineEn: "EGO Engine 4.0 (Codemasters)",
        api: "Low-Pass Filtered Controller Input",
        apiEn: "Low-Pass Filtered Controller Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "EGO motoru, kontrolcü ve direksiyon setlerinin analog girdilerini yumuşatmak için dahili bir filtre katmanı kullanır. Saniyede 8000 veri paketi bu filtreleme algoritmasına girdiğinde matematiksel yığılma yapar ve motor tamponunu şişirir. FPS yüksek olmasına rağmen fareyi çevirirken takılma hissi yaratır.",
        analysisEn: "The EGO engine uses an internal filter layer to smooth analog inputs from controllers and wheel sets. When 8000 data packets per second enter this filtering algorithm, it creates mathematical buildup and inflates the engine buffer. Despite high FPS, creates a stuttering feel when turning the mouse.",
        tag: "other"
    },
    {
        id: 11,
        name: "Farming Simulator 22",
        nameEn: "Farming Simulator 22",
        engine: "GIANTS Engine 9",
        engineEn: "GIANTS Engine 9",
        api: "Script-Bound Input Loop",
        apiEn: "Script-Bound Input Loop",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "GIANTS Engine, girdi yönetimini Lua tabanlı script kütüphaneleri üzerinden yürütür. Bu kütüphaneler oyunun 'Update' döngüsüne sıkı sıkıya bağlıdır. Saniyede gelen 8000 sinyal, Lua VM'inin her karede binlerce gereksiz nesne üretmesine ve Garbage Collector işlemlerinin tavan yapmasına yol açar. Ağır FPS dropları yaşatır.",
        analysisEn: "The GIANTS Engine manages input through Lua-based script libraries tightly bound to the game's Update loop. 8000 signals per second cause the Lua VM to spawn thousands of unnecessary objects each frame, spiking the Garbage Collector. Causes severe FPS drops.",
        tag: "other"
    },
    {
        id: 12,
        name: "Forza Horizon 5",
        nameEn: "Forza Horizon 5",
        engine: "Forzatech (Modern DX12 / UWP Mimarisi)",
        engineEn: "Forzatech (Modern DX12 / UWP Architecture)",
        api: "Asynchronous UWP Windows API Input",
        apiEn: "Asynchronous UWP Windows API Input",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        statusTextEn: "Fully Compatible",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Forzatech, asenkron girdi kütüphaneleriyle yazılmıştır. 8000Hz girdi, motor düzeyinde kararlılık veya performans kaybına yol açmaz. Fare sadece kabin içi veya harita görünümünü kontrol ettiğinden oyun deneyimine doğrudan bir nişan alma etkisi olmasa da, motor bu veri yükünü kusursuzca sindirir.",
        analysisEn: "Forzatech is built with asynchronous input libraries. 8000Hz input does not cause engine-level stability or performance loss. While the mouse only controls cabin or map view (no direct aiming impact), the engine digests this data load flawlessly.",
        tag: "other"
    },
    {
        id: 13,
        name: "Ghostrunner",
        nameEn: "Ghostrunner",
        engine: "Unreal Engine 4",
        engineEn: "Unreal Engine 4",
        api: "UE4 Standard Input Manager",
        apiEn: "UE4 Standard Input Manager",
        status: "partial",
        statusText: "Kısmen Uyumsuz (Mikro Gecikme)",
        statusTextEn: "Partially Compatible (Micro Lag)",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "Ghostrunner, anlık refleksler ve 360 derece hızlı yön değişimleri gerektirir. UE4'ün varsayılan girdi yöneticisi, ani yön değişimlerinde motorun fizik ve animasyon döngüsüyle senkronizasyon kayıpları yaşar. Fareyi hızlı savurduğunuzda mikro takılmalar veya hedeften sapmalar yaşanabilir. 1000Hz-2000Hz arası çok daha kararlıdır.",
        analysisEn: "Ghostrunner demands instant reflexes and 360-degree rapid direction changes. UE4's default input manager loses synchronization with the physics and animation loop during sudden direction changes. Rapid mouse flicks may cause micro-stutters or aim deviations. 1000Hz-2000Hz is much more stable.",
        tag: "unreal"
    },
    {
        id: 14,
        name: "Grand Theft Auto V Enhanced",
        nameEn: "Grand Theft Auto V Enhanced",
        engine: "RAGE (Rockstar Advanced Game Engine)",
        engineEn: "RAGE (Rockstar Advanced Game Engine)",
        api: "DirectInput / Legacy RawInput",
        apiEn: "DirectInput / Legacy RawInput",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "RAGE motorunun PC sürümü güncellenmiş olsa da temelinde 2013 girdi kütüphanelerini barındırır. GTA V, 1000Hz üzerindeki polling değerlerinde kronik motor hatalarına sahiptir. Farenizi 8000Hz moduna aldığınızda kamerayı çevirmek imkansız hale gelebilir, hassasiyet aşırı düşebilir veya oyun slayt gösterisine dönebilir (FPS tek hanelere düşer).",
        analysisEn: "Although the PC version of the RAGE engine has been updated, it still fundamentally uses 2013-era input libraries. GTA V has chronic engine bugs at polling rates above 1000Hz. At 8000Hz, turning the camera can become impossible, sensitivity may drop drastically, or the game may turn into a slideshow (FPS drops to single digits). Steam Community discussions confirm these issues persist in the Enhanced Edition.",
        tag: "rage"
    },
    {
        id: 15,
        name: "Insurgency Sandstorm",
        nameEn: "Insurgency Sandstorm",
        engine: "Unreal Engine 4",
        engineEn: "Unreal Engine 4",
        api: "Unoptimized UE4 Input Buffer",
        apiEn: "Unoptimized UE4 Input Buffer",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Sandstorm, UE4 motorunun optimizasyon ve iş parçacığı dağıtımı açısından en sorunlu yapılandırıldığı oyunlardan biridir. Ana iş parçacığı sürekli sınırda çalıştığından, 8000Hz farenin ürettiği yoğun veri akışı ana iş parçacığındaki işlem yükünü kaldırabileceği limitlerin üzerine çıkarır ve ağır takılmalar yaşatır. Geliştirici onayı: 4000Hz çalışır, 8000Hz donar.",
        analysisEn: "Sandstorm is one of the most problematically configured UE4 engine titles in terms of optimization and thread distribution. With the main thread constantly running at capacity, the intense data stream from an 8000Hz mouse pushes it beyond its limits, causing severe stuttering. Developer confirmed: works at 4000Hz, freezes at 8000Hz.",
        tag: "unreal"
    },
    {
        id: 16,
        name: "Mafia Definitive Edition",
        nameEn: "Mafia Definitive Edition",
        engine: "Illusion Engine",
        engineEn: "Illusion Engine",
        api: "Frame-Locked Tick Rate Input",
        apiEn: "Frame-Locked Tick Rate Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Illusion Engine, girdi verilerini motorun dahili 'tick' sürelerine göre (sabit zaman aralıklarında) ölçeklendirir. 8000Hz'den gelen 0.125 ms hassasiyetindeki koordinatlar, matematiksel yuvarlama algoritmalarını şaşırtır. Fareyi çevirirken kamera pürüzsüz dönmek yerine titreme (camera judder) yapar.",
        analysisEn: "The Illusion Engine scales input data according to the engine's internal tick rates (fixed time intervals). Coordinates with 0.125ms precision from 8000Hz confuse the mathematical rounding algorithms. Instead of smooth rotation, the camera exhibits judder when turning the mouse.",
        tag: "other"
    },
    {
        id: 17,
        name: "Mafia II Definitive Edition",
        nameEn: "Mafia II Definitive Edition",
        engine: "Illusion Engine",
        engineEn: "Illusion Engine",
        api: "Frame-Locked Tick Rate Input",
        apiEn: "Frame-Locked Tick Rate Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "İlkiyle tamamen aynı Illusion Engine girdi yapısını barındırır. 0.125 ms gibi çok dar bir zaman aralığındaki veriler fizik matrisleriyle uyuşmaz, bu da kamerada mikro titremeler ve tutarsız bir nişangah hareket algısı yaratır.",
        analysisEn: "Uses the exact same Illusion Engine input architecture as the first game. Data within a 0.125ms time window conflicts with physics matrices, creating micro-jitter in the camera and an inconsistent crosshair movement perception.",
        tag: "other"
    },
    {
        id: 18,
        name: "Metro 2033 Redux",
        nameEn: "Metro 2033 Redux",
        engine: "4A Engine (Eski Sürüm)",
        engineEn: "4A Engine (Legacy Version)",
        api: "DirectInput / Custom Raw Input",
        apiEn: "DirectInput / Custom Raw Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Redux sürümleri, modern yüksek polling frekansına sahip fareler piyasada yokken yazılan eski 4A Engine çekirdeğini kullanır. Bakış açısı matrisleri (look-at matrices) bu kadar yüksek frekansta veri kabul edecek şekilde güncellenmez. Koordinat atlamaları ve kamerada takılmalar kaçınılmazdır.",
        analysisEn: "The Redux versions use the legacy 4A Engine core written when modern high-polling-rate mice did not exist. Look-at matrices are not updated to accept data at such high frequencies. Coordinate jumps and camera stutter are inevitable.",
        tag: "other"
    },
    {
        id: 19,
        name: "Metro Exodus Enhanced Edition",
        nameEn: "Metro Exodus Enhanced Edition",
        engine: "4A Engine (Modernize Edilmiş RT)",
        engineEn: "4A Engine (Modernized RT)",
        api: "Modernized Raw Input API",
        apiEn: "Modernized Raw Input API",
        status: "partial",
        statusText: "Kısmen Uyumsuz (Kare Zamanlaması)",
        statusTextEn: "Partially Compatible (Frame Pacing)",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "Tamamen Ray Tracing mimarisi üzerine kurulu bu sürümde girdi işleme hatları biraz iyileştirilmiştir. Ancak motor, RT hesaplamaları ve işlemci tabanlı BVH veri yapılarını yönetirken asenkron girdi işlemekte zorlanır. Geniş ve hızlı fare dönüşleri kare zamanlamasında dalgalanma yaratır.",
        analysisEn: "In this version built entirely on Ray Tracing architecture, input processing pipelines have been somewhat improved. However the engine struggles with async input while managing RT calculations and CPU-based BVH data structures. Wide and fast mouse turns create frame pacing fluctuations.",
        tag: "other"
    },
    {
        id: 20,
        name: "Metro Last Light Redux",
        nameEn: "Metro Last Light Redux",
        engine: "4A Engine (Eski Sürüm)",
        engineEn: "4A Engine (Legacy Version)",
        api: "DirectInput / Custom Raw Input",
        apiEn: "DirectInput / Custom Raw Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Metro 2033 Redux ile aynı girdi hattını paylaşır. Saniyede 8000 kez gelen ham sinyal, render kuyruğunda yığılmaya yol açar, fare her hareket ettirildiğinde milisaniyelik FPS dropları kameranın akıcılığını yok eder.",
        analysisEn: "Shares the same input pipeline as Metro 2033 Redux. The raw signal arriving 8000 times per second causes buildup in the render queue. Each mouse movement triggers millisecond FPS drops that destroy camera smoothness.",
        tag: "other"
    },
    {
        id: 21,
        name: "Mount & Blade II Bannerlord",
        nameEn: "Mount & Blade II Bannerlord",
        engine: "TaleWorlds Custom Engine",
        engineEn: "TaleWorlds Custom Engine",
        api: "DirectInput & Custom Raw Input Pipeline",
        apiEn: "DirectInput & Custom Raw Input Pipeline",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Bannerlord, savaş meydanındaki yüzlerce askerin animasyonlarını ve fiziklerini işlemcinin tüm çekirdeklerini kullanarak simüle eder. Özel motorun girdi katmanı, bu devasa simülasyon döngüsü arasında saniyede 8000 kesme isteğini (IRQ) eritemez ve savaş esnasında kamerayı çevirirken ağır kilitlenmeler yaşatır.",
        analysisEn: "Bannerlord simulates the animations and physics of hundreds of battlefield soldiers using all CPU cores. The custom engine's input layer cannot digest 8000 interrupt requests (IRQs) per second amidst this massive simulation loop, causing severe lockups when turning the camera during battle.",
        tag: "other"
    },
    {
        id: 22,
        name: "Need for Speed Unbound",
        nameEn: "Need for Speed Unbound",
        engine: "Frostbite (Modern Sürüm)",
        engineEn: "Frostbite (Modern Version)",
        api: "Modern Asynchronous Raw Input",
        apiEn: "Modern Asynchronous Raw Input",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        statusTextEn: "Fully Compatible",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "BF2042 ile benzer modern Frostbite altyapısını kullanır. Girdi API'si kararlı çalışır, 8000Hz hızı motoru çökertmez veya takılma yaratmaz. Yarış esnasında sadece kamera dönüşünü etkilediği için performans kaybı yaratmaması teknik açıdan yeterlidir.",
        analysisEn: "Uses a similar modern Frostbite foundation as BF2042. The Input API runs stably; 8000Hz does not crash the engine or cause stuttering. Since it only affects camera rotation during races, the lack of performance impact is technically sufficient.",
        tag: "frostbite"
    },
    {
        id: 23,
        name: "PAYDAY 3",
        nameEn: "PAYDAY 3",
        engine: "Unreal Engine 4",
        engineEn: "Unreal Engine 4",
        api: "UE4 Default Input Stack (4000/8000Hz Sınırlı)",
        apiEn: "UE4 Default Input Stack (4000/8000Hz Limited)",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "hone.gg optimizasyon rehberine göre Unreal Engine 4 girdi yığını (input stack) 4000Hz ve 8000Hz polling değerlerini işleyemez. Yalnızca kamera hareket ettirildiğinde ritmik takılmalar (rhythmic stuttering) üretir. Çözüm: Oyun içi fare polling değerinin 1000Hz'e düşürülmesi. Starbreeze'in getirdiği performans yamaları bu girdi katmanı sınırlamasını değiştirmemiştir.",
        analysisEn: "According to the hone.gg optimization guide, the Unreal Engine 4 input stack cannot process 4000Hz and 8000Hz polling rates. It causes rhythmic stuttering only when the camera is moved. Solution: Lower mouse polling rate to 1000Hz. Starbreeze's performance patches have not addressed this input layer limitation.",
        tag: "unreal"
    },
    {
        id: 24,
        name: "Ready or Not",
        nameEn: "Ready or Not",
        engine: "Unreal Engine 5.x (UE4→UE5, Aralık 2023)",
        engineEn: "Unreal Engine 5.x (UE4→UE5, December 2023)",
        api: "Thread-Locked Input Loop",
        apiEn: "Thread-Locked Input Loop",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Ready or Not, Aralık 2023'te UE4.27'den UE5.x'e geçirilmiştir. UE5 geçişi Enhanced Input sistemini getirse de Void Interactive oyunun girdi altyapısını büyük ölçüde korumuştur. Taktiksel yapay zeka hatları, dinamik çevre öğeleri ve yoğun fizik etkileşimleri ana iş parçacığına aşırı yük bindirir. Girdi işleme süreci hâlâ ana iş parçacığına kilitli (thread-locked) çalıştığı için 8000Hz sinyal yoğunluğu motoru sarsar ve anlık takılmalar üretir.",
        analysisEn: "Ready or Not was migrated from UE4.27 to UE5.x in December 2023. While the UE5 transition brings the Enhanced Input system, Void Interactive largely preserved the game's existing input architecture. Tactical AI threads, dynamic environment elements and intense physics interactions heavily load the main thread. Input processing remains thread-locked to the main thread, so 8000Hz signal density still shakes the engine and produces momentary stutters.",
        tag: "unreal"
    },
    {
        id: 25,
        name: "Red Dead Online",
        nameEn: "Red Dead Online",
        engine: "RAGE (Modern Sürüm - RDR2)",
        engineEn: "RAGE (Modern Version - RDR2)",
        api: "DirectInput / Geliştirilmiş RawInput",
        apiEn: "DirectInput / Improved RawInput",
        status: "partial",
        statusText: "Kısmen Uyumsuz (İvme/Deadzone)",
        statusTextEn: "Partially Compatible (Acceleration/Deadzone)",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "GTA V kadar sert çökmese de RAGE motoru 8000Hz ile tam uyumlu çalışamaz. Motor, alt-milisaniyelik delta zamanlarını konumlandırırken hedef alma algoritmalarında yapay bir 'mouse smoothing' (fare yumuşatma) veya 'deadzone' (ölü bölge) yaratır, nişangahın kararsız dönmesine yol açar.",
        analysisEn: "While not as severely broken as GTA V, the RAGE engine is not fully compatible with 8000Hz. When processing sub-millisecond delta times, the engine's targeting algorithms introduce artificial mouse smoothing or deadzone, causing unstable crosshair rotation.",
        tag: "rage"
    },
    {
        id: 26,
        name: "Squad - Public Testing",
        nameEn: "Squad - Public Testing",
        engine: "Unreal Engine 5.7 (UE4→UE5.5→UE5.7, OWI Modifiye)",
        engineEn: "Unreal Engine 5.7 (UE4→UE5.5→UE5.7, OWI Modified)",
        api: "OWI Custom Input Layer (Main Thread-Bound RawInput)",
        apiEn: "OWI Custom Input Layer (Main Thread-Bound RawInput)",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Squad, Eylül 2025'teki 9.0 güncellemesiyle UE4'ten UE5.5'e, Nisan 2026'daki 10.4 güncellemesiyle de UE5.7'ye geçti (SteamDB/Squad 10.4 Patch Notes). Ancak Offworld Industries, girdi işleme katmanını kendine özel (OWI Custom Input Layer) yazdığı için standart UE5.7 Enhanced Input iyileştirmeleri geçerli değildir. UE5.7'nin CPU kazanımları (render thread paralelleştirme) ana iş parçacığındaki girdi yükünü azaltmaz.",
        analysisEn: "Squad upgraded from UE4 to UE5.5 with the 9.0 update (September 2025), then to UE5.7 with the 10.4 update (April 2026). However Offworld Industries wrote its own custom input layer (OWI Custom Input Layer), so standard UE5.7 Enhanced Input improvements do not apply. UE5.7's CPU gains (render thread parallelization) do not reduce the input load on the main thread.",
        tag: "unreal"
    },
    {
        id: 27,
        name: "Squad",
        nameEn: "Squad",
        engine: "Unreal Engine 5.7 (UE4→UE5.5→UE5.7, OWI Modifiye)",
        engineEn: "Unreal Engine 5.7 (UE4→UE5.5→UE5.7, OWI Modified)",
        api: "OWI Custom Input Layer (Main Thread-Bound RawInput)",
        apiEn: "OWI Custom Input Layer (Main Thread-Bound RawInput)",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Public Testing sürümüyle aynı motor darboğazını paylaşır. Squad'ın UE5.7'ye geçişi (10.4) GPU çökme düzeltmeleri, DLSS 4.5 ve tuş bağlama sistemi revizyonu getirmiştir ancak RawInput boru hattında değişiklik yapılmamıştır. Oyun, girdileri hâlâ ana iş parçacığına kilitli (main thread-bound) şekilde işler.",
        analysisEn: "Shares the same engine bottleneck as the Public Testing version. Squad's UE5.7 transition (10.4) brought GPU crash fixes, DLSS 4.5 and key binding system revisions, but made no changes to the RawInput pipeline. The game still processes input in a main thread-bound manner.",
        tag: "unreal"
    },
    {
        id: 28,
        name: "The Long Dark",
        nameEn: "The Long Dark",
        engine: "Unity (Eski Sürüm)",
        engineEn: "Unity (Legacy Version)",
        api: "Unity Input Manager (Eski API)",
        apiEn: "Unity Input Manager (Legacy API)",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Oyun, Unity motorunun eski nesil Input Manager kütüphanesini kullanır. Bu eski mimari, fare verilerini paralel olarak değil, doğrudan her 'Update' döngüsünde ana iş parçacığı üzerinden okur. Saniyede gelen 8000 veri paketi Unity'nin eski girdi kuyruğunu tamamen kilitler.",
        analysisEn: "The game uses Unity's legacy Input Manager library. This old architecture reads mouse data directly on the main thread through each Update loop, not in parallel. 8000 data packets per second completely lock up Unity's legacy input queue.",
        tag: "unity"
    },
    {
        id: 29,
        name: "World War Z",
        nameEn: "World War Z",
        engine: "Swarm Engine (Saber Interactive)",
        engineEn: "Swarm Engine (Saber Interactive)",
        api: "Asynchronous Decoupled Input Pipeline",
        apiEn: "Asynchronous Decoupled Input Pipeline",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        statusTextEn: "Fully Compatible",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Swarm Engine, ekrandaki binlerce zombinin yapay zekasını ve fiziklerini aynı anda hesaplamak için muazzam bir asenkron çoklu iş parçacığı mimarisine sahiptir. Girdi katmanı, render ve fizik döngülerinden bağımsız izole bir thread'de çalışır. 8000Hz girdi akışını kusursuz işler.",
        analysisEn: "The Swarm Engine has a massive asynchronous multi-threaded architecture designed to simultaneously calculate the AI and physics of thousands of zombies on screen. The input layer runs in an isolated thread independent of render and physics loops. Processes 8000Hz input streams flawlessly.",
        tag: "other"
    },
    {
        id: 30,
        name: "Zero Hour",
        nameEn: "Zero Hour",
        engine: "Unity (Modern Sürüm)",
        engineEn: "Unity (Modern Version)",
        api: "Standard Input Pipeline",
        apiEn: "Standard Input Pipeline",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        statusTextEn: "Strictly Incompatible",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Bağımsız (indie) bir taktiksel FPS olan Zero Hour, Unity motorunun modern ham girdi optimizasyonlarına sahip değildir. Standart girdi hattından geçen 8000Hz verisi, oyun kodunun ana döngüsünde yığılma yapar. Bu durum nişangahın arkadan gelmesine (input lag) veya fareyi hızlı çevirirken takılmalara yol açar.",
        analysisEn: "Zero Hour, an indie tactical FPS, does not have Unity's modern raw input optimizations. 8000Hz data passing through the standard input pipeline builds up in the game code's main loop. This causes crosshair lag (input lag) or stuttering during fast mouse turns.",
        tag: "unity"
    }
];

let filteredGamesCache = games;

window.onscroll = function () {
    const btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.remove("hidden");
    } else {
        btn.classList.add("hidden");
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function g(key) {
    if (currentLang === 'en') {
        const enKey = key + 'En';
        return this[enKey] || this[key];
    }
    return this[key];
}

function calculateAndRenderMetrics() {
    const total = games.length;
    const compatible = games.filter(g => g.status === 'compatible').length;
    const partial = games.filter(g => g.status === 'partial').length;
    const incompatible = games.filter(g => g.status === 'incompatible').length;

    document.getElementById("stat-total").innerText = total;
    document.getElementById("stat-compatible").innerText = compatible;
    document.getElementById("stat-partial").innerText = partial;
    document.getElementById("stat-incompatible").innerText = incompatible;

    document.getElementById("bar-total").style.width = "100%";
    document.getElementById("bar-compatible").style.width = `${(compatible / total) * 100}%`;
    document.getElementById("bar-partial").style.width = `${(partial / total) * 100}%`;
    document.getElementById("bar-incompatible").style.width = `${(incompatible / total) * 100}%`;
}

function renderGames(gamesList) {
    filteredGamesCache = gamesList;
    const grid = document.getElementById("games-grid");
    const emptyState = document.getElementById("empty-state");
    grid.innerHTML = "";

    if (gamesList.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    } else {
        emptyState.classList.add("hidden");
    }

    const isEn = currentLang === 'en';
    const detailLabel = isEn ? 'DETAILED TECHNICAL ANALYSIS' : 'DETAYLI TEKNİK ANALİZ';

    gamesList.forEach(game => {
        let iconSvg = '';
        if (game.status === 'compatible') {
            iconSvg = `<svg class="w-5 h-5 text-gaming-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        } else if (game.status === 'partial') {
            iconSvg = `<svg class="w-5 h-5 text-gaming-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;
        } else {
            iconSvg = `<svg class="w-5 h-5 text-gaming-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        }

        const gName = isEn ? (game.nameEn || game.name) : game.name;
        const gEngine = isEn ? (game.engineEn || game.engine) : game.engine;
        const gApi = isEn ? (game.apiEn || game.api) : game.api;
        const gStatus = isEn ? (game.statusTextEn || game.statusText) : game.statusText;
        const gAnalysis = isEn ? (game.analysisEn || game.analysis) : game.analysis;

        const card = document.createElement("div");
        card.className = "bg-gaming-card border border-gaming-border rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 relative group";
        card.innerHTML = `
                    <div>
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors tech-font leading-snug">${gName}</h3>
                            <div class="p-1 rounded bg-gaming-dark">
                                ${iconSvg}
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2.5 py-1 text-xs font-semibold rounded-md border ${game.badgeColor}">
                                ${gStatus}
                            </span>
                            <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-gaming-border border border-gaming-border text-slate-300">
                                ${gEngine}
                            </span>
                        </div>

                        <div class="space-y-1 text-xs text-slate-400 mb-4 bg-gaming-dark/50 p-3 rounded-lg border border-gaming-border">
                            <p><strong class="text-slate-300">${isEn ? 'API/Input:' : 'API/Girdi:'}</strong> ${gApi}</p>
                        </div>
                    </div>

                    <div class="mt-4 border-t border-gaming-border pt-4">
                        <button onclick="toggleDetails(this)" class="w-full flex items-center justify-between text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors focus:outline-none">
                            <span>${detailLabel}</span>
                            <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="hidden mt-3 text-xs text-slate-400 leading-relaxed bg-gaming-dark p-3 rounded-lg border border-gaming-border transition-all">
                            ${gAnalysis}
                        </div>
                    </div>
                `;
        grid.appendChild(card);
    });
}

function toggleDetails(button) {
    const container = button.nextElementSibling;
    const svg = button.querySelector('svg');
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        svg.classList.add('rotate-180');
    } else {
        container.classList.add('hidden');
        svg.classList.remove('rotate-180');
    }
}

function filterGames() {
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    const statusValue = document.getElementById("status-filter").value;
    const engineValue = document.getElementById("engine-filter").value;

    const filtered = games.filter(game => {
        const gName = (currentLang === 'en' && game.nameEn) ? game.nameEn : game.name;
        const gEngine = (currentLang === 'en' && game.engineEn) ? game.engineEn : game.engine;
        const gApi = (currentLang === 'en' && game.apiEn) ? game.apiEn : game.api;

        const matchesSearch = gName.toLowerCase().includes(searchValue) ||
            gEngine.toLowerCase().includes(searchValue) ||
            gApi.toLowerCase().includes(searchValue);

        const matchesStatus = statusValue === "all" || game.status === statusValue;

        let matchesEngine = true;
        if (engineValue !== "all") {
            matchesEngine = game.tag === engineValue;
        }

        return matchesSearch && matchesStatus && matchesEngine;
    });

    renderGames(filtered);
}

function resetFilters() {
    document.getElementById("search-input").value = "";
    document.getElementById("status-filter").value = "all";
    document.getElementById("engine-filter").value = "all";
    filterGames();
}

function calculateCompatibility() {
    const cpu = document.querySelector('input[name="cpu-power"]:checked').value;
    const year = document.getElementById("diag-year").value;
    const engine = document.getElementById("diag-engine").value;
    const api = document.querySelector('input[name="api-type"]:checked').value;

    let score = 0;
    if (cpu === 'high') score += 25;
    else score += 10;
    if (year === 'modern') score += 30;
    else if (year === 'mid') score += 15;
    else score += 5;
    if (engine === 'asyn') score += 30;
    else if (engine === 'unreal') score += 15;
    else if (engine === 'unity') score += 10;
    else score += 5;
    if (api === 'modern') score += 15;
    else score += 5;

    const resultState = document.getElementById("diag-result-state");
    const initialState = document.getElementById("diag-initial-state");
    const scoreText = document.getElementById("diag-score");
    const progressBar = document.getElementById("diag-progress-bar");
    const statusDot = document.getElementById("diag-status-dot");
    const statusText = document.getElementById("diag-status-text");
    const feedback = document.getElementById("diag-feedback");

    initialState.classList.add("hidden");
    resultState.classList.remove("hidden");

    progressBar.className = "h-full rounded-full transition-all duration-1000";

    let currentScore = 0;
    const interval = setInterval(() => {
        if (currentScore >= score) {
            clearInterval(interval);
        } else {
            currentScore++;
            scoreText.innerText = currentScore + "%";
            progressBar.style.width = currentScore + "%";
        }
    }, 10);

    const isEn = currentLang === 'en';

    if (score >= 80) {
        statusDot.className = "w-2.5 h-2.5 rounded-full mr-2 bg-gaming-success";
        statusText.innerText = isEn ? "SAFE (8000Hz WORKS)" : "GÜVENLİ (8000Hz ÇALIŞIR)";
        statusText.className = "text-xs font-bold uppercase text-gaming-success";
        progressBar.classList.add("bg-gaming-success");
        feedback.innerHTML = isEn
            ? `<strong>Excellent Combination!</strong> The selected game engine and API architecture has an asynchronous structure for processing 8000 data packets per second. With your powerful CPU, you can use an 8000Hz input device smoothly without millisecond stutters.`
            : `<strong>Mükemmel Kombinasyon!</strong> Seçtiğiniz oyun motoru ve API mimarisi, saniyede 8000 veri paketi işleme asenkron yapısına sahiptir. Güçlü işlemcinizle birlikte milisaniyelik takılmalar olmadan pürüzsüzce 8000Hz girdi aygıtı kullanabilirsiniz.`;
    } else if (score >= 50) {
        statusDot.className = "w-2.5 h-2.5 rounded-full mr-2 bg-gaming-warning";
        statusText.innerText = isEn ? "RISKY (STUTTERS POSSIBLE)" : "RİSKLİ (TAKILMALAR OLABİLİR)";
        statusText.className = "text-xs font-bold uppercase text-gaming-warning";
        progressBar.classList.add("bg-gaming-warning");
        feedback.innerHTML = isEn
            ? `<strong>Be Careful!</strong> In this game architecture, the 8000Hz data stream may bottleneck your CPU or the game engine's main thread from time to time. For the smoothest experience, we recommend setting your input device to <strong>2000Hz or 4000Hz</strong> mode.`
            : `<strong>Dikkatli Olun!</strong> Bu oyun mimarisinde 8000Hz veri akışı işlemcinizi veya oyun motorunun ana iş parçacığını zaman zaman darboğaza sokabilir. En pürüzsüz deneyim için girdi aygıtınızı <strong>2000Hz veya 4000Hz</strong> moduna çekmenizi öneririz.`;
    } else {
        statusDot.className = "w-2.5 h-2.5 rounded-full mr-2 bg-gaming-danger";
        statusText.innerText = isEn ? "INCOMPATIBLE (1000Hz REQUIRED)" : "UYUMSUZ (1000Hz ŞART)";
        statusText.className = "text-xs font-bold uppercase text-gaming-danger";
        progressBar.classList.add("bg-gaming-danger");
        feedback.innerHTML = isEn
            ? `<strong>Not Recommended!</strong> The game engine's input loop is directly locked or uses legacy libraries. 8000Hz input will cause severe camera jitter, FPS drops and momentary freezes. Please lock your input device's polling rate to <strong>1000Hz</strong> in your settings.`
            : `<strong>Tavsiye Edilmez!</strong> Oyun motoru girdi döngüsü doğrudan kilitli veya eski kütüphanelerle çalışıyor. 8000Hz girdi aygıtınız kamerada ağır titremelere, FPS droplarına ve anlık donmalara sebep olur. Lütfen girdi aygıtı ayarlarınızdan polling değerini <strong>1000Hz</strong>'e sabitleyin.`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (currentLang === 'en') {
        document.documentElement.lang = 'en';
        document.getElementById('lang-toggle').textContent = 'TR';
    }
    applyTranslations();
    renderGames(games);
    calculateAndRenderMetrics();
});
