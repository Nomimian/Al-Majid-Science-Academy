import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';

const faqs = [
  { q: 'What are the admission requirements?', a: 'We accept students from Pre-Primary (age 3) through Matriculation (Grade 10). Required documents include the child\'s B-Form (NADRA), previous report cards (for Grade 1+), two passport photos, and parent CNIC copies.' },
  { q: 'When does the academic year begin?', a: 'Our academic year begins in April. However, we accept admissions throughout the year based on seat availability. Contact us for current availability.' },
  { q: 'What medium of instruction is used?', a: 'We offer both Urdu and English medium instruction. Our core subjects are taught in English, while Urdu and Islamic Studies are conducted in Urdu.' },
  { q: 'Are there any scholarships available?', a: 'Yes. We offer merit-based scholarships for exceptional students and need-based fee concessions for deserving families. Please speak to our administration for details.' },
  { q: 'What co-curricular activities are offered?', a: 'We offer debate, drama, calligraphy, art, cricket, football, and annual science fairs. We believe in developing the whole child beyond academics.' },
  { q: 'How do I register my child?', a: 'Simply contact us via WhatsApp or phone to schedule a visit. You can tour the school, meet our Principal, and submit the application form in person.' },
];

export default function AdmissionsFAQ() {
  const [ref, inView] = useInView(0.1);
  const [open, setOpen] = useState(null);

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 px-[5%]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-0.5 bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">Admissions</span>
            <div className="w-10 h-0.5 bg-[#D4A017]" />
          </div>
          <h2 className="text-[#0F1F5C] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Frequently Asked<br />
            <em className="text-[#D4A017]">Questions</em>
          </h2>
          <p className="text-[#6B7BAD] text-base md:text-lg max-w-[480px] mx-auto">
            Everything you need to know before joining the AL-Majid family.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[#F8F6F0] rounded-2xl overflow-hidden border border-[rgba(15,31,92,0.06)]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="font-semibold text-[#0F1F5C] text-[15px] pr-4">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}
                  className="shrink-0 w-8 h-8 rounded-full bg-[rgba(212,160,23,0.12)] flex items-center justify-center text-[#D4A017]">
                  <FaChevronDown className="text-sm" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[#3A4875] text-[15px] leading-[1.8]">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-center bg-gradient-to-br from-[#0F1F5C] to-[#091440] rounded-2xl p-8 md:p-10"
        >
          <h3 className="text-white font-[Playfair_Display,serif] text-xl md:text-2xl mb-2">Still have questions?</h3>
          <p className="text-[rgba(232,235,244,0.65)] text-sm mb-6">Our admissions team is happy to help. Reach out directly.</p>
          <a href="https://wa.me/923325050343?text=Assalamu%20Alaikum!%20I%20have%20a%20question%20about%20admissions."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-7 py-3.5 rounded-full no-underline font-bold text-sm shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(37,211,102,0.5)] transition-all duration-300">
            <FaWhatsapp className="text-lg" />
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
