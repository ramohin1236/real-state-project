import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicePillar } from './components/ServicePillar';
import { Portfolio } from './components/Portfolio';
import { Booking } from './components/Booking';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { SERVICES } from './data/content';
export function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans selection:bg-gold/30 selection:text-navy">
      <Toaster position="top-center" richColors />

      <Navbar />

      <main>
        <Hero />
        <About />

        <ServicePillar
          eyebrow="PILLAR 01"
          title={SERVICES.development.title}
          description={SERVICES.development.description}
          image={SERVICES.development.image}
          subServices={SERVICES.development.subServices} />
        

        <ServicePillar
          eyebrow="PILLAR 02"
          title={SERVICES.interior.title}
          description={SERVICES.interior.description}
          image={SERVICES.interior.image}
          subServices={SERVICES.interior.subServices}
          reverse={true} />
        

        <Portfolio />
        <Booking />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>);

}