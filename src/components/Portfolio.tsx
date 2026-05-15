import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/content';
import { PortfolioModal } from './PortfolioModal';
export function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = ['All', 'Development', 'Interior', 'Restoration'];
  const filteredProjects =
  filter === 'All' ?
  PORTFOLIO :
  PORTFOLIO.filter((p) => p.category === filter);
  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white text-navy">
      {/* Wider container — Pinterest uses near-full-width for density */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14 px-2">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-gold text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold">
              Selected Works
            </span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-navy leading-tight mb-3">
            Our Portfolio
          </h2>
          <p className="text-slate font-light text-sm md:text-base max-w-xl">
            A curated collection of architecture, interiors and restorations
            from across our practice.
          </p>
        </div>

        {/* Pinterest-style filter tabs */}
        <div className="sticky top-[72px] z-20 bg-white/95 backdrop-blur-sm -mx-3 sm:-mx-6 md:-mx-10 px-3 sm:px-6 md:px-10 py-3 mb-6 border-b border-slate/10">
          <div className="flex items-center justify-start sm:justify-center gap-1 sm:gap-2 overflow-x-auto hide-scrollbar">
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative shrink-0 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${active ? 'bg-navy text-white' : 'text-slate hover:bg-ivory'}`}>
                  
                  {cat}
                </button>);

            })}
          </div>
        </div>

        {/* Masonry — CSS columns with tight Pinterest gaps */}
        <div
          className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2 sm:gap-3"
          style={{
            columnFill: 'balance'
          }}>
          
          {filteredProjects.map((project, idx) =>
          <motion.div
            key={`${filter}-${project.id}`}
            initial={{
              opacity: 0,
              y: 16
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.45,
              delay: Math.min(idx * 0.02, 0.4),
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="break-inside-avoid mb-2 sm:mb-3">
            
              <button
              onClick={() => openModal(project)}
              className="group relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-ivory/50 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-white"
              aria-label={`View ${project.name}`}>
              
                <img
                src={project.coverImage}
                alt={project.name}
                className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy" />
              

                {/* Pinterest-style subtle hover overlay */}
                <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bottom-left label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-left translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-gold text-[10px] uppercase tracking-widest font-semibold block mb-0.5">
                    {project.category}
                  </span>
                  <h3 className="text-white font-display text-sm sm:text-base lg:text-lg leading-tight line-clamp-2">
                    {project.name}
                  </h3>
                </div>

                {/* Top-right "save" style chip — Pinterest cue */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gold text-navy text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                    View
                  </span>
                </div>
              </button>
            </motion.div>
          )}
        </div>

        {/* Count footer */}
        <div className="text-center mt-12 text-xs uppercase tracking-widest text-slate/60">
          Showing {filteredProjects.length}{' '}
          {filter === 'All' ? 'projects' : `${filter.toLowerCase()} projects`}
        </div>
      </div>

      <PortfolioModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} />
      
    </section>);

}