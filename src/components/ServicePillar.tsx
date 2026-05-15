import React, { lazy, Component } from 'react';
import { ScrollReveal } from './ScrollReveal';
import * as Icons from 'lucide-react';
interface SubService {
  title: string;
  desc: string;
  icon: string;
}
interface ServicePillarProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  subServices: SubService[];
  reverse?: boolean;
}
export function ServicePillar({
  eyebrow,
  title,
  description,
  image,
  subServices,
  reverse = false
}: ServicePillarProps) {
  return (
    <section
      id="services"
      className={`py-24 md:py-32 ${reverse ? 'bg-white' : 'bg-ivory'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <ScrollReveal>
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-12 h-[1px] bg-gold"></span>
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
                  {eyebrow}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display text-navy leading-tight mb-6">
                {title}
              </h2>
              <p className="text-slate text-lg leading-relaxed font-light mb-12">
                {description}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {subServices.map((service, idx) => {
                // Dynamically render icon
                const IconComponent =
                (Icons as any)[service.icon] || Icons.CheckCircle;
                return (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="group">
                      <div className="mb-4 text-navy group-hover:text-gold transition-colors duration-300">
                        <IconComponent size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-lg font-display text-navy mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-slate font-light leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </ScrollReveal>);

              })}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal direction={reverse ? 'left' : 'right'}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <div className="absolute inset-0 bg-navy/10 z-10 mix-blend-multiply"></div>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  loading="lazy" />
                
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>);

}