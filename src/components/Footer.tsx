import React from 'react';
export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="text-white font-display text-2xl tracking-widest uppercase block mb-6">
              
              Atelier <span className="text-gold">&middot;</span> Estate
            </a>
            <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              Shaping skylines and restoring heritage with uncompromising
              quality and visionary design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map(
                (link) =>
                <li key={link}>
                    <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-white transition-colors text-sm">
                    
                      {link}
                    </a>
                  </li>

              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
              'Real Estate Development',
              'Interior Design',
              'Heritage Restoration',
              'Project Management'].
              map((service) =>
              <li key={service}>
                  <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm">
                  
                    {service}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">
              Newsletter
            </h4>
            <p className="text-white/60 font-light text-sm mb-4">
              Subscribe to receive updates on our latest projects and
              architectural insights.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 px-4 py-2 w-full text-sm focus:outline-none focus:border-gold text-white" />
              
              <button className="bg-gold text-navy px-4 py-2 text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Atelier Estate. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}