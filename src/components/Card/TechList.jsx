import { useRef } from 'react';
import { useInView } from 'framer-motion';
import stack from '../../data/techs';
import Card from './TiltCard';

const TechList = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  return (
    <div className="space-y-8 p-4 justify-center items-center flex flex-col">
      <h2 ref={ref1} className="text-2xl font-chivo text-magnolia mb-2">FrontEnd</h2>
      <Card
        isInView={isInView1}
        technologies={stack.frontend}
        fromRight={false}
      />
      <h2 ref={ref2} className="text-2xl font-chivo text-magnolia mb-2">Backend</h2>
      <Card
        isInView={isInView2}
        technologies={stack.backend}
        fromRight
      />
    </div>
  );
};

export default TechList;
