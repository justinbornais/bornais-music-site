import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}: SectionHeadingProps) {
  return (
    <motion.div 
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-4 ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      <motion.div 
        className={`w-24 h-1 bg-accent ${centered ? 'mx-auto' : ''} mb-6`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      {subtitle && (
        <p 
          className={`text-lg md:text-xl font-body max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/80' : 'text-primary/70'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
