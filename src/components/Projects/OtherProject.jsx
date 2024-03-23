import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const OtherProject = ({ project }) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      window.open(project.codeLink, '_blank');
    }
  };

  return (
    <motion.div
      whileHover={{ translateY: -10 }}
      onClick={handleClick}
      className="w-full hover:cursor-pointer light-title text-left bg-richBlack justify-self-center p-7 h-full flex flex-col justify-between"
    >
      <h4 className="font-monts text-2xl font-medium py-3">
        {project.title}
      </h4>
      <p className="py-3">
        {project.description}
      </p>
      <ul className="flex gap-x-3 py-3">
        {project.technologies.map((tech) => (
          <li
            className="font-gentium text-argBlue"
            key={tech}
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

OtherProject.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    codeLink: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default OtherProject;
