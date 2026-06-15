import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaBookOpen, FaStar, FaHeart, FaGraduationCap } from 'react-icons/fa';

const values = [
  { icon: FaBookOpen, title: 'Knowledge First', desc: 'We cultivate a deep love for learning, encouraging students to question, explore, and discover beyond the curriculum.' },
  { icon: FaStar, title: 'Academic Excellence', desc: 'Rigorous academics paired with personalised attention ensure every student reaches their highest potential.' },
  { icon: FaHeart, title: 'Moral Character', desc: 'We build integrity, empathy, and responsibility — qualities that define great human beings, not just great scholars.' },
  { icon: FaGraduationCap, title: 'Holistic Growth', desc: 'From arts to athletics, every student is encouraged to grow in mind, body, and spirit.' },
];

const levels = [
  { label: 'Primary School', sub: 'Foundation Years' },
  { label: 'Middle School', sub: 'Guided Growth' },
  { label: 'Intermediate', sub: 'College & Board' },
];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className="bg-[#F8F6F0] py-20 md:py-28 px-[5%]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-0.5 bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">Our Story</span>
            </div>

            <h2 className="text-[#0F1F5C] mb-6 leading-[1.15]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              A Legacy of<br />
              <em className="text-[#D4A017]">Illuminating Minds</em>
            </h2>

            <p className="text-[#3A4875] text-base leading-[1.9] mb-4">
              AL-Majid Group of Academies was founded with a singular vision: to create an institution where every child is seen, heard, and empowered. We believe that education is not merely the transfer of information — it is the transformation of a human being.
            </p>
            <p className="text-[#3A4875] text-base leading-[1.9] mb-9">
              Rooted in Islamic values and guided by modern pedagogical excellence, AL-Majid Academy stands as a beacon for families who want the very best for their children — academically, spiritually, and socially.
            </p>

            <div className="flex gap-4 flex-wrap">
              {levels.map((item, i) => (
                <div key={i} className="bg-white px-5 py-4 rounded-xl border-l-4 border-[#D4A017] shadow-[0_4px_20px_rgba(15,31,92,0.08)]">
                  <div className="font-[Playfair_Display,serif] font-bold text-[#0F1F5C] text-sm">{item.label}</div>
                  <div className="text-[#6B7BAD] text-xs mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Value Cards */}
          <div className="grid grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: '0 16px 50px rgba(15,31,92,0.15)' }}
                className="bg-white p-6 md:p-7 rounded-2xl shadow-[0_6px_30px_rgba(15,31,92,0.08)] border border-[rgba(15,31,92,0.06)] cursor-default transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(212,160,23,0.15)] to-[rgba(212,160,23,0.05)] flex items-center justify-center mb-4">
                  <v.icon className="text-[#D4A017] text-xl" />
                </div>
                <h4 className="font-[Playfair_Display,serif] text-[#0F1F5C] text-base mb-2">{v.title}</h4>
                <p className="text-[#6B7BAD] text-[13px] leading-[1.7]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
