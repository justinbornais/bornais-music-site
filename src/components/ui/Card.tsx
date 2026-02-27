import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ 
  children, 
  className = '',
  hover = true
}: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-sm elegant-border card-shadow p-6 md:p-8 ${className}`}
      whileHover={hover ? { 
        y: -8,
        boxShadow: '0 20px 40px rgba(26, 26, 26, 0.1)'
      } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
