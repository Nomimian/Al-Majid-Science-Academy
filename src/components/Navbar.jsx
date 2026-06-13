import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoBlue from '../assets/logo-blue.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400
          ${scrolled ? 'py-2 px-[5%] bg-[rgba(9,20,64,0.96)] backdrop-blur-xl border-b border-[rgba(212,160,23,0.25)]' : 'py-3 px-[5%] bg-transparent'}`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <img
            src={logoBlue}
            alt="Al-Majid Academy Logo"
            className={`object-contain rounded-lg transition-all duration-400 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
            style={{ background: 'transparent' }}
          />
          <div>
            <div className="font-[Playfair_Display,serif] text-[#D4A017] font-bold text-[18px] leading-[1.1]">Al-Majid</div>
            <div className="text-[#F8F6F0] font-light text-[11px] tracking-[3px] uppercase">Group of Schools</div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`no-underline font-medium text-sm tracking-wide relative pb-1 transition-colors duration-300
                  ${activeSection === link.href.replace('#', '') ? 'text-[#D4A017]' : 'text-[#E8EBF4] hover:text-[#D4A017]'}`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div layoutId="activeBar" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A017]" />
                )}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="bg-gradient-to-r from-[#D4A017] to-[#F0C842] text-[#091440] px-6 py-2.5 rounded-full font-bold text-sm no-underline shadow-[0_4px_20px_rgba(212,160,23,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,160,23,0.5)] transition-all duration-200 inline-block">
              Enrol Now
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer text-[#D4A017] text-xl p-1"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-[1999] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-xs bg-[rgba(9,20,64,0.97)] backdrop-blur-xl z-[2000] px-8 pt-20 pb-10 flex flex-col gap-2 border-l border-[rgba(212,160,23,0.3)] md:hidden"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 bg-transparent border-none cursor-pointer text-[#D4A017] text-2xl"
              >
                <FaTimes />
              </button>
              {/* Logo in mobile menu */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[rgba(212,160,23,0.2)]">
                <img src={logoBlue} alt="Al-Majid Academy" className="w-10 h-10 object-contain rounded-lg" />
                <div>
                  <div className="font-[Playfair_Display,serif] text-[#D4A017] font-bold text-base">Al-Majid</div>
                  <div className="text-[rgba(248,246,240,0.6)] text-[10px] tracking-[2px] uppercase">Group of Schools</div>
                </div>
              </div>
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#E8EBF4] no-underline font-medium text-lg py-3.5 border-b border-[rgba(212,160,23,0.15)] hover:text-[#D4A017] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 bg-gradient-to-r from-[#D4A017] to-[#F0C842] text-[#091440] py-3.5 rounded-full font-bold text-base no-underline text-center"
              >
                Enrol Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
