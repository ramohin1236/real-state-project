import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Portfolio',
    href: '#portfolio'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-white font-display text-2xl tracking-widest uppercase">
          
          Atelier <span className="text-gold">&middot;</span> Estate
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#book"
            className="border border-gold text-gold hover:bg-gold hover:text-navy px-6 py-2.5 text-sm uppercase tracking-widest transition-all duration-300">
            
            Book Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-navy border-t border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[400px] py-6' : 'max-h-0 py-0'}`}>
        
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-gold text-sm uppercase tracking-widest transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#book"
            onClick={() => setMobileMenuOpen(false)}
            className="border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest mt-4">
            
            Book Consultation
          </a>
        </nav>
      </div>
    </header>);

}