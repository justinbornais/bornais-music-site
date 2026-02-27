import { motion } from 'framer-motion';
import { services } from '../data/services';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Services"
          subtitle="Professional piano and organ performances for life's most meaningful moments"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Card className="h-full text-center group">
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-cream flex items-center justify-center text-accent"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: '#D4AF37',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon 
                    size={28} 
                    className="transition-colors group-hover:text-white" 
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-primary/70 font-body text-sm mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li 
                      key={i}
                      className="text-sm text-primary/60 flex items-center justify-center gap-2"
                    >
                      <span className="text-accent">♪</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
