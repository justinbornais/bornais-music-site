import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqCategories } from '../data/faq';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionHeading } from './ui/SectionHeading';

export function FAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setOpenIndex(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const activeItems = faqCategories[activeTab].items;

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about my services"
        />

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-8 mb-8 border-b border-accent/25">
            {faqCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`relative pb-3 font-heading tracking-wide transition-colors ${
                  activeTab === index
                    ? 'text-primary'
                    : 'text-primary/60 hover:text-primary'
                }`}
              >
                {category.label}
                {activeTab === index && (
                  <motion.div
                    layoutId="faq-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Questions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeItems.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.03} viewportMargin="0px">
                  <div className="mb-4">
                    <motion.button
                      onClick={() => toggleQuestion(index)}
                      className={`w-full text-left p-5 rounded-sm flex items-center justify-between gap-4 transition-colors ${
                        openIndex === index
                          ? 'bg-primary text-white'
                          : 'bg-white hover:bg-white/80'
                      }`}
                      whileHover={{ x: openIndex === index ? 0 : 4 }}
                    >
                      <span className="font-heading text-lg">
                        {item.question}
                      </span>
                      <span className={`flex-shrink-0 ${
                        openIndex === index ? 'text-accent-light' : 'text-accent'
                      }`}>
                        {openIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
                      </span>
                    </motion.button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 bg-white border-x border-b border-accent/20 rounded-b-sm">
                            <p className="text-primary/80 font-body leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
