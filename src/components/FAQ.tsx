import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqItems } from '../data/faq';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionHeading } from './ui/SectionHeading';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about my services"
        />

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.05}>
              <div className="mb-4">
                <motion.button
                  onClick={() => toggleQuestion(item.id)}
                  className={`w-full text-left p-5 rounded-sm flex items-center justify-between gap-4 transition-colors ${
                    openId === item.id 
                      ? 'bg-primary text-white' 
                      : 'bg-white hover:bg-white/80'
                  }`}
                  whileHover={{ x: openId === item.id ? 0 : 4 }}
                >
                  <span className="font-heading text-lg">
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 ${
                    openId === item.id ? 'text-accent-light' : 'text-accent'
                  }`}>
                    {openId === item.id ? <FaMinus size={16} /> : <FaPlus size={16} />}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-white border-x border-b border-accent/20 rounded-b-sm">
                        <p className="text-primary/80 font-body leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
