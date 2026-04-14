import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variants: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
  secondary: "bg-surface-border text-white hover:bg-surface-border/80",
  outline: "border border-surface-border bg-transparent hover:bg-surface/50 text-text-main",
  ghost: "bg-transparent hover:bg-surface-border/50 text-text-main",
};

const sizes: Record<string, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & any>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant as string] || variants.primary, sizes[size as string] || sizes.md, className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
