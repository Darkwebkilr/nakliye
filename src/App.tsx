import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, 
  Phone, 
  CheckCircle2, 
  Zap, 
  Award,
  MapPin, 
  Star,
  ShieldCheck,
  HelpCircle,
  Clock,
  ArrowRight,
  Calculator
} from 'lucide-react';
import './App.css';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const AnimatedDivider = () => (
  <div className="max-w-[1400px] mx-auto px-8 my-16">
    <div className="animated-divider" />
  </div>
);

// Localized SEO Data for Tekirdag Districts
const districtPages: Record<string, {
  name: string;
  title: string;
  metaDesc: string;
  headline: string;
  intro: string;
  highlightText: string;
}> = {
  'suleymanpasa': {
    name: 'Süleymanpaşa',
    title: 'Süleymanpaşa Evden Eve Nakliyat | Tekirdağ Uğurcan Nakliyat',
    metaDesc: 'Tekirdağ Süleymanpaşa evden eve nakliyat, asansörlü nakliye ve marangozlu eşya taşımacılığı. Süleymanpaşa nakliye fiyatı hesaplayın!',
    headline: 'Süleymanpaşa (Tekirdağ Merkez) Evden Eve Nakliyat!',
    intro: 'Tekirdağ Süleymanpaşa merkezli nakliye firmamız ile Süleymanpaşa içi ve şehirler arası tüm taşınma ihtiyaçlarınızda yanınızdayız. Eşyalarınızı kendi eşyamız gibi sahipleniyor, marangozlu kurulum dahil anahtar teslim taşıyoruz.',
    highlightText: 'Süleymanpaşa Merkezli Depomuzla En Hızlı Hizmet'
  },
  'corlu': {
    name: 'Çorlu',
    title: 'Çorlu Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Çorlu evden eve nakliyat hizmetlerinde asansörlü, sigortalı ve marangozlu taşımacılık. Çorlu nakliye fiyatlarını hesaplayın ve teklif alın!',
    headline: 'Çorlu Evden Eve Nakliyatta Profesyonel Çözümler!',
    intro: 'Çorlu ve çevre bölgelerde evinizi taşırken eşyalarınızı kalın patpat ambalajlarla sarıyor, modüler asansör sistemimizle darbe almadan, çiziksiz şekilde yeni adresinize ulaştırıyoruz. Çorlu marangozlu kurulum hizmetimizle montaj dertlerine son veriyoruz.',
    highlightText: 'Çorlu Bölgesinde Haftalık 15+ Ev Taşıma Yapıyoruz'
  },
  'cerkezkoy': {
    name: 'Çerkezköy',
    title: 'Çerkezköy Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Çerkezköy evden eve nakliyat firmaları arasında hasarsızlık garantili, asansörlü ve marangozlu taşıma hizmeti. Hemen fiyat teklifi alın!',
    headline: 'Çerkezköy Evden Eve Nakliyatta Hasarsızlık Garantisi!',
    intro: 'Kızılpınar, Veliköy ve tüm Çerkezköy genelinde uzman marangozlarımız ve modern araç filomuzla yanınızdayız. Günübirlik işçi kullanmadan, kadrolu profesyonel personelimiz ile eşyalarınızı sıfır hasar garantisiyle taşıyoruz.',
    highlightText: 'Çerkezköy Organize Sanayi ve Konut Taşımalarında Öncü'
  },
  'kapakli': {
    name: 'Kapaklı',
    title: 'Kapaklı Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Kapaklı evden eve nakliyat hizmeti. Kapaklı asansörlü eşya taşıma ve marangozlu kurulum. Hızlı bütçe hesaplayın!',
    headline: 'Kapaklı Evden Eve Nakliyatta Güvenilir Adres!',
    intro: 'Kapaklı genelinde yüksek katlı binalarda kurduğumuz modüler dış cephe asansörlerimiz sayesinde taşınma süresini yarıya indiriyor, eşyalarınızın çizilmesini önlüyoruz. Profesyonel ambalajlama standartlarımızla hizmetinizdeyiz.',
    highlightText: 'Kapaklı ve Çevresinde Güvenilir Nakliye Çözümleri'
  },
  'ergene': {
    name: 'Ergene',
    title: 'Ergene Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Ergene evden eve nakliyat firması. Sanayi ve ev taşımacılığında sigortalı, asansörlü nakliye hizmetleri.',
    headline: 'Ergene Evden Eve Nakliyat ve Taşımacılık!',
    intro: 'Ergene ilçesinde ev, ofis veya parça eşyalarınızı son teknoloji paketleme malzemeleri ve uzman kadrolarımızla taşıyoruz. Beyaz eşyalarınızın ve mobilyalarınızın demontaj-montaj işlemlerini yapıyoruz.',
    highlightText: 'Ergene ve Sanayi Bölgelerinde Taşımacılık Güvencesi'
  },
  'muratli': {
    name: 'Muratlı',
    title: 'Muratlı Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Muratlı evden eve nakliyat fiyatları ve asansörlü nakliye. Muratlı marangozlu ev taşıma hizmeti.',
    headline: 'Muratlı Evden Eve Nakliyatta Kalite ve Güven!',
    intro: 'Muratlı\'dan tüm Trakya ilçelerine ve şehirler arası yollara güvenle taşının. Eşyalarınızın taşınma gününde marangozumuz tarafından montajı eksiksiz yapılır.',
    highlightText: 'Muratlı İlçesinde Güler Yüzlü ve Kaliteli Hizmet'
  },
  'saray': {
    name: 'Saray',
    title: 'Saray Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Saray evden eve nakliyat, marangozlu ev taşıma ve asansörlü nakliye. Saray nakliyat bütçesi hesaplayın.',
    headline: 'Saray Evden Eve Nakliyatta Hasarsız Taşınma!',
    intro: 'Saray ilçesi ve köylerinde evinizi hasarsızlık garantisiyle taşıyalım. Kalın patpatlarla paketlenmiş mobilyalarınız güvenle yerine ulaşır.',
    highlightText: 'Saray ve Çevresinde Kaliteli Taşımacılık'
  },
  'malkara': {
    name: 'Malkara',
    title: 'Malkara Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Malkara evden eve nakliyat hizmeti. Malkara asansörlü ev taşıma ve profesyonel paketleme çözümleri.',
    headline: 'Malkara Evden Eve Nakliyatta Uygun Fiyatlar!',
    intro: 'Malkara genelinde ev taşıma bütçesini hesaplayın. Marangozlu kurulum ve ambalajlı nakliye hizmetimizle yanınızdayız.',
    highlightText: 'Malkara\'da En Uygun Fiyatlı Nakliyat Çözümleri'
  },
  'hayrabolu': {
    name: 'Hayrabolu',
    title: 'Hayrabolu Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Hayrabolu evden eve nakliyat firması. Hayrabolu asansörlü ve sigortalı nakliye hizmeti teklifleri.',
    headline: 'Hayrabolu Evden Eve Eşya Taşıma Hizmeti!',
    intro: 'Hayrabolu\'da tarım aletleri, ev eşyaları ve ofis taşınmalarında kapalı kasa nakliye araçlarımızla en güvenilir lojistik desteğini sunuyoruz.',
    highlightText: 'Hayrabolu ve Çevresinde Profesyonel Nakliye Ekibi'
  },
  'sarkoy': {
    name: 'Şarköy',
    title: 'Şarköy Evden Eve Nakliyat | Trakya Uğurcan Nakliyat',
    metaDesc: 'Şarköy evden eve nakliyat ve yazlık taşımacılığı. Şarköy sigortalı, asansörlü ve marangozlu ev taşıma.',
    headline: 'Şarköy Evden Eve Nakliyat & Yazlık Taşıma!',
    intro: 'Şarköy\'e veya Şarköy\'den diğer şehirlere taşınacak eşyalarınızı, özellikle yazlık ev taşımalarında mobilyaların hasarsız şekilde paketlenmesini sağlayarak güvenle naklediyoruz.',
    highlightText: 'Şarköy Yazlık ve Ev Taşımalarında 1 Numara'
  }
};

