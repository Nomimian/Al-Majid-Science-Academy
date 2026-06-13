import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Leadership from './components/Leadership';
import Testimonials from './components/Testimonials';
import AdmissionsFAQ from './components/AdmissionsFAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Main single-page layout (all sections on one scroll)
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Leadership />
      <Testimonials />
      <AdmissionsFAQ />
      <Gallery />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<><About /><Leadership /></>} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<AdmissionsFAQ />} />
        {/* Catch-all: redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}
