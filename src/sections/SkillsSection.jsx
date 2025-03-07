import TechList from '../components/Card/TechList';

const SkillsSection = () => (
  <section id="skills" className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32">
    <h2 className="font-medium text-5xl">Skills</h2>
    <TechList />
  </section>
);

export default SkillsSection;
