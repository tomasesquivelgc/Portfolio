import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function FeaturedProject({ project, alignRight }) {
  return (
    <div
      key={project.id}
      className={`w-full md:w-full relative pt-5 md:pb-20 flex ${
        alignRight ? 'flex-row-reverse' : ''
      }`}
    >

      <div className="w-full md:w-7/12 filter bg-richBlack md:filter-none">
        <motion.img
          whileHover={{ scale: 1.03, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full opacity-20 md:opacity-60"
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className={`${alignRight ? 'md:text-left' : 'md:text-right md:left-2/4'} w-full h-full md:w-1/2 absolute top-0 left-0 z-10 flex flex-col justify-between md:justify-start`}>
        <h4 className="font-monts text-3xl font-medium hover:text-argBlue pt-10 md:py-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h4>

        <p className="font-chivo py-3 px-5 md:bg-richBlack">{project.description}</p>

        <ul className={`flex gap-3 justify-center w-full ${alignRight ? 'md:justify-start' : 'md:justify-end'}`}>
          {project.technologies.map((tech) => (
            <li key={tech} className="font-gentium text-argBlue py-2">
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
