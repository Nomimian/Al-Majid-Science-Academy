import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const photos = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', alt: 'Classroom learning', label: 'Modern Classrooms' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', alt: 'Students studying', label: 'Student Excellence' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', alt: 'Group work', label: 'Collaborative Learning' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80', alt: 'Library', label: 'Resource Library' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'Students with teacher', label: 'Expert Faculty' },
  { src: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&q=80', alt: 'Science lab', label: 'Science Labs' },
  { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80', alt: 'Students outdoor', label: 'Campus Life' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80', alt: 'Award ceremony', label: 'Celebrations' },
];

export default function Gallery() {
  const [ref, inView] = useInView(0.1);
  const [lightbox, setLightbox] = useState(null);

  const prev = (e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); };
  const next = (e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); };

  // keyboard nav
  React.useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') setLightbox(l => (l - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') setLightbox(l => (l + 1) % photos.length);
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  return (
    <section id="gallery" ref={ref} className="bg-gradient-to-b from-[#0F1F5C] to-[#091440] py-20 md:py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[12px] font-bold tracking-[3px] uppercase">Campus Life</span>
            <div className="w-10 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Life at AL-Majid</h2>
          <p className="text-[rgba(232,235,244,0.6)] text-base md:text-lg max-w-[500px] mx-auto">
            A glimpse into the vibrant, enriching environment we've built for our students.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onClick={() => setLightbox(i)}
              className={`rounded-xl md:rounded-2xl overflow-hidden cursor-pointer relative group
                ${i === 0 ? 'col-span-2 row-span-2' : 'col-span-1'}
                ${i === 0 ? 'aspect-square md:aspect-auto' : 'aspect-[4/3]'}`}
              style={i === 0 ? { gridColumn: 'span 2', gridRow: 'span 2' } : {}}
            >
              <img
                src={photo.src} alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,20,64,0.75)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm font-[Playfair_Display,serif]">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          className="text-center mt-6 text-[rgba(232,235,244,0.4)] text-xs italic">
          * Placeholder images — your school photos will replace these.
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[9999] bg-[rgba(9,20,64,0.95)] flex items-center justify-center p-5"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 bg-transparent border-none cursor-pointer text-[#D4A017] text-3xl">
              <FaTimes />
            </button>
            <button onClick={prev} className="absolute left-4 md:left-5 bg-[rgba(212,160,23,0.2)] border border-[rgba(212,160,23,0.4)] text-[#D4A017] w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer text-lg flex items-center justify-center hover:bg-[rgba(212,160,23,0.35)] transition-colors">
              <FaChevronLeft />
            </button>
            <motion.img
              key={lightbox} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}
              src={photos[lightbox].src.replace('w=600', 'w=1200')} alt={photos[lightbox].alt}
              onClick={e => e.stopPropagation()}
              className="max-w-[85vw] max-h-[85vh] rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            />
            <button onClick={next} className="absolute right-4 md:right-5 bg-[rgba(212,160,23,0.2)] border border-[rgba(212,160,23,0.4)] text-[#D4A017] w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer text-lg flex items-center justify-center hover:bg-[rgba(212,160,23,0.35)] transition-colors">
              <FaChevronRight />
            </button>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightbox + 1} / {photos.length} — {photos[lightbox].label}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
