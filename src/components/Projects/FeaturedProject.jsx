import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function FeaturedProject({ project, alignRight }) {
  return (
    <div
      key={project.id}
      className={`w-full md:w-full relative md:pb-20 min-h-80 flex my-2 md:my-4 lg:my-8 ${
        alignRight ? 'md:justify-end' : ''
      }`}
    >

      <div className={`h-full md:h-auto md:w-7/12 overflow-hidden md:overflow-visible bg-prussiaBlue flex justify-center absolute ${alignRight ? 'left-0' : 'right-0'}`}>
        <motion.img
          whileHover={{ scale: 1.03, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="h-full min-w-max md:min-w-0 md:h-auto opacity-15 md:opacity-80"
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className={`${alignRight ? 'md:text-right ' : 'md:text-left'} w-full md:w-1/2 p-4 md:p-0 z-10 flex flex-col justify-between`}>
        <h4 className="text-3xl hover:text-argBlue md:px-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h4>

        <p className="py-2 md:px-2 md:bg-prussiaBlue opacity-90">{project.description}</p>

        <ul className={`py-2 md:px-0 flex gap-2 w-full flex-wrap ${alignRight ? 'md:justify-end' : 'md:justify-start'}`}>
          {project.technologies.map((tech) => (
            <li key={tech} className="font-chivo text-argBlue py-2">
              {tech}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

FeaturedProject.defaultProps = {
  alignRight: false,
};

FeaturedProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  alignRight: PropTypes.bool,
};

export default FeaturedProject;
