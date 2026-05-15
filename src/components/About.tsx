import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { STATS } from '../data/content';
export function About() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
                Our Manifesto
              </h2>
              <h3 className="text-3xl md:text-5xl font-display text-navy leading-tight text-balance">
                We don't just build structures; we craft legacies.
              </h3>
              <p className="text-slate text-lg leading-relaxed font-light">
                Atelier Estate represents the pinnacle of architectural
                development and interior mastery. With an unwavering commitment
                to quality, we transform visions into tangible realities,
                blending timeless elegance with modern innovation. Every project
                is a testament to our dedication to the craft.
              </p>
              <div className="pt-4">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=80"
                  alt="Architecture detail"
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-16">
              {STATS.map((stat, idx) =>
              <div key={stat.id} className="relative">
                  {/* Subtle gold hairline */}
                  <div className="absolute -top-6 left-0 w-12 h-[1px] bg-gold"></div>
                  <div className="text-5xl md:text-6xl font-display text-navy mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-slate">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}