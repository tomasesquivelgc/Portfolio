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
      className="w-full hover:cursor-pointer light-title text-left bg-prussiaBlue justify-self-center p-4 h-full flex flex-col justify-between"
    >
      <div>
        <h4 className="text-2xl">
          {project.title}
        </h4>
        <p className="py-2 opacity-80">
          {project.description}
        </p>
      </div>
      
      <ul className="flex gap-x-4 py-2 flex-wrap opacity-60">
        {project.technologies.map((tech) => (
          <li
            className="font-chivo text-argBlue"
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
