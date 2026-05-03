import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Star, 
  MessageSquare,
  Package,
  ArrowRight,
  Zap,
  Award
} from 'lucide-react';

const App: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-secondary selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Decorative Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 bg-white/70 backdrop-blur-xl border-b border-primary/10 sticky top-0 z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black text-primary tracking-tighter flex items-center gap-2"
        >
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <Truck className="w-6 h-6" />
          </div>
          <span className="tracking-tight uppercase">UĞURCAN <span className="text-secondary-light">NAKLİYAT</span></span>
        </motion.div>
        
        <div className="hidden md:flex space-x-10 font-bold text-[13px] uppercase tracking-widest text-secondary/70">
          <a href="#hizmetler" className="hover:text-primary transition-all relative group">
            Hizmetler
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#neden-biz" className="hover:text-primary transition-all relative group">
            Neden Biz?
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#yorumlar" className="hover:text-primary transition-all relative group">
            Yorumlar
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+905555555555" 
          className="bg-secondary text-white px-7 py-3 rounded-2xl font-bold hover:shadow-xl hover:shadow-secondary/20 transition-all flex items-center gap-3 border border-secondary"
        >
          <div className="bg-primary p-1 rounded-md">
            <Phone className="w-3 h-3 text-white" />
          </div>
          <span className="hidden sm:inline">0555 555 55 55</span>
          <span className="sm:hidden text-sm uppercase">Ara</span>
        </motion.a>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-12 md:pt-24 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-5 py-2 rounded-2xl text-sm font-black mb-10 shadow-sm">
              <Zap className="w-4 h-4 fill-primary" />
              TEKİRDAĞ'IN EN GÜVENİLİR NAKLİYE FİRMASI
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] mb-10 tracking-[ -0.04em] text-secondary">
              Tekirdağ <br />
              <span className="text-primary">Uğurcan</span> <br />
              Nakliyat.
            </h1>
            <p className="text-secondary/60 text-xl mb-12 max-w-lg leading-relaxed font-medium">
              Sıradan nakliyeciliği unutup. Yapay zeka destekli rota planlama ve ultra-korumalı paketleme sistemiyle tanışın.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                whileHover={{ y: -5 }}
                className="bg-primary text-white px-10 py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-primary/40 flex items-center justify-center gap-4 group"
              >
                Hemen Fiyat Al
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <div className="flex flex-col justify-center">
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-secondary font-black tracking-tight text-sm uppercase">12.000+ Başarılı Taşıma</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Abstract Background Element */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary to-accent opacity-10 rounded-full blur-[80px] animate-pulse"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,82,255,0.25)] border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1512418490979-92798ccc13a0?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Nakliye" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2rem] text-white">
                    <div className="flex items-center gap-4 mb-3">
                       <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <ShieldCheck className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="font-black text-lg">Full Sigorta</p>
                          <p className="text-xs font-bold text-white/70 uppercase">Eşyalarınız Bize Emanet</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats Section with Dark Blue Background */}
      <section className="bg-secondary mx-6 md:mx-12 rounded-[3rem] py-16 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Yıllık Tecrübe", val: "18+" },
            { label: "Mutlu Müşteri", val: "50K" },
            { label: "Araç Filosu", val: "85+" },
            { label: "Şehir Sayısı", val: "81" },
          ].map((stat, i) => (
            <motion.div {...fadeInUp} key={i}>
              <h3 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">{stat.val}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services with Cards */}
      <section id="hizmetler" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-secondary mb-6 tracking-tight">Hizmet Alanlarımız</h2>
            <p className="text-secondary/50 text-xl font-medium max-w-2xl mx-auto">Sadece kutu taşımıyoruz, yeni hayatınıza sorunsuz bir başlangıç yapmanızı sağlıyoruz.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "VIP Ev Taşıma", icon: Truck, color: "bg-primary" },
              { title: "Kurumsal Ofis", icon: Award, color: "bg-secondary" },
              { title: "Akıllı Depolama", icon: Package, color: "bg-accent" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -15 }}
                className="bg-white p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-primary/20 transition-all group"
              >
                <div className={`${item.color} w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 text-white shadow-xl`}>
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-secondary/50 font-medium leading-relaxed mb-8">
                  Eşyalarınızın her birini özel ambalajlarla koruyor, yeni adresinizde her şeyi yerine yerleştiriyoruz.
                </p>
                <div className="flex items-center gap-2 text-primary font-black uppercase text-sm cursor-pointer group-hover:gap-4 transition-all">
                  Detayları Gör <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us with Mavi Tonları */}
      <section id="neden-biz" className="py-32 bg-primary/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Neden Biz?</span>
            <h2 className="text-5xl md:text-7xl font-black text-secondary mb-10 leading-tight">Teknolojiyi Nakliye ile <span className="text-primary">Birleştirdik.</span></h2>
            
            <div className="space-y-8">
              {[
                { t: "Gerçek Zamanlı Takip", d: "Eşyalarınızın nerede olduğunu telefonunuzdan canlı izleyin." },
                { t: "Sabit Fiyat Garantisi", d: "Sürpriz yok, gizli maliyet yok. Başta neyse sonda o." },
                { t: "Uzman Marangoz Ekibi", d: "Mobilyalarınızın demontaj ve montajını ustaları yapar." }
              ].map((point, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-white p-3 rounded-2xl shadow-md text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">{point.t}</h4>
                    <p className="text-secondary/50 font-medium">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
             <div className="bg-primary absolute -inset-4 rounded-[4rem] rotate-3 -z-10 opacity-10"></div>
             <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[3.5rem] shadow-2xl border-8 border-white"
              alt="Professional Moving"
             />
          </div>
        </div>
      </section>

      {/* CTA / Form Section - Deep Blue Gradient */}
      <section id="teklif-al" className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-secondary rounded-[4rem] p-8 md:p-20 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,17,40,0.4)]">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/20 blur-[150px]"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Hemen <br />
                Fiyat <span className="text-primary italic">Teklifi</span> <br />
                Alın.
              </h2>
              <p className="text-white/50 text-xl font-medium mb-12">Size özel indirimli fiyatlarımızı öğrenmek için formu doldurun, 5 dakikada dönüş yapalım.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white font-bold">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  7/24 Canlı Whatsapp Destek
                </div>
                <div className="flex items-center gap-4 text-white font-bold">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  Tüm Türkiye Genelinde Hizmet
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40">Ad Soyad</label>
                      <input type="text" className="w-full bg-primary/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none font-bold" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40">Telefon</label>
                      <input type="tel" className="w-full bg-primary/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none font-bold" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40">Taşınacak Adres</label>
                   <input type="text" placeholder="İl / İlçe" className="w-full bg-primary/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none font-bold" />
                </div>
                <button className="w-full bg-primary text-white py-6 rounded-[2rem] font-black text-xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 active:scale-95">
                  Fiyatı Hesapla
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-3 gap-16 items-center">
          <div className="text-2xl font-black text-primary tracking-tighter flex items-center gap-3">
             <Truck className="w-8 h-8" />
             UĞURCAN NAKLİYAT
          </div>
          <div className="text-center font-bold text-secondary/40 text-sm tracking-widest uppercase">
            © 2026 TEKİRDAĞ UĞURCAN NAKLİYAT. TÜM HAKLARI SAKLIDIR.
          </div>
          <div className="flex justify-end gap-4">
             {/* Social placeholders */}
             {[1,2,3].map(i => (
               <div key={i} className="w-12 h-12 bg-secondary/5 rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer flex items-center justify-center text-secondary">
                 <Zap className="w-5 h-5" />
               </div>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
