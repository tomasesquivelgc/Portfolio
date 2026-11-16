import { lazy, Suspense } from 'react';
import HeroSection from './sections/HeroSection';
import Navbar from './components/Navigation/Navbar';

const ExperienceSection = lazy(() => import('./sections/ExperienceSection'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const Recommend = lazy(() => import('./sections/RecommendSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={null}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <Recommend />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </>
  );
}

export default App;
