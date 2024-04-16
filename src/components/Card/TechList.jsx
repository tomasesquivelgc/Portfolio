import stack from '../../data/techs';
import Card from './TiltCard';

const TechList = ({isInView}) => (
  <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-6 md:gap-10 mt-10 m-auto">
    {stack.map((tech) => (
      <Card
        isInView={isInView}
        key={tech.title}
        title={tech.title}
        icon={tech.icon}
        index={tech.index}
      />
    ))}
  </div>
);

export default TechList;