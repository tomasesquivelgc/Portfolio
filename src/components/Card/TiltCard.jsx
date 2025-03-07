import propTypes from 'prop-types';

const Card = ({ title, technologies, isInView, delay = 0 }) => (
  <div
    style={{
      transform: isInView ? 'none' : 'translateX(-200px)',
      opacity: isInView ? 1 : 0,
      transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    }}
    className="p-6 rounded-xl bg-gradient-to-br from-richBlack via-argBlue to-magnolia"
  >
    <h2 className="text-2xl font-chivo text-magnolia mb-6">{title}</h2>
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {technologies.map((tech) => (
        <div key={tech.title} className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center p-2 bg-richBlack/30">
            <img 
              className="w-full h-full object-contain" 
              src={tech.icon} 
              alt={tech.title} 
              loading="lazy" 
            />
          </div>
          <span className="text-sm md:text-base text-magnolia/80 mt-2 text-center">
            {tech.title}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  isInView: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  technologies: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      icon: propTypes.string.isRequired,
    })
  ).isRequired,
  delay: propTypes.number,
};
