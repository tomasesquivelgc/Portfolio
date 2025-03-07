import { useRef } from 'react';
import { useInView } from 'framer-motion';
import TechList from '../components/Card/TechList';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} id="skills" className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32">
      <h2 className="font-medium text-5xl">Skills</h2>
      <TechList isInView={isInView} />
    </section>
  );
};

export default SkillsSection;
