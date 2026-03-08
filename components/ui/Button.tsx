import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'white';
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-gradient-cta text-white rounded-xl shadow-md shadow-orange-500/20 px-6 py-3 text-base border border-transparent btn-shimmer hover:shadow-glow-primary hover:shadow-lg",
    secondary: "bg-transparent border border-border text-graphite rounded-xl px-6 py-3 text-base hover:border-primary/50 hover:text-primary hover:shadow-glow-soft",
    text: "bg-transparent text-slate hover:text-primary px-4 py-2",
    white: "glass-panel text-graphite hover:bg-white/80 rounded-xl shadow-sm px-6 py-3 text-base hover:shadow-glow-soft"
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
