import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  QrCode, 
  Link as LinkIcon, 
  TrendingUp, 
  ShieldCheck, 
  CreditCard, 
  Briefcase, 
  MapPin, 
  CheckCircle2,
  Menu,
  X,
  Zap,
  Star,
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center glow-shadow">
            <Zap className="text-white fill-white" size={20} />
          </div>
          <span className="text-2xl font-bold tracking-tighter">Craft<span className="text-brand-neon">ID</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#craftscore" className="hover:text-white transition-colors">CraftScore</a>
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <a href="#jobs" className="hover:text-white transition-colors">Job Matching</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium hover:text-brand-neon transition-colors">Login</button>
          <button className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 right-0 z-40 border-t border-white/10 p-6 flex flex-col gap-2 md:hidden"
            style={{
              backdropFilter: 'blur(40px) saturate(200%)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%)',
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              willChange: 'backdrop-filter, transform',
              transform: 'translateZ(0)'
            }}
          >
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200">How it Works</a>
            <a href="#craftscore" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200">CraftScore</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200">Benefits</a>
            <a href="#jobs" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200">Job Matching</a>
            <hr className="border-white/10 my-2" />
            <button className="w-full py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-brand-neon hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-neon mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
            </span>
            The Income Identity Engine for Artisans 🚀
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Turn Your Craft Into <span className="text-gradient">Capital</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            Every payment you receive builds your financial story. CraftID transforms your hard work into a verified credit history—unlocking loans, capital, and opportunities that banks previously denied.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl font-bold text-lg flex items-center justify-center gap-2 glow-shadow"
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-8 py-4 glass rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
            >
              Generate Payment Link
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/artisan${i}/100/100`} alt="Artisan" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Joined by <span className="text-white font-bold">12,000+</span> artisans this month
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass rounded-[2.5rem] p-4 border-white/20 shadow-2xl overflow-hidden">
            <div className="bg-slate-900 rounded-[2rem] p-6 aspect-[4/5] flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Total Balance</p>
                  <h3 className="text-3xl font-bold">₦450,200.00</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-neon/10 flex items-center justify-center text-brand-neon">
                  <TrendingUp size={24} />
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  { name: 'Tailoring Service', amount: '+₦15,000', time: '2 mins ago', icon: <Zap size={16} /> },
                  { name: 'Wedding Suit Deposit', amount: '+₦45,000', time: '1 hour ago', icon: <Star size={16} /> },
                  { name: 'Material Purchase', amount: '-₦12,500', time: '3 hours ago', icon: <Briefcase size={16} /> },
                ].map((tx, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                        {tx.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{tx.name}</p>
                        <p className="text-xs text-slate-500">{tx.time}</p>
                      </div>
                    </div>
                    <p className={`font-bold ${tx.amount.startsWith('+') ? 'text-brand-neon' : 'text-slate-300'}`}>{tx.amount}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs font-bold uppercase text-slate-400">CraftScore</p>
                  <p className="text-brand-neon font-bold">78/100</p>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-brand-blue to-brand-neon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass p-4 rounded-2xl z-20 shadow-xl border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold">Payment Received</p>
                <p className="font-bold">₦25,000.00</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-10 glass p-4 rounded-2xl z-20 shadow-xl border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-purple/20 text-brand-purple rounded-full flex items-center justify-center">
                <QrCode size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold">Your QR Code</p>
                <p className="font-bold text-brand-neon">Active</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Create your Craft Profile",
      desc: "Set up your professional identity in minutes. Tell us what you do and where you work.",
      icon: <Users className="text-brand-blue" size={32} />,
    },
    {
      title: "Get your Link or QR",
      desc: "Generate unique payment links or QR codes to share with clients via WhatsApp or in-person.",
      icon: <QrCode className="text-brand-purple" size={32} />,
    },
    {
      title: "Receive Payments",
      desc: "Clients pay you instantly using cards, bank transfers, or USSD. No POS machine needed.",
      icon: <LinkIcon className="text-brand-neon" size={32} />,
    },
    {
      title: "Unlock Financial Power",
      desc: "Your transaction history automatically builds your CraftScore, unlocking loans and cards.",
      icon: <ShieldCheck className="text-green-400" size={32} />,
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How CraftID <span className="text-gradient">Works</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From artisan to entrepreneur—build a financial identity that speaks for itself. No bank statements. No paperwork. Just your craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Animated Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-neon opacity-20 -z-10" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="glass p-8 rounded-[2rem] border-white/5 hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              <div className="mt-6 text-brand-neon font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Step 0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PaymentFlow = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev + 1250) % 100000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Seamless Payments, <br />
            <span className="text-gradient">Automated History</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Every time a client pays you through CraftID, we record the data. No more manual bookkeeping. Your income speaks for itself.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Instant Settlement", desc: "Money hits your account immediately." },
              { title: "Zero Hardware", desc: "Use your phone as your POS terminal." },
              { title: "Verified Data", desc: "Bank-grade transaction logs for lenders." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full" />
          
          {/* Central Dashboard Mockup */}
          <div className="relative z-10 w-full max-w-md glass p-6 rounded-3xl border-white/20 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold">Revenue Stream</h3>
              <div className="px-3 py-1 rounded-full bg-brand-neon/10 text-brand-neon text-xs font-bold">
                LIVE
              </div>
            </div>

            <div className="text-center mb-10">
              <p className="text-slate-500 text-sm mb-2">Total Processed Today</p>
              <h4 className="text-4xl font-black tabular-nums">₦{count.toLocaleString()}</h4>
            </div>

            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800" />
                      <div className="w-24 h-2 bg-slate-800 rounded-full" />
                    </div>
                    <div className="w-16 h-2 bg-brand-neon/20 rounded-full" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Floating Payment Cards */}
          {[
            { amount: "₦5,000", delay: 0 },
            { amount: "₦12,000", delay: 1.5 },
            { amount: "₦25,000", delay: 3 },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, y: 100, opacity: 0, scale: 0.5 }}
              animate={{ 
                x: [null, 0], 
                y: [null, 0], 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.8]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: card.delay,
                ease: "easeOut"
              }}
              className="absolute glass px-4 py-2 rounded-xl font-bold text-brand-neon z-20 shadow-lg border-brand-neon/30"
            >
              {card.amount}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CraftScoreSection = () => {
  return (
    <section id="craftscore" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Your CraftScore, <br />
            <span className="text-gradient">Your Passport to Credit</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our AI analyzes your payment patterns—frequency, consistency, growth—to generate a score that banks trust. Your transaction history is your credit report.
          </p>
        </motion.div>

        <div className="relative inline-block">
          {/* Circular Score UI */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-slate-800 fill-none"
                strokeWidth="12"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-brand-neon fill-none"
                strokeWidth="12"
                strokeDasharray="100 100"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 28 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-6xl md:text-8xl font-black"
              >
                72
              </motion.span>
              <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">CraftScore</span>
            </div>

            {/* Pulsing Glow */}
            <div className="absolute inset-0 bg-brand-neon/20 blur-[60px] rounded-full -z-10 animate-pulse" />
          </div>

          {/* Data Points Flowing In */}
          {[
            { label: "Stability", pos: "top-0 -left-20" },
            { label: "Volume", pos: "bottom-10 -left-24" },
            { label: "Growth", pos: "top-10 -right-24" },
            { label: "Retention", pos: "bottom-0 -right-20" },
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + (i * 0.2) }}
              className={`absolute ${point.pos} glass px-4 py-2 rounded-full text-xs font-bold border-white/10`}
            >
              {point.label}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Artisans Scored", value: "85k+" },
            { label: "Loans Disbursed", value: "₦1.2B" },
            { label: "Avg. Score Increase", value: "24%" },
            { label: "Trust Rating", value: "99.9%" },
          ].map((stat, i) => (
            <div key={i}>
              <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Nano Loans",
      desc: "Access quick capital for materials or tools based on your CraftScore.",
      icon: <TrendingUp size={24} />,
      locked: true
    },
    {
      title: "Virtual Cards",
      desc: "A dedicated card for your business expenses and tool subscriptions.",
      icon: <CreditCard size={24} />,
      locked: true
    },
    {
      title: "Health Cover",
      desc: "Affordable insurance tailored for artisans and their families.",
      icon: <ShieldCheck size={24} />,
      locked: true
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Unlock Your <span className="text-gradient">Benefits</span></h2>
            <p className="text-slate-400 text-lg">As your CraftScore grows, so does your access to premium financial tools designed specifically for your trade.</p>
          </div>
          <button className="px-6 py-3 glass rounded-xl font-bold text-brand-neon hover:bg-white/10 transition-colors">View All Benefits</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="group relative glass p-8 rounded-[2.5rem] border-white/5 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-6">
                <motion.div 
                  whileInView={{ rotate: [0, 10, 0] }}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-500"
                >
                  <Zap size={18} />
                </motion.div>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                {benefit.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">{benefit.desc}</p>

              <div className="flex items-center gap-2 text-brand-neon font-bold text-sm">
                Unlock with Score 60+ <ArrowRight size={16} />
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-blue/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JobMatching = () => {
  return (
    <section id="jobs" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          {/* Map Visualization */}
          <div className="relative aspect-square glass rounded-[3rem] border-white/10 overflow-hidden p-4">
            <div className="absolute inset-0 opacity-20 grayscale invert">
              <img src="https://picsum.photos/seed/map/800/800" alt="Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            {/* Animated Pins & Connections */}
            <div className="relative w-full h-full">
              {[
                { top: '20%', left: '30%', type: 'artisan' },
                { top: '60%', left: '70%', type: 'client' },
                { top: '40%', left: '50%', type: 'artisan' },
                { top: '80%', left: '20%', type: 'client' },
              ].map((pin, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className={`absolute w-4 h-4 rounded-full ${pin.type === 'artisan' ? 'bg-brand-neon' : 'bg-brand-purple'} glow-shadow`}
                  style={{ top: pin.top, left: pin.left }}
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-inherit opacity-75"></span>
                </motion.div>
              ))}

              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 30% 20% Q 50% 40% 70% 60%"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#00f2ff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Job Card Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-8 right-8 glass p-4 rounded-2xl border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 overflow-hidden">
                    <img src="https://picsum.photos/seed/client/100/100" alt="Client" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 font-bold uppercase">New Job Offer</p>
                    <p className="font-bold">Custom Furniture Set</p>
                  </div>
                  <div className="text-right">
                    <p className="text-brand-neon font-bold">₦120k</p>
                    <p className="text-[10px] text-slate-500">2.4km away</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Turn Skill Into <br />
              <span className="text-gradient">Demand</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              CraftID is your marketplace. Clients searching for quality artisans in their area find YOU—powered by your verified transaction history and authentic reviews.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-3xl border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 text-brand-neon flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold mb-2">Local Visibility</h4>
                <p className="text-slate-500 text-sm">Appear in local search results for your trade.</p>
              </div>
              <div className="glass p-6 rounded-3xl border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                  <Star size={24} />
                </div>
                <h4 className="font-bold mb-2">Verified Reviews</h4>
                <p className="text-slate-500 text-sm">Build trust with reviews tied to actual payments.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-black text-white mb-2">₦50M+</h3>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Processed Monthly</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-white mb-2">12,000+</h3>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Artisans Onboarded</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-white mb-2">15+</h3>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Banking Partners</p>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8">
          {[
            { 
              name: "Babatunde R.", 
              role: "Master Carpenter", 
              text: "CraftID changed how I do business. I used my CraftScore to get a loan for a new industrial saw. My business has doubled.",
              img: "https://picsum.photos/seed/user1/100/100"
            },
            { 
              name: "Grace O.", 
              role: "Fashion Designer", 
              text: "I used to lose clients because I didn't have a POS. Now I just send a link. Seeing my income history in one place is so empowering.",
              img: "https://picsum.photos/seed/user2/100/100"
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] border-white/5 flex gap-6 items-start"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                <img src={testimonial.img} alt={testimonial.name} referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex gap-1 text-brand-neon mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-4">"{testimonial.text}"</p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/10 to-transparent -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Your Next Chapter <br />
            <span className="text-gradient">Starts Here</span>
          </h2>
          <p className="text-slate-400 text-xl mb-12">
            Join 85,000+ artisans who've transformed their craft into capital. No paperwork. No bank statements. Just your work, speaking for itself.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 0 0px rgba(0,242,255,0)", "0 0 20px rgba(0,242,255,0.4)", "0 0 0px rgba(0,242,255,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-brand-neon transition-colors"
            >
              Create Your CraftID
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="px-10 py-5 glass rounded-2xl font-black text-xl"
            >
              Start Receiving Payments
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-purple/20 blur-[100px] rounded-full translate-x-1/2" />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg flex items-center justify-center">
              <Zap className="text-white fill-white" size={16} />
            </div>
            <span className="text-xl font-bold tracking-tighter">Craft<span className="text-brand-neon">ID</span></span>
          </div>

          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          <p className="text-sm text-slate-600">
            © 2026 CraftID Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-brand-neon/30">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <PaymentFlow />
        <CraftScoreSection />
        <BenefitsSection />
        <JobMatching />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
