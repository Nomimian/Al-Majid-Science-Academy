import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const stats = [
  { num: '500+', label: 'Students' },
  { num: '50+', label: 'Faculty' },
  { num: '15+', label: 'Years' },
  { num: '100%', label: 'Dedication' },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
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

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#091440] via-[#0F1F5C] to-[#1B2A6B] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Decorative arcs */}
      <div className="absolute -right-[10%] top-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full border border-[rgba(212,160,23,0.12)] pointer-events-none" />
      <div className="absolute -right-[5%] top-[5%] w-[220px] md:w-[450px] h-[220px] md:h-[450px] rounded-full border border-[rgba(212,160,23,0.08)] pointer-events-none" />
      <div className="absolute -left-[15%] -bottom-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl w-full pt-24 pb-48 md:pb-52">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="arabic text-[#D4A017] text-lg md:text-[22px] mb-4 tracking-widest opacity-90">الماجد اکیڈمی</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="inline-block bg-[rgba(212,160,23,0.1)] border border-[rgba(212,160,23,0.3)] rounded-sm px-5 py-1.5 mb-6">
          <span className="text-[#F0C842] text-[11px] font-semibold tracking-[4px] uppercase">Est. in Excellence</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
          className="text-white font-black leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(40px, 8vw, 88px)' }}>
          Al-Majid
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.65 }}
          className="text-[#D4A017] font-normal italic mb-7"
          style={{ fontSize: 'clamp(20px, 4vw, 46px)' }}>
          Group of Schools &amp; Academy
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8 }}
          className="text-[rgba(232,235,244,0.8)] max-w-[600px] mx-auto mb-11 leading-[1.8]"
          style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}>
          Nurturing young minds with a world-class education rooted in values, knowledge, and the pursuit of excellence.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1 }}
          className="flex gap-4 justify-center flex-wrap">
          <a href="#programs" className="bg-gradient-to-r from-[#D4A017] to-[#F0C842] text-[#091440] px-9 py-4 rounded-full font-bold text-sm no-underline shadow-[0_8px_32px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(212,160,23,0.55)] transition-all duration-300 inline-block tracking-wide">
            Explore Programs
          </a>
          <a href="#contact" className="border-2 border-[rgba(212,160,23,0.6)] text-[#F0C842] px-9 py-4 rounded-full font-semibold text-sm no-underline hover:bg-[rgba(212,160,23,0.15)] hover:border-[#D4A017] transition-all duration-300 inline-block tracking-wide">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex bg-white/5 border border-[rgba(212,160,23,0.2)] rounded-2xl backdrop-blur-md overflow-hidden w-[calc(100%-40px)] max-w-[480px]"
      >
        {stats.map((stat, i) => (
          <div key={i} className={`flex-1 py-4 px-3 md:py-5 md:px-8 text-center ${i < stats.length - 1 ? 'border-r border-[rgba(212,160,23,0.2)]' : ''}`}>
            <div className="text-[#D4A017] text-xl md:text-2xl font-extrabold font-[Playfair_Display,serif]">{stat.num}</div>
            <div className="text-[rgba(232,235,244,0.7)] text-[10px] md:text-[11px] font-medium tracking-[1.5px] uppercase mt-0.5">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.a href="#about"
        initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[rgba(212,160,23,0.6)] text-xl no-underline"
      >
        <FaChevronDown />
      </motion.a>
    </section>
  );
}
