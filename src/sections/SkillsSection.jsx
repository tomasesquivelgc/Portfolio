import TechList from '../components/Card/TechList';
import Constellation from '../components/Constellation';

const SkillsSection = () => (
  <section id="skills" className="relative isolate bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32">
    <Constellation id="skills-stars" variant="field" />
    <div className="relative z-10">
      <h2 className="font-medium text-5xl">Skills</h2>
      <TechList />
    </div>
  </section>
);

export default SkillsSection;
