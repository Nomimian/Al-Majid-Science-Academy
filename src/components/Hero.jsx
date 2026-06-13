import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import logoBlue from '../assets/logo-blue.png';

const slides = [
  {
    id: 0,
    badge: 'Welcome to Excellence',
    headline: ['Shaping', 'Tomorrow\'s', 'Leaders'],
    sub: 'A sanctuary of knowledge where young minds flourish, values are instilled, and futures are forged with purpose and pride.',
    cta1: { label: 'Explore Programs', href: '#programs' },
    cta2: { label: 'Enrol Now', href: '#contact' },
    accent: '#D4A017',
    bg: 'from-[#091440] via-[#0F1F5C] to-[#1a2d70]',
    pattern: 'mosque',
    quote: null,
  },
  {
    id: 1,
    badge: 'Academic Excellence',
    headline: ['World-Class', 'Education,', 'Rooted in Values'],
    sub: 'From Pre-Primary to Matriculation — our curriculum blends modern academics with Islamic ethics, Quran studies, and character building.',
    cta1: { label: 'Our Programs', href: '#programs' },
    cta2: { label: 'Meet Our Teachers', href: '#leadership' },
    accent: '#F0C842',
    bg: 'from-[#0a1845] via-[#112060] to-[#091440]',
    pattern: 'book',
    quote: { text: 'Seek knowledge from the cradle to the grave.', source: 'Prophet Muhammad ﷺ' },
  },
  {
    id: 2,
    badge: '500+ Students Strong',
    headline: ['A Community', 'of Growth &', 'Belonging'],
    sub: 'Beyond classrooms — co-curricular activities, sports, arts, and Islamic events that build confidence, teamwork, and lifelong friendships.',
    cta1: { label: 'View Gallery', href: '#gallery' },
    cta2: { label: 'Contact Us', href: '#contact' },
    accent: '#D4A017',
    bg: 'from-[#091440] via-[#0d1a52] to-[#0F1F5C]',
    pattern: 'stars',
    quote: null,
  },
  {
    id: 3,
    badge: 'Admissions Open 2025–26',
    headline: ['Begin Your', 'Child\'s', 'Journey'],
    sub: 'Limited seats available. Join the Al-Majid family and give your child the gift of a holistic, values-driven education in Lahore.',
    cta1: { label: 'Apply Now', href: '#contact' },
    cta2: { label: 'Learn More', href: '#about' },
    accent: '#F0C842',
    bg: 'from-[#0c1a50] via-[#091440] to-[#071235]',
    pattern: 'pen',
    quote: { text: 'Education is the most powerful weapon which you can use to change the world.', source: 'Nelson Mandela' },
  },
];

const stats = [
  { num: '500+', label: 'Students' },
  { num: '50+', label: 'Faculty' },
  { num: '15+', label: 'Years' },
  { num: '100%', label: 'Dedication' },
];

