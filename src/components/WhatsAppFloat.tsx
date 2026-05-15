import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.9
          }}
          className="mb-4 bg-white rounded-lg shadow-2xl overflow-hidden w-72 border border-slate/10">
          
            <div className="bg-navy p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2 text-white">
                <MessageCircle size={20} />
                <span className="font-medium text-sm">
                  Atelier Estate Support
                </span>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white">
              
                <X size={18} />
              </button>
            </div>
            <div className="p-4 bg-ivory/50">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-slate mb-4 inline-block">
                Hello! How can we assist you with your project today?
              </div>
              <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white text-center py-3 rounded-md text-sm font-medium hover:bg-[#1ebd5c] transition-colors">
              
                Start Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform relative group"
        aria-label="Chat on WhatsApp">
        
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <MessageCircle size={28} />

        {/* Tooltip */}
        {!isOpen &&
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-charcoal text-white text-xs px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with us
          </span>
        }
      </button>
    </div>);

}