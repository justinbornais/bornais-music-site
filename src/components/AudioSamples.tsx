import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa';
import { audioTracks } from '../data/audio';
import { AnimatedSection } from './ui/AnimatedSection';
import { SectionHeading } from './ui/SectionHeading';
import { assetUrl } from '../utils/assets';

export function AudioSamples() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const togglePlay = (trackId: string) => {
    const audio = audioRefs.current[trackId];
    
    // Pause any currently playing track
    const entries = Object.entries(audioRefs.current) as [string, HTMLAudioElement | null][];
    entries.forEach(([id, audioEl]) => {
      if (id !== trackId && audioEl) {
        audioEl.pause();
        audioEl.currentTime = 0;
      }
    });

    if (playingId === trackId) {
      audio?.pause();
      setPlayingId(null);
    } else {
      // Note: In production, these would be real audio files
      // For now, we'll just toggle the state for the UI
      setPlayingId(trackId);
      // audio?.play();
    }
  };

  return (
    <section id="listen" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <SectionHeading 
          title="Listen"
          subtitle="Sample recordings from my repertoire"
          light
        />

        <div className="max-w-3xl mx-auto">
          {audioTracks.map((track, index) => (
            <AnimatedSection key={track.id} delay={index * 0.1}>
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-sm mb-4 bg-white/5 hover:bg-white/10 transition-colors group"
                whileHover={{ x: 4 }}
              >
                {/* Play Button */}
                <motion.button
                  onClick={() => togglePlay(track.id)}
                  className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {playingId === track.id ? (
                    <FaPause className="text-white" size={16} />
                  ) : (
                    <FaPlay className="text-white ml-1" size={16} />
                  )}
                </motion.button>

                {/* Track Info */}
                <div className="flex-grow min-w-0">
                  <h4 className="font-heading text-lg text-white truncate">
                    {track.title}
                  </h4>
                  <p className="text-white/60 text-sm font-body truncate">
                    {track.composer}
                  </p>
                </div>

                {/* Duration */}
                <span className="text-white/40 font-body text-sm flex-shrink-0">
                  {track.duration}
                </span>

                {/* Animated Bars (when playing) */}
                {playingId === track.id && (
                  <div className="flex items-end gap-1 h-6">
                    {[1, 2, 3, 4].map((bar) => (
                      <motion.div
                        key={bar}
                        className="w-1 bg-accent rounded-full"
                        animate={{
                          height: ['8px', '24px', '12px', '20px', '8px'],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: bar * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Hidden Audio Element */}
                <audio
                  ref={(el) => { audioRefs.current[track.id] = el; }}
                  src={track.src ? assetUrl(track.src) : undefined}
                  onEnded={() => setPlayingId(null)}
                />
              </motion.div>
            </AnimatedSection>
          ))}

          {/* Note about samples */}
          <AnimatedSection delay={0.5}>
            <div className="text-center mt-8 p-6 border border-accent/30 rounded-sm">
              <FaMusic className="text-accent mx-auto mb-3" size={24} />
              <p className="text-white/70 font-body text-sm">
                Audio samples coming soon. Contact me to hear my playing in person 
                or request a video recording of specific pieces.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
