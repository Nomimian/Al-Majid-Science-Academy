import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

import majidImg from '../assets/leaders/majid.png';
import hamzaImg from '../assets/leaders/hamza.png';
import samanImg from '../assets/leaders/saman.png';
import sanaImg from '../assets/leaders/sana.png';

const leaders = [
  {
    name: 'Majid Maqbool',
    role: 'Chief Executive Officer',
    roleAr: 'چیف ایگزیکٹو آفیسر',
    desc: 'A visionary leader with an unwavering commitment to transforming education in our community. Under his guidance, AL-Majid has grown into a trusted institution of learning and character.',
    image: majidImg,
  },
  {
    name: 'Hamza Maqbool',
    role: 'Chairman',
    roleAr: 'چیئرمین',
    desc: "With strategic foresight and a passion for institutional excellence, Hamza leads the board with integrity and purpose — ensuring AL-Majid's mission thrives across generations.",
    image: hamzaImg,
  },
  {
    name: 'Saman Majid',
    role: 'Principal',
    roleAr: 'پرنسپل',
    desc: 'A dedicated educator whose heart is in the classroom. Saman leads the academic team with empathy and rigour, ensuring every student feels inspired and supported on their learning journey.',
    image: samanImg,
  },
  {
    name: 'Sana Maqbool',
    role: 'Account Officer & Senior Coordinator',
    roleAr: 'اکاؤنٹ آفیسر و سینئر کوآرڈینیٹر',
    desc: 'The operational backbone of AL-Majid Academy. Sana ensures smooth day-to-day administration, financial management, and seamless coordination between faculty, students, and families.',
    image: sanaImg,
  },
];

export default function Leadership() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="leadership" ref={ref} className="bg-[#F8F6F0] py-20 md:py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-0.5 bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">Our Leadership</span>
            <div className="w-10 h-0.5 bg-[#D4A017]" />
          </div>
          <h2 className="text-[#0F1F5C] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            The Minds Behind<br />
            <em className="text-[#D4A017]">AL-Majid Academy</em>
          </h2>
          <p className="text-[#6B7BAD] text-base md:text-lg max-w-[520px] mx-auto">
            Led by a team of passionate educators and visionary administrators dedicated to your child's future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(9,20,64,0.4)' }}
              className="bg-gradient-to-b from-[#0F1F5C] to-[#091440] rounded-2xl overflow-hidden shadow-[0_6px_30px_rgba(9,20,64,0.25)] transition-all duration-300 flex flex-col"
            >
              {/* Gold top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#D4A017] to-[#F0C842] shrink-0" />

              <div className="p-7 md:p-8 flex flex-col flex-1">
                {/* Photo */}
                <div className="w-[88px] h-[88px] rounded-full overflow-hidden mb-5 shrink-0 ring-2 ring-[rgba(212,160,23,0.5)] ring-offset-2 ring-offset-[#0F1F5C]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role badge */}
                <div className="inline-block bg-[rgba(212,160,23,0.18)] text-[#F0C842] text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1 rounded-full mb-3 leading-tight self-start">
                  {leader.role}
                </div>

                {/* Name */}
                <h3 className="font-[Playfair_Display,serif] text-white text-xl mb-1">
                  {leader.name}
                </h3>

                {/* Arabic role */}
                <p className="arabic text-[rgba(212,160,23,0.7)] text-xs mb-4">
                  {leader.roleAr}
                </p>

                {/* Divider */}
                <div className="w-10 h-px bg-[rgba(212,160,23,0.35)] mb-4" />

                {/* Description */}
                <p className="text-[rgba(232,235,244,0.65)] text-sm leading-[1.8] flex-1">
                  {leader.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
