import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { contactInfo } from '../data/navigation';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Get in Touch"
          subtitle="Let's discuss how I can make your event unforgettable"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <motion.a 
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-4 text-primary/80 hover:text-accent transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <FaEnvelope className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-primary/60">Email</p>
                        <p className="font-body">{contactInfo.email}</p>
                      </div>
                    </motion.a>

                    <motion.a 
                      href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                      className="flex items-center gap-4 text-primary/80 hover:text-accent transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <FaPhone className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-primary/60">Phone</p>
                        <p className="font-body">{contactInfo.phone}</p>
                      </div>
                    </motion.a>

                    <div className="flex items-center gap-4 text-primary/80">
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                        <FaMapMarkerAlt className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-primary/60">Location</p>
                        <p className="font-body">{contactInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-6 bg-cream rounded-sm">
                  <p className="text-primary/80 font-body text-sm">
                    <span className="text-accent font-semibold">Quick Response:</span> I typically 
                    respond to inquiries within 24 hours. For urgent requests, please call directly.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Booking Form CTA */}
            <AnimatedSection delay={0.2}>
              <div className="bg-primary rounded-sm p-8 text-white h-full flex flex-col justify-center">
                <h3 className="font-heading text-2xl mb-4">
                  Ready to Book?
                </h3>
                <p className="text-white/80 font-body mb-6">
                  Fill out my booking inquiry form and I'll get back to you with availability 
                  and a personalized quote for your event.
                </p>

                <Button 
                  href={contactInfo.googleFormUrl}
                  variant="primary"
                  className="bg-white text-primary hover:bg-cream mb-4"
                >
                  <span className="flex items-center gap-2">
                    Open Booking Form
                    <FaExternalLinkAlt size={12} />
                  </span>
                </Button>

                <p className="text-white/60 text-sm font-body">
                  The form takes approximately 2-3 minutes to complete and helps me 
                  understand your needs.
                </p>

                {/* Decorative Music Note */}
                <div className="mt-8 text-right">
                  <span className="text-accent/30 text-6xl">♪</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
