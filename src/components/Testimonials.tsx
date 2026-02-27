import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';
import { SectionHeading } from './ui/SectionHeading';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading 
          title="Testimonials"
          subtitle="Kind words from clients and collaborators"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-accent/20 text-6xl md:text-8xl absolute -top-4 left-0 md:left-8" />

          {/* Testimonial Carousel */}
          <div className="min-h-[280px] md:min-h-[240px] flex items-center justify-center px-4 md:px-16">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-center"
              >
                <blockquote className="text-lg md:text-xl lg:text-2xl font-accent text-primary/90 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <p className="font-heading text-lg text-accent font-semibold">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-primary/60 font-body text-sm">
                    {testimonials[currentIndex].event} · {testimonials[currentIndex].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-primary/40 hover:text-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-primary/40 hover:text-accent transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent w-8' 
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
