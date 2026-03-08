import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cardHover, fadeInUp } from '../../utils/motion';

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  noHover?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  noHover = false,
  ...props
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial={noHover ? undefined : 'rest'}
      whileHover={noHover ? undefined : 'hover'}
      animate={noHover ? undefined : 'rest'}
      className={`glass-card rounded-3xl p-6 md:p-8 shadow-soft transition-all duration-400 ease-out relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Gradient top stripe */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <motion.div variants={noHover ? {} : cardHover} className="h-full w-full rounded-3xl">
        {children}
      </motion.div>
    </motion.div>
  );
};
