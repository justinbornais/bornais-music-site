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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPackages.map((pkg, index) => {
            const options = pkg.options ?? [pkg];

            return (
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

                <div className="flex flex-col flex-1 md:min-h-[420px]">
                  {pkg.options ? (
                    <>
                      <h3 className="text-xl font-heading font-semibold mb-2 text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-white/80 mb-6">
                        {pkg.description}
                      </p>

                      {/* Wedding titles and prices */}
                      <div className="space-y-5">
                        {options.map((option, optionIndex) => (
                          <div
                            key={option.name}
                            className={optionIndex > 0 ? 'border-t border-white/20 pt-5' : ''}
                          >
                            <h4 className="text-xl font-heading font-semibold text-white">
                              {option.name}
                            </h4>
                            <span className="block text-3xl font-heading font-bold text-accent-light mt-1">
                              {option.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Shared wedding details */}
                      <div className="flex-1 mt-6 pt-6 border-t border-white/20">
                        <p className="text-sm text-white/80 mb-4">
                          Both options include:
                        </p>
                        <ul className="space-y-3 mb-6">
                          {pkg.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-white/90"
                            >
                              <FaCheck className="flex-shrink-0 mt-0.5 text-accent-light" size={14} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        href="#contact"
                        variant="primary"
                        className="w-full bg-white text-primary hover:bg-cream"
                      >
                        Book Your Wedding
                      </Button>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-heading font-semibold mb-2 text-primary">
                        {pkg.name}
                      </h3>

                      <div className="mb-4">
                        <span className="text-3xl font-heading font-bold text-accent">
                          {pkg.price}
                        </span>
                      </div>

                      <p className="text-sm text-primary/70 mb-6">
                        {pkg.description}
                      </p>

                      <div className="flex-1 flex items-start">
                        <ul className="space-y-3 mb-4 w-full md:min-h-[120px]">
                          {pkg.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-primary/80"
                            >
                              <FaCheck className="flex-shrink-0 mt-0.5 text-accent" size={14} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button href="#contact" variant="secondary" className="w-full">
                        {pkg.ctaText}
                      </Button>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
            );
          })}
        </div>

        {/* Note */}
        <AnimatedSection delay={0.5}>
          <ul className="mt-10 max-w-2xl mx-auto grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {[
              'A $100 non-refundable deposit is required to officially book your date, applied toward the total cost.',
              'All packages include a consultation to discuss your specific needs.',
              'Travel fees may apply for locations outside the Windsor-Essex region.',
              'Full payment is required at least one week prior to the event date.',
              'Payment is accepted via e-transfer, cheque, or cash.',
              'Custom packages are available upon request.',
            ].map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-primary/60">
                <span className="text-accent flex-shrink-0 mt-0.5">•</span>
                {note}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
