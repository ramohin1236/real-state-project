import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/content';
export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () =>
  setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () =>
  setCurrentSlide(
    (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
  );
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-navy">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{
            opacity: 0,
            scale: 1.05
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut'
          }}
          className="absolute inset-0">
          
          <div className="absolute inset-0 bg-navy/40 z-10" />{' '}
          {/* Dark overlay */}
          <img
            src={HERO_SLIDES[currentSlide].image}
            alt="Architecture"
            className="w-full h-full object-cover" />
          
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -30
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-display leading-tight mb-6">
                {HERO_SLIDES[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-xl">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.8
            }}
            className="flex flex-col sm:flex-row gap-4">
            
            <a
              href="#book"
              className="bg-gold text-navy px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors text-center">
              
              Book a Consultation
            </a>
            <a
              href="#portfolio"
              className="border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white/10 transition-colors text-center">
              
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Dots */}
          <div className="flex space-x-3">
            {HERO_SLIDES.map((_, idx) =>
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-gold' : 'w-6 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${idx + 1}`} />

            )}
          </div>

          {/* Counter & Arrows */}
          <div className="flex items-center space-x-6">
            <span className="text-white/60 font-display text-lg">
              <span className="text-white">0{currentSlide + 1}</span> / 0
              {HERO_SLIDES.length}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all rounded-full"
                aria-label="Previous slide">
                
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all rounded-full"
                aria-label="Next slide">
                
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}