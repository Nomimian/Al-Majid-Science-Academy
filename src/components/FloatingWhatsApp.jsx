import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            className="fixed bottom-24 right-4 md:right-5 z-[998] bg-white rounded-2xl p-5 shadow-[0_10px_50px_rgba(0,0,0,0.2)] w-[280px]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F1F5C] to-[#1B2A6B] flex items-center justify-center text-[#D4A017] font-bold font-[Playfair_Display,serif] text-lg">A</div>
              <div>
                <div className="font-bold text-[#0F1F5C] text-sm">AL-Majid Academy</div>
                <div className="text-[#25D366] text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full inline-block" />
                  Online
                </div>
              </div>
            </div>
            <p className="text-[#3A4875] text-[13px] leading-[1.6] mb-3.5">
              Assalamu Alaikum! 👋 How can we help you? Tap below to chat about admissions or any query.
            </p>
            <a
              href="https://wa.me/923325050343?text=Assalamu%20Alaikum!%20I%20am%20interested%20in%20AL-Majid%20Academy."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl no-underline font-bold text-sm hover:bg-[#20B955] transition-colors duration-200"
            >
              <FaWhatsapp className="text-lg" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 md:right-6 z-[999] w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#20B955] border-none cursor-pointer text-white text-2xl flex items-center justify-center shadow-[0_6px_28px_rgba(37,211,102,0.5)]"
      >
        {open ? <FaTimes className="text-xl" /> : <FaWhatsapp />}
      </motion.button>

      {/* Ping ring */}
      {!open && (
        <div className="fixed bottom-6 right-4 md:right-6 z-[998] w-14 h-14 rounded-full border-2 border-[#25D366] animate-ping-slow pointer-events-none" />
      )}
    </>
  );
}
