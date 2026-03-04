import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const baseNotes = [
  { char: '♪', size: 'text-2xl', delayOffset: 0, duration: 8 },
  { char: '♫', size: 'text-3xl', delayOffset: 2, duration: 10 },
  { char: '♪', size: 'text-xl', delayOffset: 4, duration: 7 },
  { char: '♫', size: 'text-2xl', delayOffset: 1, duration: 9 },
  { char: '♪', size: 'text-3xl', delayOffset: 3, duration: 11 },
  { char: '♫', size: 'text-xl', delayOffset: 5, duration: 8 },
];

type Note = {
  char: string;
  size: string;
  x: string;
  delay: number;
  duration: number;
};

export function FloatingNotes({ multiplier = 4 }: { multiplier?: number }) {
  const [notes, setNotes] = useState<Note[]>([]);

  // Easter-egg override state and timer
  const [overrideActive, setOverrideActive] = useState(false);
  const timerRef = useRef<number | null>(null);
  const keyBufferRef = useRef('');
  const sequence = 'music';

  useEffect(() => {
    const effectiveMultiplier = overrideActive ? 100 : multiplier;
    const total = baseNotes.length * Math.max(1, Math.floor(effectiveMultiplier));
    const generated: Note[] = [];

    for (let i = 0; i < total; i++) {
      const template = baseNotes[i % baseNotes.length];

      // randomize horizontal position between 5% and 90%
      const x = `${Math.floor(Math.random() * 86) + 5}%`;

      // small random variation for delay and duration for a natural effect
      const delay = template.delayOffset + Math.random() * 2;
      const duration = Math.max(4, template.duration + (Math.random() * 3 - 1.5));

      generated.push({
        char: template.char,
        size: template.size,
        x,
        delay,
        duration,
      });
    }

    setNotes(generated);
  }, [multiplier, overrideActive]);

  // Keyboard listener to detect sequence: M U S I C
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const k = e.key.toLowerCase();
      // Only consider single-character keys (letters)
      if (k.length !== 1) return;

      keyBufferRef.current = (keyBufferRef.current + k).slice(-sequence.length);

      if (keyBufferRef.current === sequence) {
        // Activate override
        setOverrideActive(true);
        if (timerRef.current) window.clearTimeout(timerRef.current);
        // Deactivate after 10 seconds
        timerRef.current = window.setTimeout(() => {
          setOverrideActive(false);
          timerRef.current = null;
        }, 10000) as unknown as number;
        // clear buffer so repeated typing requires retyping sequence
        keyBufferRef.current = '';
      }
    }

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {notes.map((note, index) => (
        <motion.span
          key={index}
          className={`absolute ${note.size} text-accent/20`}
          style={{ left: note.x }}
          initial={{ y: '100vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-100px',
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: note.duration,
            delay: note.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {note.char}
        </motion.span>
      ))}
    </div>
  );
}
