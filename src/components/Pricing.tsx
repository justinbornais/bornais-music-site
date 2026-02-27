import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { pricingPackages } from '../data/pricing';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Pricing"
          subtitle="Transparent packages designed for every occasion"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <AnimatedSection key={pkg.id} delay={index * 0.15}>
              <motion.div 
                className={`relative h-full rounded-sm p-8 ${
                  pkg.highlighted 
                    ? 'bg-primary text-white' 
                    : 'bg-white elegant-border'
                }`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Highlighted Badge */}
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-body font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Package Name */}
                <h3 className={`text-xl font-heading font-semibold mb-2 ${
                  pkg.highlighted ? 'text-white' : 'text-primary'
                }`}>
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className={`text-4xl font-heading font-bold ${
                    pkg.highlighted ? 'text-accent-light' : 'text-accent'
                  }`}>
                    {pkg.price}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-sm mb-6 ${
                  pkg.highlighted ? 'text-white/80' : 'text-primary/70'
                }`}>
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li 
                      key={i}
                      className={`flex items-start gap-3 text-sm ${
                        pkg.highlighted ? 'text-white/90' : 'text-primary/80'
                      }`}
                    >
                      <FaCheck className={`flex-shrink-0 mt-0.5 ${
                        pkg.highlighted ? 'text-accent-light' : 'text-accent'
                      }`} size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  href="#contact"
                  variant={pkg.highlighted ? 'primary' : 'secondary'}
                  className={`w-full ${
                    pkg.highlighted 
                      ? 'bg-white text-primary hover:bg-cream' 
                      : ''
                  }`}
                >
                  {pkg.ctaText}
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <AnimatedSection delay={0.5}>
          <p className="text-center text-primary/60 text-sm mt-10 max-w-2xl mx-auto">
            All packages include a consultation to discuss your specific needs. 
            Travel fees may apply for locations outside the Windsor-Essex region. 
            A 25% deposit is required to secure your booking.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
