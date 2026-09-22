import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from '@/components/valentine/FloatingHearts';
import Confetti from '@/components/valentine/Confetti';
import { useSound } from '@/hooks/useSound';

interface Question {
  id: number;
  question: string;
  options: { text: string; type: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: '¿Qué te hace sentir más amado/a?',
    options: [
      { text: 'Recibir regalos significativos', type: 'gifts' },
      { text: 'Escuchar "te amo" y cumplidos', type: 'words' },
      { text: 'Pasar tiempo de calidad juntos', type: 'time' },
      { text: 'El contacto físico y los abrazos', type: 'touch' },
      { text: 'Que alguien ayude con las tareas', type: 'acts' },
    ],
  },
  {
    id: 2,
    question: '¿Cómo prefieres demostrar amor?',
    options: [
      { text: 'Dar regalos significativos', type: 'gifts' },
      { text: 'Escribir notas de amor y decir cosas bonitas', type: 'words' },
      { text: 'Planificar actividades especiales juntos', type: 'time' },
      { text: 'Tomarse de la mano y abrazarse', type: 'touch' },
      { text: 'Hacer cosas útiles por la otra persona', type: 'acts' },
    ],
  },
  {
    id: 3,
    question: '¿Qué te duele más en una relación?',
    options: [
      { text: 'Olvidar ocasiones especiales', type: 'gifts' },
      { text: 'Palabras hirientes o críticas', type: 'words' },
      { text: 'Estar demasiado ocupado/a para pasar tiempo juntos', type: 'time' },
      { text: 'La falta de afecto físico', type: 'touch' },
      { text: 'No ayudar cuando se necesita', type: 'acts' },
    ],
  },
  {
    id: 4,
    question: '¿Qué te hace sentir valorado/a?',
    options: [
      { text: 'Regalos sorpresa o flores', type: 'gifts' },
      { text: 'Agradecimiento y elogios verbales', type: 'words' },
      { text: 'Atención plena', type: 'time' },
      { text: 'Un abrazo cálido', type: 'touch' },
      { text: 'Que alguien haga tareas por ti', type: 'acts' },
    ],
  },
  {
    id: 5,
    question: '¿Cómo celebras los logros?',
    options: [
      { text: 'Comprar algo especial', type: 'gifts' },
      { text: 'Compartir palabras de ánimo', type: 'words' },
      { text: 'Salir juntos', type: 'time' },
      { text: 'Un abrazo de celebración', type: 'touch' },
      { text: 'Ayudar con algo', type: 'acts' },
    ],
  },
];

const loveLanguages = {
  gifts: { name: 'Recibir regalos', description: 'Te sientes amado/a al recibir regalos significativos', suggestions: ['Sorprende con pequeños regalos', 'Recuerda las ocasiones especiales', 'Regala objetos significativos'] },
  words: { name: 'Palabras de afirmación', description: 'Valoras las expresiones verbales de amor', suggestions: ['Escribe cartas de amor', 'Da cumplidos a diario', 'Expresa tu aprecio a menudo'] },
  time: { name: 'Tiempo de calidad', description: 'Aprecias la atención plena', suggestions: ['Planifica citas con regularidad', 'Deja a un lado las distracciones', 'Crea experiencias compartidas'] },
  touch: { name: 'Contacto físico', description: 'Te sientes amado/a mediante la conexión física', suggestions: ['Tómense de la mano a menudo', 'Da abrazos y besos', 'Mantente presente físicamente'] },
  acts: { name: 'Actos de servicio', description: 'Aprecias las acciones útiles', suggestions: ['Ayuda con las tareas diarias', 'Haz cosas sin que te las pidan', 'Demuestra tu cariño con acciones'] },
};

const LoveLanguageQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const { playSound } = useSound();

  const handleAnswer = (type: string) => {
    const newAnswers = { ...answers, [currentQuestion]: type };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      playSound('buttonClick');
    } else {
      calculateResults(newAnswers);
      playSound('success');
    }
  };

  const calculateResults = (ans: Record<number, string>) => {
    const counts: Record<string, number> = {};
    Object.values(ans).forEach((type) => {
      counts[type] = (counts[type] || 0) + 1;
    });
    setResults(counts);
    setShowResults(true);
    playSound('success');
  };

  const getTopLanguage = () => {
    const sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);
    return sorted[0]?.[0] || 'words';
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResults({});
    setShowResults(false);
    playSound('buttonClick');
  };

  return (
    <div className="min-h-screen gradient-romantic relative">
      <FloatingHearts count={12} />
      <Confetti isActive={showResults} />
      
      <div className="container max-w-3xl mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-heavy text-primary mb-4">
            Cuestionario de lenguajes del amor
          </h1>
          <p className="text-muted-foreground font-serif-italic">
            Descubre cómo das y recibes amor
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-elevated"
            >
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Pregunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-medium mb-8 text-center">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleAnswer(option.type)}
                    className="w-full p-4 text-left bg-muted/50 rounded-lg hover:bg-primary/10 border-2 border-transparent hover:border-primary/30 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-elevated"
            >
              <h2 className="text-3xl font-medium mb-6 text-center">Tu lenguaje del amor</h2>
              
              {Object.entries(results)
                .sort((a, b) => b[1] - a[1])
                .map(([type, count], idx) => {
                  const lang = loveLanguages[type as keyof typeof loveLanguages];
                  const percentage = (count / questions.length) * 100;
                  
                  return (
                    <motion.div
                      key={type}
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-muted-foreground">{Math.round(percentage)}%</span>
                      </div>
                      <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                        />
                      </div>
                      {idx === 0 && (
                        <motion.p
                          className="mt-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {lang.description}
                        </motion.p>
                      )}
                    </motion.div>
                  );
                })}

              <motion.div
                className="mt-8 p-6 bg-primary/10 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="font-medium mb-3">Sugerencias para {loveLanguages[getTopLanguage() as keyof typeof loveLanguages].name}:</h3>
                <ul className="space-y-2">
                  {loveLanguages[getTopLanguage() as keyof typeof loveLanguages].suggestions.map((suggestion, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <button
                onClick={resetQuiz}
                className="w-full mt-6 btn-romantic py-3"
              >
                Repetir el cuestionario
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveLanguageQuiz;
