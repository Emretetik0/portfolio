import React from 'react';
import { cn } from '../lib/utils';

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20", className)}>
      {children}
    </span>
  );
};
