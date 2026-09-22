import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingHearts from '@/components/valentine/FloatingHearts';
import { useSound } from '@/hooks/useSound';

const features = [
  {
    id: 'photo-gallery',
    title: 'Galería de fotos',
    description: 'Sube y revive juntos nuestros hermosos recuerdos',
    icon: '📸',
    path: '/photo-gallery',
  },
  {
    id: 'countdown',
    title: 'Cuenta regresiva',
    description: 'Cuenta los días para nuestros momentos especiales',
    icon: '⏰',
    path: '/countdown',
  },
  {
    id: 'love-letter',
    title: 'Creador de cartas de amor',
    description: 'Expresa tu corazón con hermosas cartas',
    icon: '💌',
    path: '/love-letter',
  },
  {
    id: 'music',
    title: 'Lista de música',
    description: 'Creemos juntos nuestra lista de música romántica',
    icon: '🎵',
    path: '/music',
  },
  {
    id: 'date-planner',
    title: 'Planificador de citas',
    description: 'Planeemos juntos nuestras citas perfectas',
    icon: '📅',
    path: '/date-planner',
  },
  {
    id: 'love-language',
    title: 'Cuestionario de lenguajes del amor',
    description: 'Descubre cómo das y recibes amor',
    icon: '💝',
    path: '/love-language',
  },
  {
    id: 'scrapbook',
    title: 'Creador de álbumes',
    description: 'Crea hermosos álbumes digitales',
    icon: '📖',
    path: '/scrapbook',
  },
  {
    id: 'voice',
    title: 'Grabadora de voz',
    description: 'Graba y comparte mensajes de voz',
    icon: '🎤',
    path: '/voice',
  },
  {
    id: 'flower-3d',
    title: 'Visor de flores en 3D',
    description: 'Explora hermosas flores en 3D',
    icon: '🌺',
    path: '/flower-3d',
  },
  {
    id: 'decoder',
    title: 'Decodificador secreto',
    description: 'Descifra mensajes ocultos y desbloquea recompensas',
    icon: '🔐',
    path: '/decoder',
  },
  {
    id: 'flashcards',
    title: 'Generador de tarjetas de estudio',
    description: 'Sube lecciones y crea tarjetas de estudio automáticamente',
    icon: '📚',
    path: '/flashcards',
  },
  {
    id: 'photobooth',
    title: 'Fotomatón',
    description: 'Captura hermosos momentos con filtros divertidos',
    icon: '📷',
    path: '/photobooth',
  },
  {
    id: 'f1-racing',
    title: 'Carreras de F1',
    description: 'Corre con distintos autos de F1',
    icon: '🏎️',
    path: '/f1-racing',
  },
];

const MotionLink = motion(Link);

const Home = () => {
  const { playSound } = useSound();

  return (
    <div className="min-h-screen gradient-romantic relative overflow-hidden">
      <FloatingHearts count={25} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-heavy mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            Bienvenida, Gigi
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground font-serif-italic mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Explora todas las funciones que he creado para ti
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1 * index, type: 'spring', stiffness: 100 }}
            >
              <Link
                to={feature.path}
                onClick={() => playSound('buttonClick')}
                className="block h-full group"
              >
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-elevated h-full text-foreground relative overflow-hidden transition-all duration-300 hover:border-accent/50 hover:bg-romantic/20"
                  whileHover={{ scale: 1.05, y: -8, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4 relative z-10"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-romantic/40 rounded-bl-full" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <MotionLink
            to="/"
            onClick={() => playSound('sparkle')}
            className="inline-block px-10 py-5 btn-romantic text-xl font-medium shadow-elevated"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comienza nuestro viaje de San Valentín
          </MotionLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