// SVG pattern per slide
function SlidePattern({ type, accent }) {
  const op = 0.07;
  if (type === 'mosque') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      {/* Dome silhouette */}
      <ellipse cx="1100" cy="520" rx="280" ry="280" fill="none" stroke={accent} strokeWidth="1" opacity={op * 1.5} />
      <ellipse cx="1100" cy="520" rx="200" ry="200" fill="none" stroke={accent} strokeWidth="0.5" opacity={op} />
      <path d="M820 520 Q1100 200 1380 520" fill="none" stroke={accent} strokeWidth="1.5" opacity={op * 2} />
      <path d="M870 520 Q1100 250 1330 520" fill="none" stroke={accent} strokeWidth="0.8" opacity={op} />
      {/* Minaret lines */}
      <line x1="900" y1="200" x2="900" y2="900" stroke={accent} strokeWidth="0.5" opacity={op} />
      <line x1="1300" y1="200" x2="1300" y2="900" stroke={accent} strokeWidth="0.5" opacity={op} />
      {/* Islamic geometric grid */}
      {Array.from({length: 8}, (_, i) => (
        <line key={i} x1={i * 180} y1="0" x2={i * 180 + 100} y2="900" stroke={accent} strokeWidth="0.3" opacity={op * 0.6} />
      ))}
    </svg>
  );
  if (type === 'book') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      {/* Open book shape */}
      <path d="M600 150 Q720 100 720 500 Q720 100 840 150 L840 750 Q720 700 720 500 Q720 700 600 750 Z" fill="none" stroke={accent} strokeWidth="1" opacity={op * 2} />
      <path d="M550 180 Q720 120 720 500 Q720 120 890 180" fill="none" stroke={accent} strokeWidth="0.6" opacity={op} />
      {/* Radiating knowledge lines */}
      {Array.from({length: 12}, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return <line key={i} x1="720" y1="450" x2={720 + Math.cos(angle) * 600} y2={450 + Math.sin(angle) * 600} stroke={accent} strokeWidth="0.4" opacity={op * 0.8} />;
      })}
      <circle cx="720" cy="450" r="300" fill="none" stroke={accent} strokeWidth="0.5" opacity={op} />
      <circle cx="720" cy="450" r="150" fill="none" stroke={accent} strokeWidth="0.8" opacity={op * 1.2} />
    </svg>
  );
  if (type === 'stars') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      {/* Islamic 8-pointed stars */}
      {[[200,150],[1100,200],[800,600],[300,700],[1300,500],[600,350]].map(([cx,cy], i) => {
        const size = [60,90,50,70,80,45][i];
        const pts = Array.from({length:8}, (_,k) => {
          const a = (k/8)*Math.PI*2 - Math.PI/8;
          const r = k%2===0 ? size : size*0.42;
          return `${cx+Math.cos(a)*r},${cy+Math.sin(a)*r}`;
        }).join(' ');
        return <polygon key={i} points={pts} fill="none" stroke={accent} strokeWidth="0.8" opacity={op * (1 + i * 0.3)} />;
      })}
      {/* Connecting constellation lines */}
      <line x1="200" y1="150" x2="800" y2="600" stroke={accent} strokeWidth="0.3" opacity={op * 0.5} />
      <line x1="800" y1="600" x2="1300" y2="500" stroke={accent} strokeWidth="0.3" opacity={op * 0.5} />
      <line x1="1100" y1="200" x2="600" y2="350" stroke={accent} strokeWidth="0.3" opacity={op * 0.5} />
    </svg>
  );
  if (type === 'pen') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      {/* Large pen / calligraphy nib */}
      <path d="M900 100 L1100 300 L850 700 L750 600 Z" fill="none" stroke={accent} strokeWidth="1" opacity={op * 2} />
      <path d="M850 700 Q800 750 820 800 Q870 780 850 700" fill="none" stroke={accent} strokeWidth="1.5" opacity={op * 2.5} />
      <line x1="900" y1="100" x2="750" y2="600" stroke={accent} strokeWidth="0.5" opacity={op} />
      {/* Writing lines */}
      {Array.from({length: 10}, (_, i) => (
        <line key={i} x1="100" y1={350 + i * 45} x2="650" y2={350 + i * 45} stroke={accent} strokeWidth={i % 3 === 0 ? 1 : 0.4} opacity={i % 3 === 0 ? op * 1.5 : op * 0.6} />
      ))}
      {/* Circular seal */}
      <circle cx="300" cy="200" r="120" fill="none" stroke={accent} strokeWidth="1" opacity={op * 1.5} />
      <circle cx="300" cy="200" r="90" fill="none" stroke={accent} strokeWidth="0.5" opacity={op} />
    </svg>
  );
  return null;
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const canvasRef = useRef(null);
  const timerRef = useRef(null);

  const goTo = useCallback((idx, dir) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 5500);
    return () => clearTimeout(timerRef.current);
  }, [current, paused, next]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.45 + 0.08,
    }));
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,160,23,${p.alpha})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  const slide = slides[current];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.97 }),
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen bg-gradient-to-br ${slide.bg} flex items-center justify-center overflow-hidden transition-all duration-1000`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Slide background pattern */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`pattern-${current}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-[1] pointer-events-none"
        >
          <SlidePattern type={slide.pattern} accent={slide.accent} />
        </motion.div>
      </AnimatePresence>

      {/* Ambient glow */}
      <div className="absolute -right-[10%] top-[10%] w-[500px] h-[500px] rounded-full border border-[rgba(212,160,23,0.1)] pointer-events-none z-[1]" />
      <div className="absolute -left-[10%] bottom-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.05)_0%,transparent_70%)] pointer-events-none z-[1]" />

      {/* Main slide content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-52 md:pb-56">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo + Arabic */}
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <img src={logoBlue} alt="Al-Majid Academy" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl shadow-[0_8px_32px_rgba(212,160,23,0.35)]" />
              <div className="arabic text-[#D4A017] text-base md:text-lg tracking-widest opacity-80">الماجد اکیڈمی</div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[rgba(212,160,23,0.12)] border border-[rgba(212,160,23,0.35)] rounded-full px-5 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] inline-block animate-pulse" />
              <span className="text-[#F0C842] text-[11px] font-semibold tracking-[3px] uppercase">{slide.badge}</span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6">
              {slide.headline.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
                >
                  <span
                    className={`block font-black leading-[1.05] ${i === 1 ? 'text-[#D4A017]' : 'text-white'}`}
                    style={{ fontSize: 'clamp(36px, 7.5vw, 82px)' }}
                  >
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quote (if any) */}
            {slide.quote && (
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex items-start gap-3 bg-[rgba(212,160,23,0.08)] border-l-2 border-[#D4A017] rounded-r-xl px-5 py-3 mb-5 max-w-[540px] text-left"
              >
                <FaQuoteLeft className="text-[#D4A017] text-sm mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[rgba(232,235,244,0.85)] text-sm italic leading-[1.7]">{slide.quote.text}</p>
                  <p className="text-[#D4A017] text-[11px] font-semibold mt-1 tracking-wide">— {slide.quote.source}</p>
                </div>
              </motion.div>
            )}

            {/* Sub text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-[rgba(232,235,244,0.75)] max-w-[560px] mb-9 leading-[1.85]"
              style={{ fontSize: 'clamp(13px, 1.7vw, 17px)' }}
            >
              {slide.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex gap-4 flex-wrap justify-center"
            >
              <a href={slide.cta1.href}
                className="bg-gradient-to-r from-[#D4A017] to-[#F0C842] text-[#091440] px-8 py-3.5 rounded-full font-bold text-sm no-underline shadow-[0_8px_32px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(212,160,23,0.6)] transition-all duration-300 inline-block tracking-wide">
                {slide.cta1.label}
              </a>
              <a href={slide.cta2.href}
                className="border-2 border-[rgba(212,160,23,0.55)] text-[#F0C842] px-8 py-3.5 rounded-full font-semibold text-sm no-underline hover:bg-[rgba(212,160,23,0.15)] hover:border-[#D4A017] transition-all duration-300 inline-block tracking-wide">
                {slide.cta2.label}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Navigation arrows ── */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 border border-[rgba(212,160,23,0.3)] text-[#D4A017] flex items-center justify-center hover:bg-[rgba(212,160,23,0.15)] hover:border-[#D4A017] transition-all duration-300 backdrop-blur-sm cursor-pointer"
      >
        <FaChevronLeft className="text-sm" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 border border-[rgba(212,160,23,0.3)] text-[#D4A017] flex items-center justify-center hover:bg-[rgba(212,160,23,0.15)] hover:border-[#D4A017] transition-all duration-300 backdrop-blur-sm cursor-pointer"
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* ── Slide indicators + progress bar ── */}
      <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        {/* Dot indicators */}
        <div className="flex gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`rounded-full transition-all duration-400 cursor-pointer border-none ${
                i === current
                  ? 'w-7 h-2.5 bg-[#D4A017]'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        {/* Slide counter */}
        <div className="text-[rgba(212,160,23,0.6)] text-[11px] tracking-[3px] font-semibold">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      {/* ── Thin progress line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="h-full bg-gradient-to-r from-[#D4A017] to-[#F0C842]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5.5, ease: 'linear' }}
          />
        </AnimatePresence>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex bg-white/[0.06] border border-[rgba(212,160,23,0.2)] rounded-2xl backdrop-blur-md overflow-hidden w-[calc(100%-40px)] max-w-[460px]"
      >
        {stats.map((stat, i) => (
          <div key={i} className={`flex-1 py-3.5 px-3 text-center ${i < stats.length - 1 ? 'border-r border-[rgba(212,160,23,0.2)]' : ''}`}>
            <div className="text-[#D4A017] text-lg md:text-xl font-extrabold font-[Playfair_Display,serif]">{stat.num}</div>
            <div className="text-[rgba(232,235,244,0.65)] text-[9px] md:text-[10px] font-medium tracking-[1.5px] uppercase mt-0.5">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.a href="#about"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.4, 1] }}
        transition={{ delay: 2, duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 left-8 text-[rgba(212,160,23,0.5)] text-xs no-underline flex items-center gap-2 z-20 tracking-[2px] uppercase font-medium"
      >
        <FaChevronDown className="animate-bounce" /> Scroll
      </motion.a>
    </section>
  );
}
