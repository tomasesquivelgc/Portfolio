import Card from '../components/Card/TiltCard';
import stack from '../data/techs';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
  <section ref={ref} id="skills" className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32">
    <h2 className="font-medium text-5xl">Skills</h2>
    {stack.length && (
      <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-6 md:gap-10 mt-10 m-auto">
        {stack.map((tech) => (
          <Card isInView={isInView} key={tech.title} title={tech.title} icon={tech.icon} index={tech.index} />
        ))}
      </div>
    )}
  </section>)
};

export default SkillsSection;
