import { Variants } from 'framer-motion';

export const MOTION_CONFIG = {
  duration: 0.55,
  stagger: 0.09,
  ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number], // cubic-bezier for "quiet confidence"
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_CONFIG.duration,
      ease: MOTION_CONFIG.ease,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_CONFIG.stagger,
      delayChildren: 0.1,
    },
  },
};

export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    borderColor: 'rgba(229, 231, 235, 1)',
  },
  hover: {
    y: -6,
    scale: 1.01,
    boxShadow: '0 20px 60px -15px rgba(255, 122, 0, 0.15), 0 4px 20px rgba(0, 0, 0, 0.06)',
    borderColor: 'rgba(255, 122, 0, 0.3)',
    transition: { duration: 0.4, ease: MOTION_CONFIG.ease },
  },
};

export const glassCardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.08), 0 0 20px rgba(255, 122, 0, 0.1)',
    borderColor: 'rgba(255, 122, 0, 0.2)',
    transition: { duration: 0.4, ease: MOTION_CONFIG.ease },
  },
};

export const staggerListItems: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};
