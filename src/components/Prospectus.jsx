import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaEye, FaBullseye, FaQuoteLeft, FaChevronDown } from 'react-icons/fa';

/* ─── Data ─────────────────────────────────────────── */

const visionMission = [
  {
    icon: FaEye,
    label: 'Our Vision',
    labelAr: 'ہمارا وژن',
    heading: 'Every child prepared — before Grade 9, not after.',
    body: 'We envision an educational landscape where no student ever faces a sudden, unprepared jump into rigorous academics. AL-Majid exists to prove that excellence is not a gift reserved for a few — it is the outcome of the right preparation, started at the right time.',
  },
  {
    icon: FaBullseye,
    label: 'Our Mission',
    labelAr: 'ہمارا مشن',
    heading: 'Har Qadam, Har Bache Ke Saath.',
    body: 'Every step, with every child. Our mission is to deliver senior, expert-level teaching from Grade 4 onwards — closing the gap that causes most students to struggle — so that by Grade 9, our students are not being introduced to hard material for the first time. They are revising what they already know.',
  },
];

const problems = [
  'Every school has its own curriculum — but teaching staff is often not equipped to deliver it. A hard syllabus taught by an unprepared teacher helps no one.',
  'There is no real academy for Grades 5 to 8. Proper, expert teaching only begins at Grade 9. Before that, what exists is just tuition — one teacher, one room, no shared standard.',
  'Every school is chasing syllabus coverage, not real learning. Finishing the book becomes the goal; whether the child actually understood it becomes secondary.',
  'Even in good, well-branded schools, Grades 5–8 are the neglected years — routinely handed to junior staff, because senior teachers are reserved for board classes.',
  'These are the most valuable years for building a child\'s real academic base — and they are being wasted. Then, without warning, all of that missing preparation turns into pressure in a single year: Grade 9.',
];

const comparison = [
  { elsewhere: 'Grades 5–8 are just tuition, not real teaching', almajid: 'Grades 6–8 are taught by senior, expert subject teachers — the same level used for board classes' },
  { elsewhere: 'Every school follows its own inconsistent pace', almajid: 'One shared, deliberate 3-year map for the entire Grade 9 syllabus' },
  { elsewhere: 'Focus is on finishing the syllabus', almajid: 'Focus is on the child actually mastering it, gradually' },
  { elsewhere: 'Grade 9 is a sudden shock for almost everyone', almajid: 'Grade 9 is a revision year — the hard work is already done' },
  { elsewhere: 'Only a few naturally gifted students succeed', almajid: 'Every enrolled student follows the same well-prepared path' },
];

const roadmap = [
  { grade: 'Grade 4–5', years: '2 Years', title: 'Genuine Foundations', desc: 'Reading, writing, spoken English, foundational Math and Science — built properly, with no shortcuts.' },
  { grade: 'Grade 6–8', years: '3 Years', title: 'Grade 9 Syllabus — Early', desc: 'The Grade 9 syllabus taught gradually across three years by senior, expert subject teachers.' },
  { grade: 'Grade 9',   years: '1 Year',  title: 'Revision & Mastery',      desc: 'No longer a first exposure to hard material — a year of practice and exam mastery, because the content was already learned properly.' },
  { grade: 'Grade 10',  years: '1 Year',  title: 'Fresh Ground, Strong Base', desc: 'A single fresh syllabus, taught to a student who has strong habits and a mastered foundation beneath them.' },
];

/* ─── Helpers ───────────────────────────────────────── */

function SectionTag({ light = false, children }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-4">
      <div className={`w-10 h-px ${light ? 'bg-[#D4A017]' : 'bg-[#D4A017]'}`} />
      <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">{children}</span>
      <div className="w-10 h-px bg-[#D4A017]" />
    </div>
  );
}

/* ─── Main Component ────────────────────────────────── */

