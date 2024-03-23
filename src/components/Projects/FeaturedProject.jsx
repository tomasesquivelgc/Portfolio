import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function FeaturedProject({ project, alignRight }) {
  return (
    <div
      key={project.id}
      className={`w-full min-h-96 md:w-full relative md:pb-20 flex ${
        alignRight ? 'flex-row-reverse' : ''
      }`}
    >

      <div className={`w-full md:w-7/12 overflow-hidden bg-prussiaBlue absolute ${alignRight ? 'left-0' : 'right-0'}`}>
        <motion.img
          whileHover={{ scale: 1.03, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="w-full opacity-20 md:opacity-70"
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className={`${alignRight ? 'md:text-right' : 'md:text-left'} md:w-1/2 z-10 flex flex-col`}>
        <h4 className="text-2xl hover:text-argBlue p-2 md:px-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h4>

        <p className="p-2 md:bg-prussiaBlue opacity-90">{project.description}</p>

        <ul className={`p-2 md:px-0 flex gap-2 w-full ${alignRight ? 'md:justify-end' : 'md:justify-start'}`}>
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
