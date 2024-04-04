import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import SkillsSection from './sections/SkillsSection';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default App;
