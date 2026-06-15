import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  { quote: 'AL-Majid Academy has been transformative for my children. The teachers truly care about each student\'s growth, both academically and as a person.', name: 'Amna Rashid', role: 'Parent of Grade 7 Student', initials: 'AR' },
  { quote: 'The Islamic values embedded in the curriculum, combined with modern academics, is exactly what we were looking for. A truly outstanding institution.', name: 'Muhammad Tariq', role: 'Parent of Grade 4 Student', initials: 'MT' },
  { quote: 'My daughter\'s confidence has grown tremendously since joining. The co-curricular programme here is simply wonderful and keeps her engaged every single day.', name: 'Fatima Noor', role: 'Parent of Grade 6 Student', initials: 'FN' },
  { quote: 'The Quran and Islamic studies programme is exceptional. My son has memorised multiple surahs and his character has improved remarkably since joining.', name: 'Usman Butt', role: 'Parent of Grade 5 Student', initials: 'UB' },
  { quote: 'We moved from another city and were worried about schooling. AL-Majid made the transition seamless — the staff is supportive, warm, and professional.', name: 'Saira Khan', role: 'Parent of Grade 2 Student', initials: 'SK' },
];

// Fixed-height card so all cards in the row are always equal
function Card({ t, dimmed = false, onClick }) {
  return (
    <motion.div
      animate={{ opacity: dimmed ? 0.5 : 1, scale: dimmed ? 0.96 : 1 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className={`bg-[#F8F6F0] rounded-2xl p-7 md:p-8 border border-[rgba(15,31,92,0.06)] relative flex flex-col ${onClick ? 'cursor-pointer' : ''}`}
      style={{ height: '260px' }}
    >
      <div className="absolute top-4 right-6 text-7xl text-[#D4A017] opacity-10 font-[Georgia,serif] leading-none select-none">"</div>
      <div className="flex gap-0.5 mb-3 shrink-0">
        {[...Array(5)].map((_, i) => <span key={i} className="text-[#D4A017] text-sm">★</span>)}
      </div>
      {/* Quote with overflow clamp so all cards stay same height */}
      <p className="text-[#3A4875] text-[13px] md:text-[14px] leading-[1.75] italic flex-1 overflow-hidden line-clamp-4">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[rgba(15,31,92,0.07)] shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0F1F5C] to-[#1B2A6B] flex items-center justify-center text-[#D4A017] text-xs font-extrabold shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="text-[#0F1F5C] font-bold text-sm leading-tight">{t.name}</div>
          <div className="text-[#6B7BAD] text-xs">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView(0.1);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx) => { setDirection(idx > current ? 1 : -1); setCurrent(idx); };
  const prev = () => { setDirection(-1); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDirection(1); setCurrent(c => (c + 1) % testimonials.length); };

  const visibleIdxs = [
    (current - 1 + testimonials.length) % testimonials.length,
    current,
    (current + 1) % testimonials.length,
  ];

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 px-[5%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-0.5 bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">Parent Voices</span>
            <div className="w-10 h-0.5 bg-[#D4A017]" />
          </div>
          <h2 className="text-[#0F1F5C]" style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}>What Our Families Say</h2>
        </motion.div>

        {/* Mobile: single animated card */}
        <div className="block md:hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35 }}
            >
              <Card t={testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: 3 cards — all same fixed height */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {visibleIdxs.map((idx, pos) => (
            <Card
              key={idx}
              t={testimonials[idx]}
              dimmed={pos !== 1}
              onClick={pos !== 1 ? () => goTo(idx) : undefined}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-[rgba(212,160,23,0.4)] bg-[rgba(212,160,23,0.08)] text-[#D4A017] flex items-center justify-center cursor-pointer hover:bg-[rgba(212,160,23,0.2)] transition-colors">
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer border-none ${i === current ? 'w-6 h-2.5 bg-[#D4A017]' : 'w-2.5 h-2.5 bg-[rgba(212,160,23,0.3)]'}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-[rgba(212,160,23,0.4)] bg-[rgba(212,160,23,0.08)] text-[#D4A017] flex items-center justify-center cursor-pointer hover:bg-[rgba(212,160,23,0.2)] transition-colors">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