const App: React.FC = () => {
  // Routing Detection
  const [currentDistrictKey, setCurrentDistrictKey] = useState<string | null>(null);

  // Calculator States
  const [houseType, setHouseType] = useState('2+1');
  const [fromDistrict, setFromDistrict] = useState('Süleymanpaşa');
  const [toDistrict, setToDistrict] = useState('Süleymanpaşa');
  const [fromFloor, setFromFloor] = useState(1);
  const [toFloor, setToFloor] = useState(1);
  const [elevatorType, setElevatorType] = useState('both'); // 'none', 'from', 'to', 'both'
  const [calculatedPrice, setCalculatedPrice] = useState<{ min: number; max: number } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const districts = [
    "Süleymanpaşa",
    "Çorlu",
    "Çerkezköy",
    "Kapaklı",
    "Ergene",
    "Muratlı",
    "Saray",
    "Malkara",
    "Hayrabolu",
    "Şarköy",
    "Şehir Dışı (Trakya Dışı)"
  ];

  // Effect to parse pathname for localized SEO pages
  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z0-9\-]+)\-evden\-eve\-nakliyat$/);
    
    if (match && match[1]) {
      const key = match[1]
        .replace('sarkoy', 'sarkoy')
        .replace('suleymanpasa', 'suleymanpasa')
        .replace('cerkezkoy', 'cerkezkoy')
        .replace('kapakli', 'kapakli')
        .replace('muratli', 'muratli');

      if (districtPages[key]) {
        setCurrentDistrictKey(key);
        // Automatically preset the calculator to the requested district
        setFromDistrict(districtPages[key].name);
        setToDistrict(districtPages[key].name);
      } else {
        setCurrentDistrictKey(null);
      }
    } else {
      setCurrentDistrictKey(null);
    }
  }, []);

  const currentPageData = currentDistrictKey ? districtPages[currentDistrictKey] : null;

  // Dynamic Metadata updates for search bots and social shares
  useEffect(() => {
    if (currentPageData) {
      document.title = currentPageData.title;
      
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', currentPageData.metaDesc);
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', currentPageData.title);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', currentPageData.metaDesc);

      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', currentPageData.title);
      
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', currentPageData.metaDesc);
    } else {
      document.title = "Trakya Uğurcan Nakliyat - Güvenli & Hasarsız Evden Eve Taşıma";
      
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) {
        descEl.setAttribute('content', "Trakya Uğurcan Nakliyat ile eşyalarınızı en uygun fiyatlarla, güvenli, hızlı ve profesyonel ekiplerimizle taşıyoruz. Hemen ücretsiz fiyat teklifi alın!");
      }
    }
  }, [currentDistrictKey]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    setTimeout(() => {
      // Base Price Algorithm based on House Size
      let base = 6500;
      if (houseType === '1+1') base = 5200;
      if (houseType === '2+1') base = 7200;
      if (houseType === '3+1') base = 9500;
      if (houseType === '4+2 / Dubleks') base = 13000;

      // Floor Cost
      let floorCost = 0;
      const fromFloorFactor = (elevatorType === 'from' || elevatorType === 'both') ? 150 : 450;
      const toFloorFactor = (elevatorType === 'to' || elevatorType === 'both') ? 150 : 450;

      if (fromFloor > 1) floorCost += (fromFloor - 1) * fromFloorFactor;
      if (toFloor > 1) floorCost += (toFloor - 1) * toFloorFactor;

      // Add fixed setup cost for modular elevators
      if (elevatorType === 'from' || elevatorType === 'to') {
        floorCost += 1200;
      } else if (elevatorType === 'both') {
        floorCost += 2200;
      }

      // Distance Cost
      let distanceCost = 0;
      if (fromDistrict !== toDistrict) {
        if (fromDistrict === 'Şehir Dışı (Trakya Dışı)' || toDistrict === 'Şehir Dışı (Trakya Dışı)') {
          distanceCost = 16000; // Base city-to-city long distance
        } else {
          // Inner-Trakya distance fee
          distanceCost = 3500;
        }
      }

      const total = base + floorCost + distanceCost;
      
      // Dynamic margin representation
      const min = Math.round((total * 0.95) / 100) * 100;
      const max = Math.round((total * 1.08) / 100) * 100;

      setCalculatedPrice({ min, max });
      setIsCalculating(false);

      // Scroll slightly to see the result if mobile
      if (window.innerWidth < 768) {
        const resultEl = document.getElementById('calc-result');
        resultEl?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 800);
  };

  // Prepares the WhatsApp message string based on calculator inputs
  const getWhatsAppLink = () => {
    const elevatorText = 
      elevatorType === 'both' ? 'Her iki tarafta da var' :
      elevatorType === 'from' ? 'Sadece yükleme yerinde var' :
      elevatorType === 'to' ? 'Sadece varış yerinde var' : 'Asansör istemiyorum';

    const text = `Merhaba, web sitenizdeki Fiyat Hesaplama Aracını kullanarak tahmini teklif aldım. Bilgilerim şu şekildedir:
• Ev Tipi: ${houseType}
• Nereden: ${fromDistrict}
• Nereye: ${toDistrict}
• Bulunduğu Kat: ${fromFloor}. Kat
• Gideceği Kat: ${toFloor}. Kat
• Modüler Asansör: ${elevatorText}
• Sitedeki Tahmini Fiyat: ${calculatedPrice?.min} - ${calculatedPrice?.max} TL

Bu teklif üzerinden taşınma gününü planlamak ve sabit fiyat garantisiyle netleştirmek istiyorum. Müsait misiniz?`;
    
    return `https://wa.me/905465386866?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Decorative Textures */}
      <div className="grain" />
      <div className="light-mesh" />

      {/* Floating CTA bar for Mobile (Optimized for Conversions) */}
      <div className="fixed bottom-4 left-4 right-4 z-[100] md:hidden bg-white/80 backdrop-blur-xl border border-slate-200/50 p-3 rounded-3xl shadow-2xl flex items-center gap-3">
        <a 
          href="tel:05465386866"
          className="flex-1 bg-slate-950 text-white py-4.5 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-2.5 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 text-orange-500 fill-orange-500" />
          Hemen Ara
        </a>
        <a 
          href={calculatedPrice ? getWhatsAppLink() : "https://wa.me/905465386866?text=Evden%20eve%20nakliye%20hizmetiniz%20hakk%C4%B1nda%20fiyat%20almak%20istiyorum"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-4.5 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-2.5 active:scale-95 transition-transform"
        >
          <WhatsAppIcon className="w-5 h-5" />
          WhatsApp
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center justify-between px-6 py-3.5 max-w-[1400px] mx-auto">
          <div className="flex items-center">
            <a href="/">
              <img src="/logoo.png" alt="Trakya Uğurcan Nakliyat" className="h-16 md:h-20 w-auto object-contain" />
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 font-semibold text-sm text-slate-600">
            <a href="#hizmetler" className="hover:text-orange-600 transition-colors">Hizmetlerimiz</a>
            <a href="#surec" className="hover:text-orange-600 transition-colors">Nasıl Çalışırız?</a>
            <a href="#fark" className="hover:text-orange-600 transition-colors">Neden Biz?</a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">Sıkça Sorulanlar</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:05465386866" 
              className="flex items-center gap-2.5 font-bold text-sm text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors px-4 py-2.5 rounded-2xl"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
              </div>
              <Phone className="w-4 h-4 text-orange-600" />
              <span className="hidden sm:inline">0546 538 68 66</span>
            </a>
            <a 
              href="https://wa.me/905465386866?text=Merhaba,%20nakliye%20hizmetleriniz%20hakk%C4%B1nda%20detayl%C4%B1%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-green-600 text-white px-5 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-md flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden md:inline">Hızlı Teklif</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: Ad Conversion & Value Focus */}
      <header className="relative pt-36 pb-20 px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column: Brand Copy & Trust indicators */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-orange-600" />
              Sözleşmeli & Sigortalı Nakliyat Firması
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900">
              {currentPageData ? currentPageData.headline : (
                <>Trakya'da Hasarsızlık <br /><span className="text-orange-600 italic">Garantili</span> Evden Eve Nakliyat!</>
              )}
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-light">
              {currentPageData ? currentPageData.intro : (
                "Süleymanpaşa, Çorlu, Çerkezköy başta olmak üzere tüm Trakya genelinde profesyonel kadromuzla yanınızdayız. Marangozluk, paketleme ve modüler asansör kurulumu dahil anahtar teslim hizmet."
              )}
            </p>

            {/* Quick Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-xl">
              {[
                { t: "Hasar Sigortası Dahil", d: "Taşıma esnasındaki olası hasarlar güvencemiz altında." },
                { t: "Sözleşmeli Sabit Fiyat", d: "Sonradan ek ücret veya sürpriz maliyetler çıkarılmaz." },
                { t: "Profesyonel Marangoz", d: "Gardırop, yatak odası söküm ve montajı ücretsiz yapılır." },
                { t: "15. Kata Kadar Asansör", d: "Modüler asansörümüz ile merdivenlerden darbe almadan taşıma." }
              ].map((b, i) => (
                <div key={i} className="flex gap-2.5 items-start bg-white p-4 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{b.t}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Active social proof indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-600">
              <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-xl font-medium border border-green-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {currentPageData ? currentPageData.highlightText : "Bugün Trakya'da 4 Aktif Taşıma Yapılıyor"}
              </div>
              <div className="flex items-center gap-1 text-slate-700 font-medium">
                <div className="flex text-amber-500 mr-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
                </div>
                <span>4.9 / 5 (380+ Yorum)</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Interactive Price & Quote Calculator (CRO Engine) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] border border-slate-200/60 p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Calculator className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900 uppercase tracking-tight">Hızlı Fiyat Hesaplayıcı</h3>
                  <p className="text-xs text-slate-400">1 dakikada tahmini taşınma bütçenizi öğrenin</p>
                </div>
              </div>

              <form onSubmit={handleCalculate} className="space-y-5">
                {/* 1. Oda Sayısı */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ev Tipi (Oda Sayısı)</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['1+1', '2+1', '3+1', '4+2 / Dubleks'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setHouseType(type)}
                        className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                          houseType === type 
                            ? 'bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-600/20' 
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Nereden / Nereye */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Nereden</label>
                    <select 
                      value={fromDistrict} 
                      onChange={(e) => setFromDistrict(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      {districts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Nereye</label>
                    <select 
                      value={toDistrict} 
                      onChange={(e) => setToDistrict(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      {districts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Kat Durumu Slider'ları */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Bulunduğu Kat</label>
                      <span className="text-sm font-black text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-lg">{fromFloor === 1 ? 'Giriş Kat' : `${fromFloor}. Kat`}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="15" 
                      value={fromFloor}
                      onChange={(e) => setFromFloor(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-orange-600"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Gideceği Kat</label>
                      <span className="text-sm font-black text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-lg">{toFloor === 1 ? 'Giriş Kat' : `${toFloor}. Kat`}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="15" 
                      value={toFloor}
                      onChange={(e) => setToFloor(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-orange-600"
                    />
                  </div>
                </div>

                {/* 4. Asansör Tercihi */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Modüler Asansör Kurulsun Mu?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'both', label: 'Her İki Tarafa Da' },
                      { value: 'none', label: 'İstemiyorum' },
                      { value: 'from', label: 'Sadece Yüklerken' },
                      { value: 'to', label: 'Sadece Varış Yerine' }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setElevatorType(opt.value)}
                        className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                          elevatorType === opt.value 
                            ? 'bg-slate-950 border-slate-950 text-white shadow-sm' 
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1.5 block leading-normal italic">
                    💡 Dar bina merdivenlerinde eşyaların zarar görmemesi için dış mekan asansörü kurulması tavsiye edilir.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isCalculating}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4.5 rounded-2xl shadow-xl shadow-orange-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-base"
                >
                  {isCalculating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Fiyat Hesaplanıyor...
                    </>
                  ) : (
                    <>
                      Teklifi Hesapla
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Dynamic Result Panel */}
              <AnimatePresence>
                {calculatedPrice && (
                  <motion.div 
                    id="calc-result"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="border-t border-slate-100 pt-6"
                  >
                    <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100 text-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Hesaplanan Tahmini Teklif</p>
                      
                      <div className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight my-2">
                        {calculatedPrice.min.toLocaleString('tr-TR')} - {calculatedPrice.max.toLocaleString('tr-TR')} TL
                      </div>

                      <div className="flex items-center justify-center gap-1.5 text-xs text-green-700 bg-green-50 py-1.5 px-3 rounded-full font-bold max-w-fit mx-auto border border-green-100 mb-4">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        Söküm, Montaj ve Paketleme Dahil Fiyattır.
                      </div>

                      <a 
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] hover:bg-green-600 text-white font-black py-4.5 rounded-2xl shadow-lg shadow-green-500/10 active:scale-95 transition-all flex items-center justify-center gap-2.5 text-base"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        Fiyatı Sabitle & WhatsApp'tan Yaz
                      </a>
                      
                      <span className="text-[10px] text-slate-400 mt-2.5 block leading-normal">
                        * Fiyat tahmidir. Kat durumu, eşyaların cinsi ve ekstra mesafeye göre güncellenebilir. WhatsApp'tan net sabit fiyat alabilirsiniz.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </header>

      <AnimatedDivider />

      {/* CORE VALUE PROPOSITION: Non-AI Organic explanations */}
      <section id="fark" className="py-16 px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs block mb-3">İŞİNİ DÜZGÜN YAPAN EKİP</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">Bizimle Taşınırken Asla Sürprizlerle Karşılaşmazsınız</h2>
          <p className="text-slate-500 mt-4 leading-relaxed font-light">
            Nakliye sektöründeki en büyük şikayetlerin farkındayız. Taşıma günü fiyat artırma, eşyaları özensizce kamyona atma veya mobilya montajını eksik yapma gibi sorunları hayatınızdan çıkarıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              t: "Birinci Sınıf Çift Kat Patpat Ambalajlama", 
              d: "Eşyalarınızın çizilmesini ve darbe almasını önlemek için kalın havalı ambalaj malzemeleri kullanıyoruz. Koltuklarınız, gardırop kapaklarınız ve beyaz eşyalarınız tamamen sarılır."
            },
            { 
              t: "Her Yüke Uygun Geniş Araç Filosu", 
              d: "Farklı boyutlardaki kapalı kasa nakliye araçlarımız sayesinde, eşyalarınızın hacmine en uygun aracı yönlendiriyoruz. Böylece gereksiz yüksek maliyetlerden kaçınmış olursunuz."
            },
            { 
              t: "Kendi Profesyonel Kadromuz", 
              d: "Günübirlik veya toplama işçiyle çalışmıyoruz. Ekibimizin tamamı evden eve taşımacılıkta uzman, marangozluk becerisi olan ve yıllardır bizimle çalışan kadrolu personellerimizdir."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 font-bold text-sm flex items-center justify-center mb-6">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION: Step-by-step trust builder */}
      <section id="surec" className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs block mb-3">SORUNSUZ HİZMET SÜRECİ</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">Taşıma Gününü Adım Adım Nasıl Yönetiyoruz?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Ücretsiz Keşif & Detaylandırma", d: "Eşyalarınızı ve kat durumlarını analiz ederek sizin için en uygun aracı, gerekli paketleme malzemesini ve modüler asansör kurulum planını yapıyoruz." },
              { n: "02", t: "Eşyaları Koruma Altına Alma", d: "Taşıma günü mobilyalarınız marangozumuz tarafından özenle sökülür, her bir parça kalın patpat ambalajlarla sarılır. Kırılacaklar özel kutulara yerleştirilir." },
              { n: "03", t: "Asansörlü & Güvenli Yükleme", d: "Binanızın dış cephesine kurulan modüler asansörümüz ile eşyalarınız sarsılmadan doğrudan nakliye kamyonumuza indirilir ve özel olarak sabitlenir." },
              { n: "04", t: "Yeni Evinizde Montaj & Teslimat", d: "Eşyalarınız yeni adresinizde istediğiniz odalara yerleştirilir. Sökülen gardırop, yatak ve beyaz eşyalarınız marangozumuz tarafından çalışır vaziyette kurulur." }
            ].map((step, i) => (
              <div key={i} className="border-l border-white/10 pl-6 py-2 space-y-4">
                <span className="text-4xl font-black text-orange-500 tracking-tight">{step.n}</span>
                <h4 className="text-lg font-bold text-white">{step.t}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-light">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES: Real and local value representation */}
      <section id="hizmetler" className="py-20 px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs block mb-3">FAALİYET ALANLARIMIZ</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">Profesyonel Taşımacılık Çözümlerimiz</h2>
          </div>
          <p className="text-slate-500 max-w-lg leading-relaxed font-light">
            Eşyalarınızın hacmi ne olursa olsun, ihtiyacınıza özel olarak yapılandırılmış filomuz ve deneyimli personel kadromuz ile Trakya'dan tüm Türkiye'ye hizmet veriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              t: "Evden Eve Nakliyat", 
              d: "Tekirdağ merkez ve ilçelerinde marangozlu, ambalajlı ve sigortalı ev taşıma hizmeti. Eşyalarınız uzman kadromuzla yeni adresinize güvenle ulaştırılır.", 
              img: "/2.jpeg",
              i: Truck 
            },
            { 
              t: "Asansörlü Taşımacılık", 
              d: "Çorlu, Çerkezköy ve Süleymanpaşa başta olmak üzere yüksek katlı binalarda modüler asansör sistemlerimizle eşyalarınızı çizilmeden ve hızla taşıyoruz.", 
              img: "/3.jpeg",
              i: MapPin 
            },
            { 
              t: "Şehirlerarası Nakliye", 
              d: "Trakya'dan Türkiye'nin 81 iline sigortalı ve sözleşmeli taşımacılık. Ofis, büro ve parça eşya taşımacılığında güvenilir ve ekonomik lojistik çözümleri sunuyoruz.", 
              img: "/4.jpeg",
              i: Award 
            },
          ].map((card, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={card.img} 
                  alt={`${card.t} - Trakya Uğurcan Nakliyat`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white p-3 rounded-2xl">
                  <card.i className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{card.t}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{card.d}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-orange-600">
                  <span>Hızlı Bilgi Al</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REAL SERVICE GALLERY: Dynamic and Organic photos from the field */}
      <section className="py-16 bg-slate-100 border-y border-slate-200/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs block mb-3">GERÇEK HİZMET KARELERİ</span>
            <h2 className="text-3xl font-black text-slate-950 uppercase">Araçlarımız ve Paketleme Standartlarımız</h2>
            <p className="text-slate-500 text-sm mt-2 font-light">Eşyalarınızı taşıdığımız araçları ve paketleme kalitemizi kendi çektiğimiz fotoğraflarla inceleyin</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/WhatsApp Image 2025-11-21 at 01.52.24.jpeg", label: "Tekirdağ Evden Eve Nakliyat Profesyonel Ambalajlama Standardımız" },
              { img: "/WhatsApp Image 2025-11-21 at 01.56.35.jpeg", label: "Çorlu Asansörlü Evden Eve Nakliye Mobilya Paketleme" },
              { img: "/WhatsApp Image 2026-05-02 at 23.05.58.jpeg", label: "Trakya Uğurcan Nakliyat Çelik Kasa Nakliye Aracımız" }
            ].map((pic, i) => (
              <div key={i} className="group relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm h-80 bg-slate-200">
                <img 
                  src={pic.img} 
                  alt={pic.label} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 pt-20">
                  <span className="text-white text-xs font-bold tracking-wide">{pic.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SERVICE AREAS & Local SEO Links */}
      <section className="py-16 px-6 md:px-8 max-w-[1400px] mx-auto text-center">
        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs block mb-3">TRAKYA'DA HİZMET NOKTALARI</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-10">Tüm Trakya İlçelerine Hizmet Veriyoruz</h2>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            { n: "Süleymanpaşa", l: "/suleymanpasa-evden-eve-nakliyat" },
            { n: "Çorlu", l: "/corlu-evden-eve-nakliyat" },
            { n: "Çerkezköy", l: "/cerkezkoy-evden-eve-nakliyat" },
            { n: "Kapaklı", l: "/kapakli-evden-eve-nakliyat" },
            { n: "Ergene", l: "/ergene-evden-eve-nakliyat" },
            { n: "Muratlı", l: "/muratli-evden-eve-nakliyat" },
            { n: "Saray", l: "/saray-evden-eve-nakliyat" },
            { n: "Malkara", l: "/malkara-evden-eve-nakliyat" },
            { n: "Hayrabolu", l: "/hayrabolu-evden-eve-nakliyat" },
            { n: "Şarköy", l: "/sarkoy-evden-eve-nakliyat" }
          ].map((city, i) => (
            <a 
              key={i} 
              href={city.l}
              className={`px-5 py-3.5 rounded-2xl border flex items-center gap-2.5 hover:border-orange-500 hover:shadow-sm transition-all ${
                currentDistrictKey === city.l.split('-')[0].replace('/', '')
                  ? 'bg-orange-50 border-orange-500 text-orange-700 font-black' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              <span className="font-bold text-xs uppercase tracking-wider">{city.n}</span>
            </a>
          ))}
        </div>
        
        <p className="mt-8 text-slate-400 font-light text-sm max-w-xl mx-auto">
          Tekirdağ merkezli depomuz ve Trakya'nın her yerinde konuşlu asansör sistemlerimiz sayesinde taşınma taleplerinize en kısa sürede yanıt veriyoruz.
        </p>
      </section>

      {/* SOCIAL PROOF: Real local reviews (Ad landing page CRO essential) */}
      <section className="py-16 bg-slate-100 border-t border-slate-200/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs block mb-3">MÜŞTERİ YORUMLARI</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase">Bizimle Taşınanlar Ne Diyor?</h2>
            <p className="text-slate-500 text-sm mt-2 font-light">Tamamı Trakya bölgesindeki müşterilerimiz tarafından yapılmış gerçek geri bildirimler</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "Murat Y.",
                l: "Çorlu",
                comment: "Uğurcan Bey ve ekibine çok teşekkür ederim. Çorlu'dan Süleymanpaşa'ya 3+1 evimizi taşıdılar. Gardırobumun montajını eskisinden daha sağlam yaptılar. Eşyalarda çizik dahi yoktu. Kesinlikle tavsiye ederim.",
                date: "Temmuz 2026"
              },
              {
                n: "Selin A.",
                l: "Çerkezköy",
                comment: "Taşıma günü tam saatinde geldiler. Asansörlü sistemleri sayesinde 5. kattaki evimizi 2 saatte yüklediler. Çalışanlar çok güler yüzlü ve profesyoneldi. Eşyaları patpatlarla çok sıkı sardılar.",
                date: "Haziran 2026"
              },
              {
                n: "Hakan K.",
                l: "Kapaklı",
                comment: "Fiyat konusunda başta ne konuştuysak o oldu, sonradan kapıda ek ücret istemediler. Benim için en önemlisi buydu. İşlerini dürüstçe yapan esnaflar. Taşınacak herkese tavsiye ederim.",
                date: "Mayıs 2026"
              }
            ].map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex text-amber-500 gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic font-light">"{r.comment}"</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{r.n}</h5>
                    <p className="text-slate-400 text-xs">{r.l} / Trakya</p>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 px-6 md:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-slate-950 text-center mb-12 tracking-tight uppercase">Sıkça Sorulan Sorular</h2>
        
        <div className="space-y-6">
          {[
            { 
              q: "Fiyat teklifi sonradan değişir mi?", 
              a: "Bizimle yapacağınız görüşmede eşya miktarı, kat durumu ve asansör gereksinimi gibi detaylar netleştirildikten sonra size verilen fiyat sabittir. Taşıma günü ekstra bahanelerle asla ek ücret talep edilmez." 
            },
            { 
              q: "Mobilya söküm ve montaj işlemleri fiyata dahil mi?", 
              a: "Evet. Gardıroplarınız, yemek masanız, televizyon üniteniz ve yataklarınız marangozumuz tarafından taşınmadan önce sökülür ve yeni evinizde istediğiniz yerlere sağlam bir şekilde kurulur." 
            },
            { 
              q: "Beyaz eşyaların kurulumunu yapıyor musunuz?", 
              a: "Evet. Çamaşır makinesi, bulaşık makinesi ve buzdolabı gibi beyaz eşyalarınızın sökümünü gerçekleştirip, yeni evinizdeki hazır tesisatlarına bağlantılarını ücretsiz yapıyoruz." 
            },
            { 
              q: "Kırılacak cam eşyaları kim topluyor?", 
              a: "Standart paketleme hizmetimizde gardırop, koltuk ve beyaz eşya gibi kaba eşyaları biz toplar ve paketleriz. Mutfak içi tabak, bardak ve giysileri sizin toplamanız istenir. Eğer 'Mutfak dahil anahtar teslim' toplama isterseniz bunu teklif öncesi belirtmeniz gerekir." 
            },
            { 
              q: "Modüler dış cephe asansörü kaçıncı kata kadar kurulabiliyor?", 
              a: "Asansör sistemlerimiz 15. kata kadar güvenle ulaşabilmektedir. Kurulum yapılabilmesi için bina önünde aracın yanaşabileceği uygun alan bulunması gerekmektedir." 
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-2.5 flex gap-2 items-start">
                <HelpCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                {faq.q}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed pl-7 font-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-black/5 bg-slate-50/30">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-sm">
            <img src="/logoo.png" alt="Trakya Uğurcan Nakliyat Logo" className="h-20 w-auto object-contain mb-8" />
            <p className="text-black/40 font-medium leading-relaxed">
              Trakya'nın en güvenilir nakliye firması. Tekirdağ, Çorlu ve Çerkezköy bölgelerinde asansörlü, sigortalı ve marangozlu evden eve nakliyat hizmeti sunuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 flex-grow">
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-widest mb-6 text-slate-900">Hizmetlerimiz</h5>
              <ul className="space-y-4 text-sm font-bold text-black/60">
                <li><a href="#hizmetler" className="hover:text-orange-600 transition-colors">Evden Eve Nakliyat</a></li>
                <li><a href="#hizmetler" className="hover:text-orange-600 transition-colors">Asansörlü Taşıma</a></li>
                <li><a href="#hizmetler" className="hover:text-orange-600 transition-colors">Şehirlerarası Nakliye</a></li>
                <li><a href="#hizmetler" className="hover:text-orange-600 transition-colors">Ofis & Büro Taşıma</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-widest mb-6 text-slate-900">Bölgeler</h5>
              <ul className="space-y-4 text-sm font-bold text-black/60">
                <li><a href="/suleymanpasa-evden-eve-nakliyat" className="hover:text-orange-600 transition-colors">Süleymanpaşa</a></li>
                <li><a href="/corlu-evden-eve-nakliyat" className="hover:text-orange-600 transition-colors">Çorlu</a></li>
                <li><a href="/cerkezkoy-evden-eve-nakliyat" className="hover:text-orange-600 transition-colors">Çerkezköy</a></li>
                <li><a href="/kapakli-evden-eve-nakliyat" className="hover:text-orange-600 transition-colors">Kapaklı</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-widest mb-6 text-slate-900">İletişim</h5>
              <ul className="space-y-4 text-sm font-bold text-black/60">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-600" />
                  0546 538 68 66
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  Tekirdağ / Trakya
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black tracking-widest uppercase opacity-20">
            © 2026 TRAKYA UĞURCAN NAKLİYAT. TÜM HAKLARI SAKLIDIR.
          </div>
          <div className="text-[10px] font-black tracking-widest uppercase">
            DESIGNED BY <span className="text-orange-600">EVOLUTION AJANS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
