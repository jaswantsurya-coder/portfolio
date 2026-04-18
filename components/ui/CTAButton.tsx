import React from 'react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  className = ""
}) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark border-none",
    secondary: "bg-transparent text-primary border-2 border-primary hover:bg-primary/10",
    ghost: "bg-transparent text-text-muted hover:bg-border border-none",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 active:scale-95 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
