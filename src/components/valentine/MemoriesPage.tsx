import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FloatingHearts from './FloatingHearts';
import { useSound } from '../../hooks/useSound';

interface MemoriesPageProps {
  onComplete: () => void;
}

const recuerdos = [
  { id: 1, titulo: 'Un momento especial', descripcion: 'Un recuerdo que merece quedarse entre nosotros.' },
  { id: 2, titulo: 'Una sonrisa', descripcion: 'Los pequeños instantes también se vuelven inolvidables.' },
  { id: 3, titulo: 'Un día compartido', descripcion: 'Cada día contigo tiene algo que celebrar.' },
  { id: 4, titulo: 'Una mirada', descripcion: 'Hay recuerdos que no necesitan más explicación.' },
  { id: 5, titulo: 'Nuestro recuerdo', descripcion: 'Un espacio reservado para lo que más valoramos.' },
];

const MemoryCard = ({ recuerdo, index }: { recuerdo: (typeof recuerdos)[number]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.article
      ref={ref}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 py-24`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="w-full md:w-3/5">
        <motion.div
          className="aspect-[4/3] overflow-hidden rounded-3xl border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/placeholder-recuerdo.svg" alt={`Marcador para ${recuerdo.titulo}`} className="h-full w-full object-cover" />
        </motion.div>
      </div>

      <div className="w-full space-y-4 text-center md:w-2/5 md:text-left">
        <motion.h2
          className="text-4xl md:text-5xl font-serif-italic text-primary"
          initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {recuerdo.titulo}
        </motion.h2>
        <motion.p
          className="text-xl font-light leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {recuerdo.descripcion}
        </motion.p>
      </div>
    </motion.article>
  );
};

const MemoriesPage = ({ onComplete }: MemoriesPageProps) => {
  const { playSound } = useSound();

  return (
    <div className="relative min-h-screen overflow-x-hidden gradient-romantic">
      <FloatingHearts count={15} />
      <header className="mx-auto max-w-4xl space-y-8 px-6 pb-16 pt-32 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-heavy tracking-tight text-primary">Mi San Valentín</h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary/20" />
        </div>
        <p className="px-4 text-xl md:text-2xl font-serif-italic leading-relaxed text-muted-foreground">
          Cada momento compartido tiene un lugar especial en mi corazón.
        </p>
        <div className="pt-12 text-primary/30">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em]">Revive nuestros momentos</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto" aria-hidden="true"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 pb-40">
        {recuerdos.map((recuerdo, index) => <MemoryCard key={recuerdo.id} recuerdo={recuerdo} index={index} />)}
      </main>

      <section className="border-t border-white/50 bg-white/30 py-32 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-2xl space-y-6 px-6">
          <p className="text-2xl md:text-3xl font-serif-italic text-foreground">Cada momento contigo es un regalo.</p>
          <p className="mb-10 text-muted-foreground">Y aún tengo algo más especial para ti.</p>
          <motion.button
            className="btn-romantic mx-auto flex items-center gap-3 px-10 py-5 text-xl shadow-romantic-lg"
            onClick={() => { playSound('buttonClick'); playSound('sparkle'); onComplete(); }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            <span>Continuar a las flores</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default MemoriesPage;
