const games = [
    {
        id: 1,
        name: "American Truck Simulator",
        engine: "Prism3D (SCS Software)",
        api: "Legacy DirectInput / RawInput Senkron Entegrasyonu",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Prism3D motoru, çevre bakış kamerasını doğrudan fizik motorunun güncelleme frekansıyla (60Hz - 120Hz) eş zamanlı yürütür. 8000Hz veri akışı, motorun fizik döngüsündeki her bir adımına aşırı yük bindirir. Fareyi her çevirdiğinizde motor girdi kuyruğunu temizlemek için render döngüsünü bekletir. Tır kabininde ağır takılmalar yaşatır.",
        tag: "prism3d"
    },
    {
        id: 2,
        name: "Assetto Corsa Competizione",
        engine: "Unreal Engine 4 (Kunos Mod)",
        api: "UE4 Windows RawInput Subsystem",
        status: "partial",
        statusText: "Kısmen Uyumsuz / Riskli",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "Kunos, UE4'ün fizik hatlarını araç simülasyonu için derinlemesine modifiye etmiştir. Ancak girdi katmanı standart UE4 kütüphanelerini kullanır. ACC gibi işlemcinin fizik ve FFB (tekerlek geri bildirimi) hesaplamalarına aşırı bağımlı olduğu bir simülasyonda, 8000Hz girdi yükü thread zamanlamalarını bozarak milisaniyelik takılmalara (hitching) neden olur.",
        tag: "unreal"
    },
    {
        id: 3,
        name: "Back 4 Blood",
        engine: "Unreal Engine 4 (Turtle Rock Custom)",
        api: "Asynchronous Raw Input",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Turtle Rock Studios, hızlı aksiyon ortamını desteklemek için UE4'ün girdi hattını asenkron çalışacak şekilde yeniden tasarlamıştır. Girdi verileri doğrudan işletim sisteminden çekilerek render kare hızından bağımsız bir iş parçacığında depolanır. Sinyal yükü motoru yormaz ve nişan pürüzsüz kalır.",
        tag: "unreal"
    },
    {
        id: 4,
        name: "Battlefield 4",
        engine: "Frostbite 3 (Erken Sürüm - 2013)",
        api: "DirectInput / Win32 Message Pump",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "BF4'ün kullandığı eski Frostbite 3 sürümü, girdi zamanlamalarında yüksek frekansları hesaba katacak şekilde tasarlanmamıştır. İki sinyal arasındaki delta zamanı 0.125 ms seviyesine indiğinde motorun ivme ve nişan alma matrisleri bu küçük değerleri doğru ölçekleyemez, koordinat kaybı (packet drop) ve nişangah yavaşlaması (negative acceleration) yaşanır.",
        tag: "frostbite"
    },
    {
        id: 5,
        name: "Battlefield V",
        engine: "Frostbite 3 (Ara Sürüm - 2018)",
        api: "Raw Input Buffer (Dahili Geliştirilmiş)",
        status: "partial",
        statusText: "Kısmen Uyumsuz / Riskli",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "BFV, BF4'e kıyasla gelişmiş bir ham girdi işleme mekanizmasına sahiptir. Ancak 64 kişilik devasa haritalardaki yoğun yıkım ve ağ (network) hesaplamaları işlemciye ağır yük bindirirken 8000Hz farenin mikro kesme istekleri asenkron iş parçacığı yöneticisinde kuyruk birikmesine yol açar. Çatışmalarda 2000Hz üzeri takılmalar üretebilir.",
        tag: "frostbite"
    },
    {
        id: 6,
        name: "Battlefield 2042",
        engine: "Frostbite (Modern Sürüm - 2021+)",
        api: "Modern Asynchronous Raw Input & DirectXTK Input",
        status: "compatible",
        statusText: "Uyumlu (Yüksek CPU Şartı)",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Modern Frostbite motoru, yüksek tazeleme hızlı espor donanımları gözetilerek optimize edilmiştir. Girdi işleme süreci ana render iş parçacığından tamamen koparılmıştır. Ancak oyun CPU'yu ekstrem kullandığı için (özellikle 128 kişi), 8000Hz'in ek veri yükü performansı ucu ucuna dengeleyebilir. Teknik çökme/titreme yapmaz.",
        tag: "frostbite"
    },
    {
        id: 7,
        name: "Chivalry 2",
        engine: "Unreal Engine 4",
        api: "Senkronize Kamera Güncelleme Döngüsü",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Kılıç savurma hızları ve hitbox hesaplamaları farenin dönüş hızı ve açısına doğrudan bağlıdır. Chivalry 2, hileleri önlemek adına her fare girdisini sunucu tabanlı doğrulamayla senkronize eder. 8000Hz veri yoğunluğu, yerel istemci tarafında kamera dönüş matrislerinde kare atlamalarına (frame skipping) yol açar.",
        tag: "unreal"
    },
    {
        id: 8,
        name: "Counter-Strike 2",
        engine: "Source 2 (Valve)",
        api: "Sub-Tick Input Pipeline (Asenkron)",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Source 2, rekabetçi espor standartları düşünülerek sıfırdan yazılmıştır. 'Sub-tick' sistemi fare hareketinin yapıldığı tam milisaniyeyi kare hızından bağımsız kaydeder. 8000Hz girdi, Source 2 tarafından kusursuz desteklenir ve oyunun alt-milisaniye doğruluğuna doğrudan katkıda bulunur. Gecikme veya kararsızlık yaşanmaz.",
        tag: "other"
    },
    {
        id: 9,
        name: "Euro Truck Simulator 2",
        engine: "Prism3D (SCS Software)",
        api: "Legacy DirectInput / RawInput Senkron Entegrasyonu",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "American Truck Simulator ile aynı motor mimarisini paylaşır. Saniyede 8000 kez gelen Win32 Raw Input mesajını asenkron eritecek bir girdi iş parçacığı yoktur. Kabin içinde kafanızı hafifçe döndürürken dahi mikro donmalar ve kare pacing dalgalanmaları yaşatır.",
        tag: "prism3d"
    },
    {
        id: 10,
        name: "F1® 22",
        engine: "EGO Engine 4.0 (Codemasters)",
        api: "Low-Pass Filtered Controller Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "EGO motoru, kontrolcü ve direksiyon setlerinin analog girdilerini yumuşatmak için dahili bir filtre katmanı kullanır. Saniyede 8000 veri paketi bu filtreleme algoritmasına girdiğinde matematiksel yığılma yapar ve motor tamponunu şişirir. FPS yüksek olmasına rağmen fareyi çevirirken takılma hissi yaratır.",
        tag: "other"
    },
    {
        id: 11,
        name: "Farming Simulator 22",
        engine: "GIANTS Engine 9",
        api: "Script-Bound Input Loop",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "GIANTS Engine, girdi yönetimini Lua tabanlı script kütüphaneleri üzerinden yürütür. Bu kütüphaneler oyunun 'Update' döngüsüne sıkı sıkıya bağlıdır. Saniyede gelen 8000 sinyal, Lua VM'inin her karede binlerce gereksiz nesne üretmesine ve Garbage Collector işlemlerinin tavan yapmasına yol açar. Ağır FPS dropları yaşatır.",
        tag: "other"
    },
    {
        id: 12,
        name: "Forza Horizon 5",
        engine: "Forzatech (Modern DX12 / UWP Mimarisi)",
        api: "Asynchronous UWP Windows API Input",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Forzatech, asenkron girdi kütüphaneleriyle yazılmıştır. 8000Hz girdi, motor düzeyinde kararlılık veya performans kaybına yol açmaz. Fare sadece kabin içi veya harita görünümünü kontrol ettiğinden oyun deneyimine doğrudan bir nişan alma etkisi olmasa da, motor bu veri yükünü kusursuzca sindirir.",
        tag: "other"
    },
    {
        id: 13,
        name: "Ghostrunner",
        engine: "Unreal Engine 4",
        api: "UE4 Standard Input Manager",
        status: "partial",
        statusText: "Kısmen Uyumsuz (Mikro Gecikme)",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "Ghostrunner, anlık refleksler ve 360 derece hızlı yön değişimleri gerektirir. UE4'ün varsayılan girdi yöneticisi, ani yön değişimlerinde motorun fizik ve animasyon döngüsüyle senkronizasyon kayıpları yaşar. Fareyi hızlı savurduğunuzda mikro takılmalar veya hedeften sapmalar yaşanabilir. 1000Hz-2000Hz arası çok daha kararlıdır.",
        tag: "unreal"
    },
    {
        id: 14,
        name: "Grand Theft Auto V Enhanced",
        engine: "RAGE (Rockstar Advanced Game Engine)",
        api: "DirectInput / Legacy RawInput",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "RAGE motorunun PC sürümü güncellenmiş olsa da temelinde 2013 girdi kütüphanelerini barındırır. GTA V, 1000Hz üzerindeki polling değerlerinde kronik motor hatalarına sahiptir. Farenizi 8000Hz moduna aldığınızda kamerayı çevirmek imkansız hale gelebilir, hassasiyet aşırı düşebilir veya oyun slayt gösterisine dönebilir (FPS tek hanelere düşer).",
        tag: "rage"
    },
    {
        id: 15,
        name: "Insurgency Sandstorm",
        engine: "Unreal Engine 4",
        api: "Unoptimized UE4 Input Buffer",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Sandstorm, UE4 motorunun optimizasyon ve iş parçacığı dağıtımı açısından en sorunlu yapılandırıldığı oyunlardan biridir. Ana iş parçacığı sürekli sınırda çalıştığından, 8000Hz farenin ürettiği yoğun veri akışı ana iş parçacığındaki işlem yükünü kaldırabileceği limitlerin üzerine çıkarır ve ağır takılmalar yaşatır.",
        tag: "unreal"
    },
    {
        id: 16,
        name: "Mafia Definitive Edition",
        engine: "Illusion Engine",
        api: "Frame-Locked Tick Rate Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Illusion Engine, girdi verilerini motorun dahili 'tick' sürelerine göre (sabit zaman aralıklarında) ölçeklendirir. 8000Hz'den gelen 0.125 ms hassasiyetindeki koordinatlar, matematiksel yuvarlama algoritmalarını şaşırtır. Fareyi çevirirken kamera pürüzsüz dönmek yerine titreme (camera judder) yapar.",
        tag: "other"
    },
    {
        id: 17,
        name: "Mafia II Definitive Edition",
        engine: "Illusion Engine",
        api: "Frame-Locked Tick Rate Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "İlkiyle tamamen aynı Illusion Engine girdi yapısını barındırır. 0.125 ms gibi çok dar bir zaman aralığındaki veriler fizik matrisleriyle uyuşmaz, bu da kamerada mikro titremeler ve tutarsız bir nişangah hareket algısı yaratır.",
        tag: "other"
    },
    {
        id: 18,
        name: "Metro 2033 Redux",
        engine: "4A Engine (Eski Sürüm)",
        api: "DirectInput / Custom Raw Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Redux sürümleri, modern yüksek polling frekansına sahip fareler piyasada yokken yazılan eski 4A Engine çekirdeğini kullanır. Bakış açısı matrisleri (look-at matrices) bu kadar yüksek frekansta veri kabul edecek şekilde güncellenmez. Koordinat atlamaları ve kamerada takılmalar kaçınılmazdır.",
        tag: "other"
    },
    {
        id: 19,
        name: "Metro Exodus Enhanced Edition",
        engine: "4A Engine (Modernize Edilmiş RT)",
        api: "Modernized Raw Input API",
        status: "partial",
        statusText: "Kısmen Uyumsuz (Kare Zamanlaması)",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "Tamamen Ray Tracing mimarisi üzerine kurulu bu sürümde girdi işleme hatları biraz iyileştirilmiştir. Ancak motor, RT hesaplamaları ve işlemci tabanlı BVH veri yapılarını yönetirken asenkron girdi işlemekte zorlanır. Geniş ve hızlı fare dönüşleri kare zamanlamasında dalgalanma yaratır.",
        tag: "other"
    },
    {
        id: 20,
        name: "Metro Last Light Redux",
        engine: "4A Engine (Eski Sürüm)",
        api: "DirectInput / Custom Raw Input",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Metro 2033 Redux ile aynı girdi hattını paylaşır. Saniyede 8000 kez gelen ham sinyal, render kuyruğunda yığılmaya yol açar, fare her hareket ettirildiğinde milisaniyelik FPS dropları kameranın akıcılığını yok eder.",
        tag: "other"
    },
    {
        id: 21,
        name: "Mount & Blade II Bannerlord",
        engine: "TaleWorlds Custom Engine",
        api: "DirectInput & Custom Raw Input Pipeline",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Bannerlord, savaş meydanındaki yüzlerce askerin animasyonlarını ve fiziklerini işlemcinin tüm çekirdeklerini kullanarak simüle eder. Özel motorun girdi katmanı, bu devasa simülasyon döngüsü arasında saniyede 8000 kesme isteğini (IRQ) eritemez ve savaş esnasında kamerayı çevirirken ağır kilitlenmeler yaşatır.",
        tag: "other"
    },
    {
        id: 22,
        name: "Need for Speed™ Unbound",
        engine: "Frostbite (Modern Sürüm)",
        api: "Modern Asynchronous Raw Input",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "BF2042 ile benzer modern Frostbite altyapısını kullanır. Girdi API'si kararlı çalışır, 8000Hz hızı motoru çökertmez veya takılma yaratmaz. Yarış esnasında sadece kamera dönüşünü etkilediği için performans kaybı yaratmaması teknik açıdan yeterlidir.",
        tag: "frostbite"
    },
    {
        id: 23,
        name: "PAYDAY 3",
        engine: "Unreal Engine 4",
        api: "Raw Input Pipeline (Güncellenmiş)",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Çıkış döneminde UE4'ün klasik girdi yığılması ve takılma sorunlarını barındıran yapım, Starbreeze'in getirdiği performans yamalarıyla ham girdi işleme hatlarını (raw input pipelines) optimize etti. 8000Hz şu an motor seviyesinde kararlı bir şekilde işlenebilmektedir.",
        tag: "unreal"
    },
    {
        id: 24,
        name: "Ready or Not",
        engine: "Unreal Engine 4",
        api: "Thread-Locked Input Loop",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Ready or Not; taktiksel yapay zeka hatları, dinamik çevre öğeleri ve yoğun fizik etkileşimleri nedeniyle UE4'ün ana iş parçacığına ağır yük bindirir. Girdi işleme süreci ana iş parçacığına kilitli (thread-locked) çalıştığı için, oda temizlerken yapılan ani dönüşlerde 8000Hz sinyal yoğunluğu motoru sarsar ve anlık takılmalar üretir.",
        tag: "unreal"
    },
    {
        id: 25,
        name: "Red Dead Online",
        engine: "RAGE (Modern Sürüm - RDR2)",
        api: "DirectInput / Geliştirilmiş RawInput",
        status: "partial",
        statusText: "Kısmen Uyumsuz (İvme/Deadzone)",
        badgeColor: "bg-gaming-warning/10 border-gaming-warning/30 text-gaming-warning",
        analysis: "GTA V kadar sert çökmese de RAGE motoru 8000Hz ile tam uyumlu çalışamaz. Motor, alt-milisaniyelik delta zamanlarını konumlandırırken hedef alma algoritmalarında yapay bir 'mouse smoothing' (fare yumuşatma) veya 'deadzone' (ölü bölge) yaratır, nişangahın kararsız dönmesine yol açar.",
        tag: "rage"
    },
    {
        id: 26,
        name: "Squad - Public Testing",
        engine: "Unreal Engine 5.7 (Modifiye Edilmiş)",
        api: "Standard RawInput Module with Heavy Overhead",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Squad, devasa haritaları, karmaşık ses/iletişim motoru ve asker simülasyonu katmanları nedeniyle CPU'ya en çok yük binen oyunlardandır. UE5.7'ye geçilse dahi modifiye edilmiş altyapısı, 8000Hz farenin ürettiği koordinat yığınını sindiremez. Fareyi her çevirdiğinizde motorun döngü süresi fırlar, FPS yarı yarıya düşebilir.",
        tag: "unreal"
    },
    {
        id: 27,
        name: "Squad",
        engine: "Unreal Engine 5.7 (Derinlemesine Modifiye)",
        api: "Standard RawInput Module with Heavy Overhead",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Public Testing sürümüyle aynı motor darboğazını paylaşır. Saniyede 8000 kesme isteği, yoğun işlemci tabanlı savaş simülasyonunda girdi darboğazına yakalanır ve en güçlü sistemlerde dahi kamera sarsıntılı, kesintili hareket eder.",
        tag: "unreal"
    },
    {
        id: 28,
        name: "The Long Dark",
        engine: "Unity (Eski Sürüm)",
        api: "Unity Input Manager (Eski API)",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Oyun, Unity motorunun eski nesil Input Manager kütüphanesini kullanır. Bu eski mimari, fare verilerini paralel olarak değil, doğrudan her 'Update' döngüsünde ana iş parçacığı üzerinden okur. Saniyede gelen 8000 veri paketi Unity'nin eski girdi kuyruğunu tamamen kilitler.",
        tag: "unity"
    },
    {
        id: 29,
        name: "World War Z",
        engine: "Swarm Engine (Saber Interactive)",
        api: "Asynchronous Decoupled Input Pipeline",
        status: "compatible",
        statusText: "Tamamen Uyumlu",
        badgeColor: "bg-gaming-success/10 border-gaming-success/30 text-gaming-success",
        analysis: "Swarm Engine, ekrandaki binlerce zombinin yapay zekasını ve fiziklerini aynı anda hesaplamak için muazzam bir asenkron çoklu iş parçacığı mimarisine sahiptir. Girdi katmanı, render ve fizik döngülerinden bağımsız izole bir thread'de çalışır. 8000Hz girdi akışını kusursuz işler.",
        tag: "other"
    },
    {
        id: 30,
        name: "Zero Hour",
        engine: "Unity (Modern Sürüm)",
        api: "Standard Input Pipeline",
        status: "incompatible",
        statusText: "Kesinlikle Uyumsuz",
        badgeColor: "bg-gaming-danger/10 border-gaming-danger/30 text-gaming-danger",
        analysis: "Bağımsız (indie) bir taktiksel FPS olan Zero Hour, Unity motorunun modern ham girdi optimizasyonlarına sahip değildir. Standart girdi hattından geçen 8000Hz verisi, oyun kodunun ana döngüsünde yığılma yapar. Bu durum nişangahın arkadan gelmesine (input lag) veya fareyi hızlı çevirirken takılmalara yol açar.",
        tag: "unity"
    }
];

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
    const grid = document.getElementById("games-grid");
    const emptyState = document.getElementById("empty-state");
    grid.innerHTML = "";

    if (gamesList.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    } else {
        emptyState.classList.add("hidden");
    }

    gamesList.forEach(game => {
        let iconSvg = '';
        if (game.status === 'compatible') {
            iconSvg = `<svg class="w-5 h-5 text-gaming-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        } else if (game.status === 'partial') {
            iconSvg = `<svg class="w-5 h-5 text-gaming-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;
        } else {
            iconSvg = `<svg class="w-5 h-5 text-gaming-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        }

        const card = document.createElement("div");
        card.className = "bg-gaming-card border border-gaming-border rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 relative group";
        card.innerHTML = `
                    <div>
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors tech-font leading-snug">${game.name}</h3>
                            <div class="p-1 rounded bg-gaming-dark">
                                ${iconSvg}
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2.5 py-1 text-xs font-semibold rounded-md border ${game.badgeColor}">
                                ${game.statusText}
                            </span>
                            <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-gaming-border border border-gaming-border text-slate-300">
                                ${game.engine}
                            </span>
                        </div>

                        <div class="space-y-1 text-xs text-slate-400 mb-4 bg-gaming-dark/50 p-3 rounded-lg border border-gaming-border">
                            <p><strong class="text-slate-300">API/Girdi:</strong> ${game.api}</p>
                        </div>
                    </div>

                    <div class="mt-4 border-t border-gaming-border pt-4">
                        <button onclick="toggleDetails(this)" class="w-full flex items-center justify-between text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors focus:outline-none">
                            <span>DETAYLI TEKNİK ANALİZ</span>
                            <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="hidden mt-3 text-xs text-slate-400 leading-relaxed bg-gaming-dark p-3 rounded-lg border border-gaming-border transition-all">
                            ${game.analysis}
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
        const matchesSearch = game.name.toLowerCase().includes(searchValue) ||
            game.engine.toLowerCase().includes(searchValue) ||
            game.api.toLowerCase().includes(searchValue);

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
    renderGames(games);
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

    if (score >= 80) {
        statusDot.className = "w-2.5 h-2.5 rounded-full mr-2 bg-gaming-success";
        statusText.innerText = "GÜVENLİ (8000Hz ÇALIŞIR)";
        statusText.className = "text-xs font-bold uppercase text-gaming-success";
        progressBar.classList.add("bg-gaming-success");
        feedback.innerHTML = `<strong>Mükemmel Kombinasyon!</strong> Seçtiğiniz oyun motoru ve API mimarisi, saniyede 8000 veri paketi işleme asenkron yapısına sahiptir. Güçlü işlemcinizle birlikte milisaniyelik takılmalar olmadan pürüzsüzce 8000Hz girdi aygıtı kullanabilirsiniz.`;
    } else if (score >= 50) {
        statusDot.className = "w-2.5 h-2.5 rounded-full mr-2 bg-gaming-warning";
        statusText.innerText = "RİSKLİ (TAKILMALAR OLABİLİR)";
        statusText.className = "text-xs font-bold uppercase text-gaming-warning";
        progressBar.classList.add("bg-gaming-warning");
        feedback.innerHTML = `<strong>Dikkatli Olun!</strong> Bu oyun mimarisinde 8000Hz veri akışı işlemcinizi veya oyun motorunun ana iş parçacığını zaman zaman darboğaza sokabilir. En pürüzsüz deneyim için girdi aygıtınızı <strong>2000Hz veya 4000Hz</strong> moduna çekmenizi öneririz.`;
    } else {
        statusDot.className = "w-2.5 h-2.5 rounded-full mr-2 bg-gaming-danger";
        statusText.innerText = "UYUMSUZ (1000Hz ŞART)";
        statusText.className = "text-xs font-bold uppercase text-gaming-danger";
        progressBar.classList.add("bg-gaming-danger");
        feedback.innerHTML = `<strong>Tavsiye Edilmez!</strong> Oyun motoru girdi döngüsü doğrudan kilitli veya eski kütüphanelerle çalışıyor. 8000Hz girdi aygıtınız kamerada ağır titremelere, FPS droplarına ve anlık donmalara sebep olur. Lütfen girdi aygıtı ayarlarınızdan polling değerini <strong>1000Hz</strong>'e sabitleyin.`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    renderGames(games);
    calculateAndRenderMetrics();
});
