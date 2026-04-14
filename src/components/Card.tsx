import React from 'react';
import { cn } from '../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("glass-card overflow-hidden", className)}
        whileHover={hoverEffect ? { y: -5 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";
