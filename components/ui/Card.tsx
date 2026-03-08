import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false, glowOnHover = false, ...props }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? {
        y: -6,
        boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08), 0 0 20px rgba(255,122,0,0.08)',
        borderColor: 'rgba(255, 122, 0, 0.2)',
      } : undefined}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className={`glass-card rounded-3xl p-6 md:p-8 shadow-soft transition-all duration-400 ease-out ${glowOnHover ? 'hover:shadow-glow-soft' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
