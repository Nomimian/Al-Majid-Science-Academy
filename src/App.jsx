import React from 'react';
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

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Leadership />
      <Testimonials />
      <AdmissionsFAQ />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
