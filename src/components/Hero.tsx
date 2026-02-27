import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { FloatingNotes } from './FloatingNotes';
import { cssUrl } from '../utils/assets';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: cssUrl('/images/piano-portrait.jpg'),
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
      </div>

      {/* Floating Music Notes */}
      <FloatingNotes />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative Line */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent text-2xl">♪</span>
            <span className="w-12 h-px bg-accent" />
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Justin Bornais
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-accent text-accent-light mb-2 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Pianist · Organist · Performer
          </motion.p>

          {/* Subtitle */}
          <motion.p 
            className="text-base md:text-lg font-body text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Creating unforgettable musical moments for weddings, funerals, 
            church services, and special occasions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button href="#contact" variant="primary">
              Book Your Event
            </Button>
            <Button href="#listen" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">
              Listen Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
        }}
      >
        <a 
          href="#about" 
          className="text-white/60 hover:text-accent transition-colors"
          aria-label="Scroll to about section"
        >
          <svg 
            className="w-6 h-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 40"
          >
            <rect x="1" y="1" width="22" height="38" rx="11" strokeWidth="2" />
            <motion.circle 
              cx="12" 
              cy="12" 
              r="4" 
              fill="currentColor"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
