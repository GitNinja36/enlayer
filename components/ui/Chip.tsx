import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  variant?: 'default' | 'primary';
}

export const Chip: React.FC<ChipProps> = ({
  children,
  active = false,
  variant = 'default',
  className = '',
}) => {
  const isPrimary = active || variant === 'primary';
  const styles = isPrimary
    ? 'bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 text-primary shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-glow-soft'
    : 'glass-panel text-slate transition-all duration-300 hover:border-primary/40 hover:text-primary';

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${styles} ${className}`}
    >
      {children}
    </span>
  );
};
