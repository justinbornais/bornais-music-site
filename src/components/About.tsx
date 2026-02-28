import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionHeading } from './ui/SectionHeading';
import { assetUrl } from '../utils/assets';

export function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-accent/30 rounded-sm -z-10" />
              <div className="absolute -inset-8 border border-accent/10 rounded-sm -z-20" />
              
              <motion.div
                className="relative overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={assetUrl('/images/2021-piano-portrait.jpg')} 
                  alt="Justin Bornais at the piano"
                  className="w-full h-auto object-cover"
                />
                {/* Gold Accent Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent/40 to-transparent" />
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <SectionHeading 
              title="About Me"
              subtitle="A lifelong passion for music"
              centered={false}
            />

            <AnimatedSection delay={0.2}>
              <div className="space-y-6 font-body text-primary/80 leading-relaxed">
                <p className="text-lg">
                  My name is <span className="text-accent font-semibold">Justin Bornais</span>, 
                  and music has been my greatest passion since I began playing instruments in 2010. 
                  While I am proficient in guitar and can dabble with the trumpet, and violin, my heart 
                  belongs to the piano and organ.
                </p>

                <p>
                  Over the years, I have had the privilege of bringing music to life at diverse 
                  venues and occasions. From weekly performances at Fleur de Lis restaurant in 
                  Amherstburg to providing music at St. John the Baptist Parish and Our Lady of 
                  the Assumption Catholic Church in Windsor, each performance has deepened my 
                  love for sharing music with others.
                </p>

                <p>
                  I believe that live music transforms ordinary moments into extraordinary memories. 
                  Whether it's the tender notes of a wedding processional, the comforting melodies 
                  at a memorial service, or the joyful ambiance at a celebration, I am dedicated 
                  to creating the perfect musical atmosphere for your special occasion.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-accent/20">
                  <div className="text-center">
                    <span className="block text-3xl md:text-4xl font-heading text-accent font-bold">15+</span>
                    <span className="text-sm text-primary/60">Years Playing</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl md:text-4xl font-heading text-accent font-bold">100+</span>
                    <span className="text-sm text-primary/60">Events</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl md:text-4xl font-heading text-accent font-bold">5</span>
                    <span className="text-sm text-primary/60">Instruments</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
