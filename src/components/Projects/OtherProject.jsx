import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useRef } from 'react';

const OtherProject = ({ project }) => {
  const handleClick = () => {
    if (project.link) {
      return project.link;
    }
    return project.codeLink;
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
    ref={ref}
    style={{
      transform: isInView ? "none" : "translateY(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
    }}
      whileHover={{ translateY: -10 }}
      className="w-full text-left bg-prussiaBlue justify-self-center p-4 h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex gap-4 justify-end">
          <motion.a
            whileHover={{ scale: 1.5, color: '#FCF7FF' }}
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="text-argBlue"
          >
            <FaGithub />
          </motion.a>

          {project.link && (
            <motion.a
              whileHover={{ scale: 1.5, color: '#FCF7FF' }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-argBlue"
            >
              <FaExternalLinkAlt />
            </motion.a>
          )}
        </div>
        <h4>
          <a
            className="text-2xl hover:cursor-pointer text-argBlue hover:text-magnolia"
            href={handleClick()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h4>
        <p className="py-2 opacity-90">
          {project.description}
        </p>
      </div>

      <ul className="flex gap-x-4 py-2 flex-wrap">
        {project.technologies.map((tech) => (
          <li
            className="font-chivo opacity-80 py-2"
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
