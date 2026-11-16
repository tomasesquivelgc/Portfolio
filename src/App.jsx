import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import SkillsSection from './sections/SkillsSection';
import Navbar from './components/Navigation/Navbar';
import Recommend from './sections/RecommendSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutSection />
      <Recommend />
      <ContactSection />
    </>
  );
}

export default App;
