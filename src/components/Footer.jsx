import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' }, { label: 'About Us', href: '#about' },
      { label: 'Programs', href: '#programs' }, { label: 'Leadership', href: '#leadership' },
      { label: 'Gallery', href: '#gallery' }, { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Pre-Primary', href: '#programs' }, { label: 'Primary School', href: '#programs' },
      { label: 'Middle School', href: '#programs' }, { label: 'Matriculation', href: '#programs' },
      { label: 'Islamic Studies', href: '#programs' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '0332-5050343', href: 'tel:+923325050343' },
      { label: 'WhatsApp Us', href: 'https://wa.me/923325050343' },
      { label: 'almajidscienceacademy@gmail.com', href: 'mailto:almajidscienceacademy@gmail.com', small: true },
      { label: 'Lahore, Pakistan', href: '#' },
    ],
  },
];

const socials = [
  { icon: FaWhatsapp, href: 'https://wa.me/923325050343', color: '#25D366' },
  { icon: FaPhone, href: 'tel:+923325050343', color: '#4A90D9' },
  { icon: FaEnvelope, href: 'mailto:almajidscienceacademy@gmail.com', color: '#D4A017' },
];

export default function Footer() {
  return (
    <footer className="bg-[#091440] border-t border-[rgba(212,160,23,0.2)]">
      <div className="max-w-6xl mx-auto px-[5%] pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#D4A017] to-[#F0C842] text-[#091440] font-bold text-lg font-[Playfair_Display,serif]">A</div>
              <div>
                <div className="font-[Playfair_Display,serif] text-[#D4A017] font-bold text-lg">Al-Majid</div>
                <div className="text-[rgba(232,235,244,0.5)] text-[11px] tracking-[3px] uppercase">Group of Schools</div>
              </div>
            </div>
            <p className="text-[rgba(232,235,244,0.55)] text-sm leading-[1.8] mb-6 max-w-[280px]">
              Nurturing excellence, building character, and illuminating the path to a brighter future — one student at a time.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, color }, i) => (
                <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center no-underline text-lg transition-all duration-300 hover:bg-white/15"
                  style={{ color }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="text-[#D4A017] text-[13px] font-bold tracking-[2px] uppercase mb-5">{col.title}</h4>
              <ul className="list-none flex flex-col gap-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className={`text-[rgba(232,235,244,0.55)] no-underline hover:text-[#D4A017] transition-colors duration-300 leading-[1.5] ${link.small ? 'text-xs' : 'text-sm'}`}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.07] px-[5%] py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <span className="text-[rgba(232,235,244,0.35)] text-[13px]">
            © {new Date().getFullYear()} Al-Majid Group of Schools & Academy. All rights reserved.
          </span>
          <span className="text-[rgba(232,235,244,0.3)] text-[13px] flex items-center gap-1.5">
            Made with <FaHeart className="text-[#D4A017] text-[11px]" /> in Lahore, Pakistan
          </span>
        </div>
      </div>
    </footer>
  );
}
