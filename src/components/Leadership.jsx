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
    color: '#D4A017',
    gradient: 'linear-gradient(135deg, #D4A017, #F0C842)',
  },
  {
    name: 'Hamza Maqbool',
    role: 'Chairman',
    roleAr: 'چیئرمین',
    desc: "With strategic foresight and a passion for institutional excellence, Hamza leads the board with integrity and purpose — ensuring AL-Majid's mission thrives across generations.",
    image: hamzaImg,
    color: '#4A90D9',
    gradient: 'linear-gradient(135deg, #4A90D9, #6BADD9)',
  },
  {
    name: 'Saman Majid',
    role: 'Principal',
    roleAr: 'پرنسپل',
    desc: 'A dedicated educator whose heart is in the classroom. Saman leads the academic team with empathy and rigour, ensuring every student feels inspired and supported on their learning journey.',
    image: samanImg,
    color: '#27AE60',
    gradient: 'linear-gradient(135deg, #27AE60, #52C27A)',
  },
  {
    name: 'Sana Maqbool',
    role: 'Account Officer & Senior Coordinator',
    roleAr: 'اکاؤنٹ آفیسر و سینئر کوآرڈینیٹر',
    desc: 'The operational backbone of AL-Majid Academy. Sana ensures smooth day-to-day administration, financial management, and seamless coordination between faculty, students, and families.',
    image: sanaImg,
    color: '#E67E22',
    gradient: 'linear-gradient(135deg, #E67E22, #F39C12)',
  },
];

export default function Leadership() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="leadership"
      ref={ref}
      className="bg-[#F8F6F0] py-20 md:py-28 px-[5%]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-0.5 bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">
              Our Leadership
            </span>
            <div className="w-10 h-0.5 bg-[#D4A017]" />
          </div>

          <h2
            className="text-[#0F1F5C] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            The Minds Behind
            <br />
            <em className="text-[#D4A017]">AL-Majid Academy</em>
          </h2>

          <p className="text-[#6B7BAD] text-base md:text-lg max-w-[520px] mx-auto">
            Led by a team of passionate educators and visionary administrators
            dedicated to your child's future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_6px_40px_rgba(15,31,92,0.08)] border border-[rgba(15,31,92,0.06)] transition-all duration-300 flex flex-col"
            >
              <div
                className="h-2"
                style={{ background: leader.gradient }}
              />

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <div
                  className="w-[88px] h-[88px] rounded-full overflow-hidden mb-5 shrink-0"
                  style={{
                    boxShadow: `0 8px 24px ${leader.color}40`,
                  }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase px-3 py-1 rounded-full mb-3 leading-tight"
                  style={{
                    background: `${leader.color}18`,
                    color: leader.color,
                  }}
                >
                  {leader.role}
                </div>

                <h3 className="font-[Playfair_Display,serif] text-[#0F1F5C] text-xl mb-1">
                  {leader.name}
                </h3>

                <p className="arabic text-[#6B7BAD] text-xs mb-4">
                  {leader.roleAr}
                </p>

                <p className="text-[#6B7BAD] text-sm leading-[1.75] flex-1">
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