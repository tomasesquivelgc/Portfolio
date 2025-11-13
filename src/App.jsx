import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import SkillsSection from './sections/SkillsSection';
import Navbar from './components/Navigation/Navbar';
import Recommend from './sections/RecommendSection';

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
