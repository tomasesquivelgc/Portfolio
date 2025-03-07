import stack from '../../data/techs';
import Card from './TiltCard';

const TechList = ({ isInView }) => (
  <div className="space-y-8">
    <Card
      isInView={isInView}
      title="Frontend Technologies"
      technologies={stack.frontend}
      delay={0}
    />
    <Card
      isInView={isInView}
      title="Backend Technologies"
      technologies={stack.backend}
      delay={0.3}
    />
  </div>
);

export default TechList;