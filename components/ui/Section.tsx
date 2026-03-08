import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'white' | 'deep' | 'gradient' | 'mesh' | 'glass';
  gradientBorder?: 'top' | 'bottom' | 'none';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'default',
  gradientBorder = 'none',
}) => {
  const bgClass = {
    default: 'bg-background',
    white: 'bg-white',
    deep: 'bg-deep text-white',
    gradient: 'bg-gradient-to-b from-orange-50/40 via-background to-background bg-gradient-radial-warm',
    mesh: 'bg-background bg-gradient-mesh',
    glass: 'glass-panel',
  }[background];

  const borderClass =
    gradientBorder === 'top'
      ? 'relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent'
      : gradientBorder === 'bottom'
        ? 'relative before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent'
        : '';

  return (
    <section id={id} className={`py-14 md:py-24 ${bgClass} ${borderClass} ${className}`}>
      {children}
    </section>
  );
};
