import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaChild, FaBookReader, FaFlask, FaLaptopCode, FaPalette, FaMosque, FaUniversity } from 'react-icons/fa';

const programs = [
  { icon: FaChild,      grade: 'Pre-Primary',   ages: 'Ages 3–5',      title: 'Early Childhood Program',   desc: 'A nurturing environment where curiosity blossoms. Play-based learning, language foundations, and character development.',                                                            color: '#4A90D9' },
  { icon: FaBookReader, grade: 'Primary',        ages: 'Grades 1–5',    title: 'Primary School',            desc: 'Core academics — Urdu, English, Mathematics, Science, and Islamic Studies — delivered by dedicated educators.',                                                                 color: '#D4A017' },
  { icon: FaFlask,      grade: 'Middle School',  ages: 'Grades 6–8',    title: 'Middle Years Programme',    desc: 'Deeper inquiry into sciences, humanities, and arts. Students develop critical thinking and research skills.',                                                                     color: '#27AE60' },
  { icon: FaLaptopCode, grade: 'Matriculation',  ages: 'Grades 9–10',   title: 'Science & Technology',      desc: 'Board-aligned curriculum with hands-on STEM labs, computer science, and preparation for competitive exams.',                                                                     color: '#8E44AD' },
  { icon: FaUniversity, grade: 'Intermediate',   ages: 'Grades 11–12',  title: 'Intermediate Programme',    desc: 'Pre, ICS, and Arts streams with expert faculty, extensive resources, and full board exam preparation for FSc, FA & ICS.',                                                       color: '#C0392B' },
  { icon: FaPalette,    grade: 'Co-Curricular',  ages: 'All Grades',    title: 'Arts & Activities',         desc: "Debate, drama, art, calligraphy, and sports programmes that round out every student's profile.",                                                                                color: '#E67E22' },
  { icon: FaMosque,     grade: 'Islamic Studies', ages: 'All Grades',   title: 'Quran & Moral Studies',     desc: 'Tajweed, Tafseer, Islamic history, and ethics — taught with wisdom and love to build righteous character.',                                                                    color: '#1B6B2A' },
];

export default function Programs() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="programs" ref={ref} className="bg-gradient-to-b from-[#0F1F5C] to-[#091440] py-20 md:py-28 px-[5%] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">What We Offer</span>
            <div className="w-10 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Academic Programs</h2>
          <p className="text-[rgba(232,235,244,0.65)] text-base md:text-lg max-w-[560px] mx-auto">
            From early childhood to intermediate, every programme is designed for deep learning and lasting impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.18)' }}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 cursor-default flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            >
              {/* Coloured top bar */}
              <div className="h-1.5 w-full shrink-0" style={{ background: prog.color }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Icon + badges row */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${prog.color}18` }}>
                    <prog.icon style={{ color: prog.color, fontSize: 22 }} />
                  </div>
                  <div className="pt-0.5">
                    <div className="inline-block text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-0.5 rounded-full mb-1.5"
                      style={{ background: `${prog.color}18`, color: prog.color }}>
                      {prog.grade}
                    </div>
                    <div className="text-[#6B7BAD] text-xs font-medium">{prog.ages}</div>
                  </div>
                </div>

                <h3 className="text-[#0F1F5C] font-[Playfair_Display,serif] text-xl mb-2">{prog.title}</h3>
                <p className="text-[#6B7BAD] text-sm leading-[1.8] flex-1">{prog.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
