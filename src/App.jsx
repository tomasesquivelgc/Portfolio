import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import SkillsSection from './sections/SkillsSection';
import Recommend from './sections/RecommendSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <Recommend />
      <ContactSection />
    </>
  );
}

export default App;
