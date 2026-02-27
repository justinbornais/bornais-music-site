import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { galleryItems } from '../data/gallery';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionHeading } from './ui/SectionHeading';
import { assetUrl } from '../utils/assets';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };
  
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading 
          title="Gallery"
          subtitle="Capturing moments from performances and events"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.1}>
              <motion.button
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={assetUrl(item.src)}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/400x400/FDF8F0/D4AF37?text=♪';
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                    ♪
                  </span>
                </div>
                {/* Caption */}
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-body">{item.caption}</p>
                  </div>
                )}
              </motion.button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-accent transition-colors p-2"
              aria-label="Close lightbox"
            >
              <FaTimes size={24} />
            </button>

            {/* Navigation */}
            <button 
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 text-white/80 hover:text-accent transition-colors p-2"
              aria-label="Previous image"
            >
              <FaChevronLeft size={32} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 text-white/80 hover:text-accent transition-colors p-2"
              aria-label="Next image"
            >
              <FaChevronRight size={32} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh]"
            >
              <img 
                src={assetUrl(galleryItems[selectedIndex].src)}
                alt={galleryItems[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-sm"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/800x600/FDF8F0/D4AF37?text=♪';
                }}
              />
              {galleryItems[selectedIndex].caption && (
                <p className="text-white text-center mt-4 font-body">
                  {galleryItems[selectedIndex].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
