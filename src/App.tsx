import { lazy, Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));
const PhotoGallery = lazy(() => import('./pages/PhotoGallery'));
const CountdownTimer = lazy(() => import('./pages/CountdownTimer'));
const LoveLetterBuilder = lazy(() => import('./pages/LoveLetterBuilder'));
const MusicPlaylist = lazy(() => import('./pages/MusicPlaylist'));
const DatePlanner = lazy(() => import('./pages/DatePlanner'));
const LoveLanguageQuiz = lazy(() => import('./pages/LoveLanguageQuiz'));
const ScrapbookCreator = lazy(() => import('./pages/ScrapbookCreator'));
const VoiceRecorder = lazy(() => import('./pages/VoiceRecorder'));
const Flower3DViewer = lazy(() => import('./pages/Flower3DViewer'));
const SecretMessageDecoder = lazy(() => import('./pages/SecretMessageDecoder'));
const FlashcardGenerator = lazy(() => import('./pages/FlashcardGenerator'));
const Photobooth = lazy(() => import('./pages/Photobooth'));
const F1Racing = lazy(() => import('./pages/F1Racing'));

const queryClient = new QueryClient();

const LoadingScreen = () => (
  <main className="flex min-h-screen items-center justify-center gradient-romantic" aria-live="polite">
    <p className="font-serif-italic text-lg text-muted-foreground">Cargando sorpresa…</p>
  </main>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/valentine" element={<Index />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/countdown" element={<CountdownTimer />} />
            <Route path="/love-letter" element={<LoveLetterBuilder />} />
            <Route path="/music" element={<MusicPlaylist />} />
            <Route path="/date-planner" element={<DatePlanner />} />
            <Route path="/love-language" element={<LoveLanguageQuiz />} />
            <Route path="/scrapbook" element={<ScrapbookCreator />} />
            <Route path="/voice" element={<VoiceRecorder />} />
            <Route path="/flower-3d" element={<Flower3DViewer />} />
            <Route path="/decoder" element={<SecretMessageDecoder />} />
            <Route path="/flashcards" element={<FlashcardGenerator />} />
            <Route path="/photobooth" element={<Photobooth />} />
            <Route path="/f1-racing" element={<F1Racing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