export default function Prospectus() {
  const [ref1, inView1] = useInView(0.1);
  const [ref2, inView2] = useInView(0.1);
  const [ref3, inView3] = useInView(0.1);
  const [ref4, inView4] = useInView(0.1);
  const [ref5, inView5] = useInView(0.1);

  return (
    <>
      {/* ── 1. VISION & MISSION ── bg: cream */}
      <section id="vision" ref={ref1} className="bg-[#F8F6F0] py-20 md:py-28 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }} className="text-center mb-14"
          >
            <SectionTag>Who We Are</SectionTag>
            <h2 className="text-[#0F1F5C]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Vision &amp; Mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {visionMission.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-gradient-to-b from-[#0F1F5C] to-[#091440] rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0_8px_40px_rgba(9,20,64,0.2)]"
              >
                <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[rgba(212,160,23,0.06)]" />
                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-[rgba(212,160,23,0.08)]" />
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A017] to-[#F0C842]" />

                <div className="w-14 h-14 rounded-2xl bg-[rgba(212,160,23,0.15)] flex items-center justify-center mb-6 shrink-0">
                  <item.icon className="text-[#D4A017] text-2xl" />
                </div>

                <div className="inline-block bg-[rgba(212,160,23,0.15)] text-[#F0C842] text-[10px] font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-4 self-start">
                  {item.label} · <span className="arabic normal-case tracking-normal">{item.labelAr}</span>
                </div>

                <h3 className="font-[Playfair_Display,serif] text-white text-xl md:text-2xl mb-4 leading-snug">
                  {item.heading}
                </h3>
                <p className="text-[rgba(232,235,244,0.65)] text-sm md:text-base leading-[1.85]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-center bg-gradient-to-r from-[#D4A017] to-[#F0C842] rounded-2xl py-6 px-8 shadow-[0_8px_32px_rgba(212,160,23,0.3)]"
          >
            <p className="text-[#091440] font-[Playfair_Display,serif] font-bold text-xl md:text-2xl italic">
              "Har Qadam, Har Bache Ke Saath"
            </p>
            <p className="text-[#091440] text-sm mt-1 font-medium opacity-80">Every step, with every child.</p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CHAIRMAN'S MESSAGE ── bg: white */}
      <section ref={ref2} className="bg-white py-20 md:py-28 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }} className="text-center mb-14"
          >
            <SectionTag>From the CEO</SectionTag>
            <h2 className="text-[#0F1F5C]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              CEO's Message
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative bg-gradient-to-br from-[#0F1F5C] to-[#091440] rounded-3xl p-8 md:p-12 lg:p-14 shadow-[0_12px_60px_rgba(9,20,64,0.3)]"
          >
            <FaQuoteLeft className="text-white opacity-10 text-[80px] md:text-[120px] absolute top-6 left-8 leading-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D4A017] to-[#F0C842] flex items-center justify-center text-[#091440] text-2xl font-black font-[Playfair_Display,serif] shrink-0 shadow-[0_6px_20px_rgba(212,160,23,0.4)]">
                  M
                </div>
                <div>
                  <h4 className="font-[Playfair_Display,serif] text-white text-xl font-bold">Majid Maqbool</h4>
                  <p className="text-[#D4A017] text-sm font-semibold tracking-wide">Chief Executive Officer, AL-Majid Group of Academies</p>
                  <p className="arabic text-[rgba(232,235,244,0.5)] text-xs mt-0.5">چیف ایگزیکٹو آفیسر، الماجد گروپ آف اکیڈمیز</p>
                </div>
              </div>

              <div className="space-y-5 text-[rgba(232,235,244,0.7)] text-[15px] md:text-base leading-[1.95]">
                <p>In the name of Allah, the Most Gracious, the Most Merciful.</p>
                <p>When we founded AL-Majid, we were not trying to build another school. We were trying to solve a problem that had been ignored for too long — one that costs thousands of children their confidence, their potential, and their future every single year.</p>
                <p>We asked ourselves a simple question: why do the majority of students struggle so badly in Grade 9, even after years in well-regarded schools? The answer, when we looked honestly, was painful. The years that matter most — Grades 5 to 8 — are the years that everyone quietly neglects. Management relaxes. Teachers assigned to these classes are junior. Parents assume everything is fine. And then, without warning, Grade 9 arrives — and the child pays the price for a gap they were never responsible for creating.</p>
                <p>We built AL-Majid to close that gap. Not with slogans, not with advertising — but with a deliberate, structured academic model that spreads the real work across the years when a child's mind is most ready to receive it.</p>
                <p className="font-semibold text-white">We are not asking families to trust us blindly. We are asking them to watch — term by term, year by year — as their child covers material that other students won't see until Grade 9, doing it calmly, gradually, and with confidence.</p>
                <p>That is our promise. That is what we are building. And we are honoured to build it alongside every family who believes, as we do, that every child deserves better.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-[rgba(212,160,23,0.25)] flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-[Playfair_Display,serif] text-white font-bold text-lg italic">Majid Maqbool</p>
                  <p className="text-[rgba(232,235,244,0.5)] text-sm">CEO — AL-Majid Group of Academies</p>
                </div>
                <div className="text-right">
                  <p className="arabic text-[#D4A017] text-base font-semibold">الماجد اکیڈمی</p>
                  <p className="text-[rgba(232,235,244,0.4)] text-xs mt-0.5 italic">"Har Qadam, Har Bache Ke Saath"</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. WHY WE EXIST ── bg: navy — cards: WHITE */}
      <section ref={ref3} className="bg-gradient-to-b from-[#0F1F5C] to-[#091440] py-20 md:py-28 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }} className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-10 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">The Problem We Saw</span>
              <div className="w-10 h-px bg-[#D4A017]" />
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Why We Exist</h2>
            <p className="text-[rgba(232,235,244,0.6)] text-base md:text-lg max-w-[580px] mx-auto">
              Before designing anything, we asked a harder question: why do the majority of students struggle so badly in Grade 9, even in schools that claim a tough curriculum?
            </p>
          </motion.div>

          {/* Problem cards — 3 on top, 2 centred below */}
          <div className="mb-16">
            {/* Row 1: cards 1, 2, 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              {problems.slice(0, 3).map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }} animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.1)] flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0F1F5C] flex items-center justify-center text-[#D4A017] text-xs font-extrabold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-[#3A4875] text-sm leading-[1.8]">{p}</p>
                </motion.div>
              ))}
            </div>
            {/* Row 2: cards 4 & 5 — centred */}
            <div className="flex justify-center gap-5 flex-wrap">
              {problems.slice(3).map((p, i) => (
                <motion.div
                  key={i + 3}
                  initial={{ opacity: 0, y: 40 }} animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: (i + 3) * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.1)] flex gap-4 w-full md:w-[calc(33.333%-10px)]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0F1F5C] flex items-center justify-center text-[#D4A017] text-xs font-extrabold shrink-0 mt-0.5">
                    {i + 4}
                  </div>
                  <p className="text-[#3A4875] text-sm leading-[1.8]">{p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT MAKES AL-MAJID DIFFERENT ── bg: WHITE — table: navy/blue as-is */}
      <section ref={ref4} className="bg-white py-20 md:py-28 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }} className="text-center mb-12"
          >
            <SectionTag>The Difference</SectionTag>
            <h2 className="text-[#0F1F5C]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              What Makes AL-Majid Different
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-[rgba(15,31,92,0.12)] shadow-[0_8px_40px_rgba(15,31,92,0.12)]"
          >
            {/* Table header */}
            <div className="grid grid-cols-2">
              <div className="bg-[#0F1F5C] px-6 py-5 text-center border-r border-white/10">
                <span className="text-white/60 font-bold text-sm tracking-widest uppercase">Everywhere Else</span>
              </div>
              <div className="bg-[rgba(212,160,23,0.9)] px-6 py-5 text-center">
                <span className="text-[#091440] font-bold text-sm tracking-widest uppercase">At AL-Majid</span>
              </div>
            </div>

            {/* Table rows */}
            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? '' : ''}`}>
                <div className={`px-5 md:px-7 py-5 border-r border-[rgba(255,255,255,0.08)] flex items-center gap-3 ${i < comparison.length - 1 ? 'border-b border-b-white/10' : ''} bg-[#1B2A6B]`}>
                  <div className="w-2 h-2 rounded-full bg-red-400/70 shrink-0" />
                  <p className="text-white/60 text-sm leading-[1.7]">{row.elsewhere}</p>
                </div>
                <div className={`px-5 md:px-7 py-5 flex items-center gap-3 ${i < comparison.length - 1 ? 'border-b border-b-[rgba(212,160,23,0.2)]' : ''} bg-[rgba(212,160,23,0.08)]`}>
                  <div className="w-2 h-2 rounded-full bg-[#D4A017] shrink-0" />
                  <p className="text-[#0F1F5C] text-sm leading-[1.7] font-medium">{row.almajid}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. HOW WE CLOSE THE GAP ── bg: NAVY */}
      <section ref={ref5} className="bg-gradient-to-b from-[#0F1F5C] to-[#091440] py-20 md:py-28 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }} className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-10 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">Our Response</span>
              <div className="w-10 h-px bg-[#D4A017]" />
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              How We Close the Gap
            </h2>
            <p className="text-[rgba(232,235,244,0.6)] text-base md:text-lg max-w-[540px] mx-auto">
              Instead of eight easy years followed by one brutal one, we spread real preparation gradually — starting years earlier.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4A017] to-[rgba(212,160,23,0.1)]" />

            <div className="flex flex-col gap-8">
              {roadmap.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={inView5 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-6`}
                >
                  {/* Left side */}
                  {i % 2 === 0 ? (
                    <div className="bg-white rounded-2xl p-7 shadow-[0_4px_30px_rgba(0,0,0,0.15)] border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-br from-[#D4A017] to-[#F0C842] text-[#091440] text-xs font-extrabold px-3 py-1 rounded-full">{step.grade}</div>
                        <div className="bg-[rgba(212,160,23,0.15)] text-[#B8860B] text-xs font-semibold px-3 py-1 rounded-full">{step.years}</div>
                      </div>
                      <h4 className="font-[Playfair_Display,serif] text-[#0F1F5C] text-xl mb-2">{step.title}</h4>
                      <p className="text-[#6B7BAD] text-sm leading-[1.8]">{step.desc}</p>
                    </div>
                  ) : (
                    <div /> /* empty right-side spacer */
                  )}

                  {/* Centre dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4A017] to-[#F0C842] shadow-[0_0_0_5px_rgba(212,160,23,0.2),0_0_0_10px_rgba(212,160,23,0.08)] z-10 shrink-0" />
                  </div>

                  {/* Right side */}
                  {i % 2 === 1 ? (
                    <div className="bg-white rounded-2xl p-7 shadow-[0_4px_30px_rgba(0,0,0,0.15)] border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-br from-[#D4A017] to-[#F0C842] text-[#091440] text-xs font-extrabold px-3 py-1 rounded-full">{step.grade}</div>
                        <div className="bg-[rgba(212,160,23,0.15)] text-[#B8860B] text-xs font-semibold px-3 py-1 rounded-full">{step.years}</div>
                      </div>
                      <h4 className="font-[Playfair_Display,serif] text-[#0F1F5C] text-xl mb-2">{step.title}</h4>
                      <p className="text-[#6B7BAD] text-sm leading-[1.8]">{step.desc}</p>
                    </div>
                  ) : (
                    <div /> /* empty left-side spacer */
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Promise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 bg-gradient-to-r from-[#D4A017] to-[#F0C842] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-[0_8px_40px_rgba(212,160,23,0.35)]"
          >
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10" />
            <h3 className="font-[Playfair_Display,serif] text-[#091440] text-2xl md:text-3xl mb-4 relative z-10">Our Promise to Parents</h3>
            <p className="text-[#091440]/75 text-base md:text-lg max-w-[600px] mx-auto leading-[1.85] relative z-10">
              We are not asking you to trust a slogan. We are asking you to watch — term by term — as your child covers real Grade 9 material years ahead of schedule, calmly, gradually, without panic. Judge us by that result when the time comes.
            </p>
            <div className="mt-8 relative z-10">
              <a href="#contact"
                className="inline-block bg-[#091440] text-[#D4A017] px-9 py-4 rounded-full font-bold text-sm no-underline shadow-[0_6px_24px_rgba(9,20,64,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(9,20,64,0.4)] transition-all duration-300">
                Enrol Your Child Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}