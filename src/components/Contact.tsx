import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully. We will be in touch soon.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <ScrollReveal>
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-12 h-[1px] bg-gold"></span>
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display text-navy mb-8">
                Let's discuss your next project.
              </h2>

              <div className="space-y-8 mt-12">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white rounded-full text-navy shadow-sm">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-navy mb-2">
                      Headquarters
                    </h4>
                    <p className="text-slate font-light">
                      1200 Architecture Blvd, Suite 400
                      <br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white rounded-full text-navy shadow-sm">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-navy mb-2">
                      Phone
                    </h4>
                    <p className="text-slate font-light">
                      +1 (310) 555-0198
                      <br />
                      +1 (310) 555-0199
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white rounded-full text-navy shadow-sm">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-navy mb-2">
                      Email
                    </h4>
                    <p className="text-slate font-light">
                      inquiries@atelierestate.com
                      <br />
                      careers@atelierestate.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white rounded-full text-navy shadow-sm">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-navy mb-2">
                      Hours
                    </h4>
                    <p className="text-slate font-light">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 md:p-12 shadow-sm border border-slate/5">
              <h3 className="font-display text-2xl text-navy mb-8">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-0 py-3 bg-transparent border-b border-slate/20 focus:border-gold outline-none transition-colors placeholder:text-slate/50 rounded-none" />
                  
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-0 py-3 bg-transparent border-b border-slate/20 focus:border-gold outline-none transition-colors placeholder:text-slate/50 rounded-none" />
                  
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Subject"
                    className="w-full px-0 py-3 bg-transparent border-b border-slate/20 focus:border-gold outline-none transition-colors placeholder:text-slate/50 rounded-none" />
                  
                </div>
                <div>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-0 py-3 bg-transparent border-b border-slate/20 focus:border-gold outline-none transition-colors placeholder:text-slate/50 resize-none rounded-none">
                  </textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-navy text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-colors duration-300 disabled:opacity-70">
                  
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}