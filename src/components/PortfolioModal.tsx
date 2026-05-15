import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Maximize,
  Hammer } from
'lucide-react';
interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  location: string;
  area: string;
  scope: string;
  description: string;
  gallery: string[];
}
interface PortfolioModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}
export function PortfolioModal({
  project,
  isOpen,
  onClose
}: PortfolioModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Reset index when project changes
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen, project]);
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, currentIndex]);
  if (!project) return null;
  const nextImage = () =>
  setCurrentIndex((prev) => (prev + 1) % project.gallery.length);
  const prevImage = () =>
  setCurrentIndex(
    (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
  );
  return (
    <AnimatePresence>
      {isOpen &&
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-md p-4 md:p-8">
        
          {/* Close Button */}
          <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal">
          
            <X size={32} strokeWidth={1.5} />
          </button>

          <div className="w-full max-w-7xl h-full max-h-[90vh] flex flex-col lg:flex-row bg-charcoal shadow-2xl overflow-hidden">
            {/* Image Slider Area */}
            <div className="relative w-full lg:w-2/3 h-[50vh] lg:h-full bg-black flex items-center justify-center group">
              <AnimatePresence mode="wait">
                <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                transition={{
                  duration: 0.4
                }}
                className="absolute inset-0">
                
                  <img
                  src={project.gallery[currentIndex]}
                  alt={`${project.name} - Image ${currentIndex + 1}`}
                  className="w-full h-full object-contain" />
                
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              {project.gallery.length > 1 &&
            <>
                  <button
                onClick={prevImage}
                className="absolute left-4 p-3 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-navy">
                
                    <ChevronLeft size={24} />
                  </button>
                  <button
                onClick={nextImage}
                className="absolute right-4 p-3 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-navy">
                
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1.5 rounded-full text-white/80 text-sm tracking-widest">
                    {currentIndex + 1} / {project.gallery.length}
                  </div>
                </>
            }
            </div>

            {/* Project Details Area */}
            <div className="w-full lg:w-1/3 h-full overflow-y-auto p-8 lg:p-12 flex flex-col">
              <div className="mb-8">
                <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-3 block">
                  {project.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
                  {project.name}
                </h2>
                <p className="text-white/70 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6 mt-auto pt-8 border-t border-white/10">
                <div className="flex items-start space-x-4">
                  <MapPin
                  className="text-gold mt-1"
                  size={20}
                  strokeWidth={1.5} />
                
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mb-1">
                      Location
                    </div>
                    <div className="text-white">{project.location}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar
                  className="text-gold mt-1"
                  size={20}
                  strokeWidth={1.5} />
                
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mb-1">
                      Year
                    </div>
                    <div className="text-white">{project.year}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Maximize
                  className="text-gold mt-1"
                  size={20}
                  strokeWidth={1.5} />
                
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mb-1">
                      Area
                    </div>
                    <div className="text-white">{project.area}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Hammer
                  className="text-gold mt-1"
                  size={20}
                  strokeWidth={1.5} />
                
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mb-1">
                      Scope
                    </div>
                    <div className="text-white">{project.scope}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}