import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';
export function Testimonials() {
  // Duplicate the array so the marquee loops seamlessly without a visible jump
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <ScrollReveal>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-[1px] bg-gold"></span>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
                Testimonials
              </span>
              <span className="w-8 h-[1px] bg-gold"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-3">
              Client Perspectives
            </h2>
            <p className="text-white/60 font-light text-sm md:text-base max-w-xl mx-auto">
              Voices from the homes, retreats, and headquarters we&rsquo;ve had
              the privilege to shape.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinity marquee */}
      <div className="relative marquee-mask group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, idx) =>
          <article
            key={`${t.id}-${idx}`}
            className="shrink-0 w-[300px] sm:w-[380px] md:w-[440px] mx-3 sm:mx-4 bg-navy/50 border border-white/5 p-7 sm:p-9 relative flex flex-col">
            
              <Quote
              className="text-gold/20 absolute top-5 right-5"
              size={40}
              strokeWidth={1.5} />
            
              <p className="text-base sm:text-lg font-light leading-relaxed mb-8 relative z-10 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <div className="font-display text-lg sm:text-xl text-white mb-1">
                  {t.name}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gold mb-1">
                  {t.role}
                </div>
                <div className="text-sm text-white/50">{t.project}</div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}