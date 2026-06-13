import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const inputClass = "w-full px-4 py-3.5 rounded-xl border border-[rgba(15,31,92,0.15)] text-[15px] text-[#0F1F5C] outline-none bg-[#F8F6F0] focus:border-[#D4A017] transition-colors duration-200 resize-none font-[Inter,sans-serif]";

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Assalamu Alaikum! My name is ${form.name || '[Your Name]'}. ${form.message || 'I am interested in enrolling at Al-Majid Academy.'}`
    );
    window.open(`https://wa.me/923325050343?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="bg-[#F8F6F0] py-20 md:py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-0.5 bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">Reach Us</span>
            <div className="w-10 h-0.5 bg-[#D4A017]" />
          </div>
          <h2 className="text-[#0F1F5C] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Get in Touch</h2>
          <p className="text-[#6B7BAD] text-base md:text-lg max-w-[500px] mx-auto">
            We'd love to hear from you. Reach out for admissions, queries, or just a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <h3 className="font-[Playfair_Display,serif] text-[#0F1F5C] text-2xl md:text-[26px] mb-8">Contact Information</h3>

            <div className="flex flex-col gap-4 mb-10">
              {/* WhatsApp */}
              <a href="https://wa.me/923325050343" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white px-6 py-4 rounded-2xl no-underline font-semibold text-base shadow-[0_6px_24px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(37,211,102,0.45)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div>
                  <div className="text-xs opacity-85 mb-0.5">Chat on WhatsApp</div>
                  <div>0332-5050343</div>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+923325050343"
                className="flex items-center gap-4 bg-white text-[#0F1F5C] px-6 py-4 rounded-2xl no-underline font-semibold text-base shadow-[0_6px_24px_rgba(15,31,92,0.1)] border border-[rgba(15,31,92,0.08)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,31,92,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F1F5C] to-[#1B2A6B] flex items-center justify-center shrink-0">
                  <FaPhone className="text-[#D4A017] text-lg" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7BAD] mb-0.5">Call Us</div>
                  <div>0332-5050343</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:almajidscienceacademy@gmail.com"
                className="flex items-center gap-4 bg-white text-[#0F1F5C] px-6 py-4 rounded-2xl no-underline font-semibold text-[15px] shadow-[0_6px_24px_rgba(15,31,92,0.1)] border border-[rgba(15,31,92,0.08)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,31,92,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C842] flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-[#091440] text-lg" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#6B7BAD] mb-0.5">Email Us</div>
                  <div className="text-sm truncate">almajidscienceacademy@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[#3A4875]">
                <FaMapMarkerAlt className="text-[#D4A017] text-lg shrink-0" />
                <span className="text-[15px]">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-[#3A4875]">
                <FaClock className="text-[#D4A017] text-lg shrink-0" />
                <span className="text-[15px]">Mon – Sat: 7:30 AM – 2:30 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_12px_60px_rgba(15,31,92,0.1)] border border-[rgba(15,31,92,0.06)]">
            <h3 className="font-[Playfair_Display,serif] text-[#0F1F5C] text-2xl mb-2">Send a Message</h3>
            <p className="text-[#6B7BAD] text-sm mb-7">Fill in below and we'll open WhatsApp with your message ready to send.</p>

            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-[#3A4875] text-[13px] font-semibold mb-1.5 tracking-wide">Your Name</label>
                <input type="text" placeholder="e.g. Ahmed Ali" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className="block text-[#3A4875] text-[13px] font-semibold mb-1.5 tracking-wide">Phone Number</label>
                <input type="tel" placeholder="03XX-XXXXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className="block text-[#3A4875] text-[13px] font-semibold mb-1.5 tracking-wide">Your Message</label>
                <textarea placeholder="I'd like to inquire about admissions..." rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={inputClass} />
              </div>

              <button onClick={handleWhatsApp}
                className="bg-gradient-to-r from-[#25D366] to-[#20B955] text-white py-4 rounded-xl border-none cursor-pointer font-bold text-base flex items-center justify-center gap-2.5 shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,0.5)] transition-all duration-300">
                <FaWhatsapp className="text-xl" />
                Send via WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
