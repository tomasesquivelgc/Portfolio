import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useRef } from 'react';

const FeaturedProject = ({ project, alignRight }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : `translateX(${alignRight ? '200px' : '-200px'})`,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
      }}
      key={project.title}
      className={`w-full md:w-full relative  min-h-80 md:min-h-fit flex md:my-0 lg:my-8 ${
        alignRight ? 'md:justify-end' : ''
      }`}
    >

      <div className={`h-full md:h-auto md:w-7/12 overflow-hidden md:overflow-visible bg-prussiaBlue flex justify-center absolute ${alignRight ? 'left-0' : 'right-0'}`}>
        <motion.img
          whileHover={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="h-full min-w-max md:min-w-0 md:h-auto opacity-15 md:opacity-70"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>

      <div className={`${alignRight ? 'md:text-right ' : 'md:text-left'} w-full md:w-1/2 p-4 md:p-0 z-10 flex flex-col justify-between`}>
        <h4 className="text-3xl text-argBlue md:px-0 py-1 hover:text-magnolia">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h4>

        <p className="py-2 md:px-3 md:py-3 md:bg-prussiaBlue/90">{project.description}</p>

        <ul className={`py-2 md:px-0 flex gap-4 w-full flex-wrap ${alignRight ? 'md:justify-end' : 'md:justify-start'}`}>
          {project.technologies.map((tech) => (
            <li key={tech} className="font-chivo opacity-80 py-2">
              {tech}
            </li>
          ))}
        </ul>

        <div className={`flex gap-4 justify-end ${alignRight ? 'md:justify-end' : 'md:justify-start'}`}>
          <motion.a
            whileHover={{ scale: 1.5, color: '#FCF7FF' }}
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="text-argBlue text-xl"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.5, color: '#FCF7FF' }}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-argBlue text-xl"
          >
            <FaExternalLinkAlt />
          </motion.a>
        </div>
      </div>

    </div>
  );
};

FeaturedProject.defaultProps = {
  alignRight: false,
};

FeaturedProject.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  alignRight: PropTypes.bool,
};

export default FeaturedProject;
