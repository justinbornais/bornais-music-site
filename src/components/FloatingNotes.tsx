import { motion } from 'framer-motion';

const notes = [
  { char: '♪', size: 'text-2xl', x: '10%', delay: 0, duration: 8 },
  { char: '♫', size: 'text-3xl', x: '25%', delay: 2, duration: 10 },
  { char: '♪', size: 'text-xl', x: '40%', delay: 4, duration: 7 },
  { char: '♫', size: 'text-2xl', x: '60%', delay: 1, duration: 9 },
  { char: '♪', size: 'text-3xl', x: '75%', delay: 3, duration: 11 },
  { char: '♫', size: 'text-xl', x: '90%', delay: 5, duration: 8 },
];

export function FloatingNotes() {
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
