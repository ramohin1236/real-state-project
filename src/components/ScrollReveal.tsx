import React from 'react';
import { motion } from 'framer-motion';
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8
}: ScrollRevealProps) {
  const directions = {
    up: {
      y: 40,
      x: 0
    },
    down: {
      y: -40,
      x: 0
    },
    left: {
      x: 40,
      y: 0
    },
    right: {
      x: -40,
      y: 0
    },
    none: {
      x: 0,
      y: 0
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] // custom ease-out
      }}
      className={className}>
      
      {children}
    </motion.div>);

}