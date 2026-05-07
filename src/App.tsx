import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  Zap, 
  Award,
  Clock, 
  MapPin, 
  MousePointer2 
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
  <div className="max-w-[1400px] mx-auto px-8 my-12">
    <div className="animated-divider" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <div className="grain" />
      <div className="light-mesh" />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-[100] md:hidden flex flex-col gap-3">
        <a 
          href="https://wa.me/905465386866"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-3"
        >
          <WhatsAppIcon className="w-6 h-6" />
          WHATSAPP TEKLİF
        </a>
        <a 
          href="tel:05465386866"
          className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-3"
        >
          <Phone className="w-6 h-6" />
          HEMEN ARA
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-slate-100/50">
        <div className="flex items-center justify-between px-8 py-4 max-w-[1400px] mx-auto">
          <div className="flex items-center">
            <img src="/logoo.png" alt="Trakya Uğurcan Nakliyat Logo" className="h-20 md:h-28 w-auto object-contain" />
          </div>
          
          <div className="hidden lg:flex items-center gap-12 font-bold text-xs uppercase tracking-[0.2em] text-black/40">
            <a href="#hizmetler" className="hover:text-orange-600 transition-colors">Hizmetler</a>
            <a href="#fark" className="hover:text-orange-600 transition-colors">Neden Biz?</a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">S.S.S</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:05465386866" className="hidden sm:flex items-center gap-3 font-black text-sm text-black">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-orange-600" />
              </div>
              0546 538 68 66
            </a>
            <a 
              href="https://wa.me/905465386866"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-green-600 transition-all shadow-xl flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Teklif Al
            </a>
          </div>
        </div>
      </nav>

      {/* HERO: Conversion Central */}
      <header className="relative pt-64 pb-32 px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.08, scale: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] pointer-events-none"
          >
            <img src="/logoo.png" alt="" className="w-full h-full object-contain grayscale" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-orange-50 border border-orange-100 text-orange-600 px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-12"
          >
            <Zap className="w-3.5 h-3.5 fill-orange-600" />
            TRAKYA'NIN EN GÜVENİLİR NAKLİYE ÇÖZÜMÜ
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-[9rem] font-extrabold leading-[0.9] tracking-tight mb-12"
          >
            Trakya'da <br />
            <span className="text-orange-600 italic font-bold">Hızlı & Güvenli</span> <br />
            Taşınma.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-black/40 max-w-2xl mx-auto leading-loose mb-16 font-light"
          >
            Süleymanpaşa'dan Çorlu'ya, Çerkezköy'den tüm Trakya'ya... Eşyalarınızı kaliteli paketleme ve uzman kadromuzla hasarsız ulaştırıyoruz.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col lg:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="https://wa.me/905465386866"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-12 py-7 rounded-[2rem] font-black text-xl shadow-[0_20px_40px_-10px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group"
            >
              <WhatsAppIcon className="w-7 h-7" />
              WHATSAPP
            </a>

            <a 
              href="tel:05465386866"
              className="w-full sm:w-auto bg-black text-white px-12 py-7 rounded-[2rem] font-black text-xl shadow-2xl hover:bg-orange-600 transition-all flex items-center justify-center gap-4 group"
            >
              <Phone className="w-6 h-6 fill-white" />
              HEMEN ARA
            </a>
            
            <div className="flex items-center gap-4 text-left lg:ml-8">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-tighter">Güvenli ve Hızlı</p>
                <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest leading-none">Tüm Trakya</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <AnimatedDivider />

      {/* Modern Services Grid */}
      <section id="hizmetler" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
            <div>
              <span className="text-orange-600 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">NELER TAŞIYORUZ?</span>
              <h2 className="text-6xl md:text-[7rem] font-extrabold tracking-tight leading-[1] uppercase italic">Premium <br /> Nakliyat.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                t: "Evden Eve Nakliyat", 
                d: "Tekirdağ merkez ve tüm ilçelerinde marangozlu, ambalajlı ve sigortalı ev taşıma hizmeti. Eşyalarınız uzman kadromuzla yeni adresinize güvenle ulaştırılır.", 
                img: "/2.jpeg",
                i: Truck 
              },
              { 
                t: "Asansörlü Taşımacılık", 
                d: "Çorlu ve Çerkezköy başta olmak üzere, yüksek katlı binalarda modüler asansör sistemlerimizle eşyalarınızı çizilmeden ve hızla taşıyoruz.", 
                img: "/3.jpeg",
                i: MapPin 
              },
              { 
                t: "Şehirlerarası Nakliye", 
                d: "Trakya'dan Türkiye'nin 81 iline sigortalı taşımacılık. Ofis, büro ve parça eşya taşımacılığında profesyonel lojistik çözümleri sunuyoruz.", 
                img: "/4.jpeg",
                i: Award 
              },
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="group relative h-[600px] rounded-[4rem] overflow-hidden border border-white/10"
              >
                <img 
                  src={card.img} 
                  alt={card.t} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                    <card.i className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-black mb-6 tracking-tight text-white">{card.t}</h3>
                  <p className="text-lg text-white/50 font-light leading-relaxed group-hover:text-white transition-colors">{card.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Service Areas Section */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">HİZMET BÖLGELERİMİZ</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight uppercase mb-16">Tüm Trakya'da Yanınızdayız</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Süleymanpaşa", "Çorlu", "Çerkezköy", "Kapaklı", "Ergene",
              "Muratlı", "Saray", "Malkara", "Hayrabolu", "Şarköy"
            ].map((city, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 flex items-center justify-center gap-3 group hover:border-orange-600 transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:scale-150 transition-transform" />
                <span className="font-bold text-xs uppercase tracking-widest">{city}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-black/40 font-medium max-w-2xl mx-auto">
            Tekirdağ merkezli firmamız ile bölgedeki tüm ilçelere asansörlü nakliyat ve profesyonel eşya taşıma hizmeti sağlıyoruz.
          </p>
        </div>
      </section>

      <AnimatedDivider />
      <section id="fark" className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
                Neden <br /> <span className="text-orange-600 italic">Biz?</span>
              </h2>
              <div className="space-y-8">
                {[
                  { t: "Geniş Filo", d: "Her yüke uygun modern araçlar." },
                  { t: "Uzman Kadro", d: "Deneyimli ve güler yüzlü ekip." },
                  { t: "Tam Güvenlik", d: "Sıfır hasar garantili çalışma." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1">{item.t}</h4>
                      <p className="text-black/40 font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-orange-600 rounded-[4rem] p-12 text-white">
              <h3 className="text-3xl font-black mb-8 uppercase tracking-widest">Süreç</h3>
              <div className="space-y-10">
                {[
                  { n: "01", t: "Analiz", d: "Eşyalarınızı yerinde inceliyoruz." },
                  { n: "02", t: "Paketleme", d: "En iyi malzemelerle koruyoruz." },
                  { n: "03", t: "Teslimat", d: "Söz verdiğimiz saatte kuruyoruz." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-black opacity-30">{step.n}</span>
                    <div>
                      <h4 className="text-xl font-black">{step.t}</h4>
                      <p className="text-white/60 text-sm">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* FAQ */}
      <section id="faq" className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 tracking-tight">Sıkça Sorulanlar</h2>
          <div className="space-y-8">
            {[
              { q: "Fiyatlandırma nasıl yapılır?", a: "Eşya hacmi ve mesafeye göre en uygun teklif sunulur." },
              { q: "Asansör var mı?", a: "Evet, 15. kata kadar modüler asansör sistemimiz mevcuttur." },
            ].map((faq, i) => (
              <div key={i} className="group border-b border-black/5 pb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-black group-hover:text-orange-600 transition-colors">{faq.q}</h4>
                  <MousePointer2 className="w-4 h-4 text-black/20" />
                </div>
                <p className="text-black/40 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
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
              <h5 className="font-black text-[10px] uppercase tracking-widest mb-6">Hizmetlerimiz</h5>
              <ul className="space-y-4 text-sm font-bold text-black/60">
                <li>Evden Eve Nakliyat</li>
                <li>Asansörlü Taşıma</li>
                <li>Şehirlerarası Nakliye</li>
                <li>Ofis & Büro Taşıma</li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-widest mb-6">Bölgeler</h5>
              <ul className="space-y-4 text-sm font-bold text-black/60">
                <li>Süleymanpaşa</li>
                <li>Çorlu</li>
                <li>Çerkezköy</li>
                <li>Kapaklı</li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-widest mb-6">İletişim</h5>
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
