import stack from '../../data/techs';
import Card from './TiltCard';

const TechList = ({ isInView }) => (
  <div className="space-y-8 p-4">
    <h2 className="text-2xl font-chivo text-magnolia mb-2">FrontEnd</h2>
    <Card
      isInView={isInView}
      title="Frontend Technologies"
      technologies={stack.frontend}
      delay={0}
    />
    <h2 className="text-2xl font-chivo text-magnolia mb-2">Backend</h2>
    <Card
      isInView={isInView}
      title="Backend Technologies"
      technologies={stack.backend}
      delay={0.3}
    />
  </div>
);

export default TechList;