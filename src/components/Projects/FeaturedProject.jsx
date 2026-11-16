import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

const FeaturedProject = ({ project, alignRight }) => {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);
  const isInView = useInView(ref, { once: true });

  // 🧠 Sync parent minHeight with the image's height
  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current) {
        setImgHeight(imgRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      ref={ref}
      key={project.title}
      style={{
        transform: isInView ? 'none' : `translateX(${alignRight ? '200px' : '-200px'})`,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
      }}
      className="w-full md:my-2 lg:my-10"
    >
    <div
      className="relative flex w-full"
      style={{ minHeight: imgHeight ? `${imgHeight}px` : 'auto' }}
    >
      <div
        className={`h-full md:h-auto md:w-7/12 overflow-hidden rounded-xl bg-prussiaBlue flex justify-center absolute shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_40px_rgba(0,0,0,0.4)] ${
          alignRight ? 'left-0' : 'right-0'
        }`}
      >
        <motion.img
          ref={imgRef}
          whileHover={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="h-auto w-full md:h-auto md:w-auto opacity-15 md:opacity-90"
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgHeight(imgRef.current?.offsetHeight || 0)} // 👈 handle async load
        />
      </div>

      <div
        className={`text-left w-full md:w-5/12 p-4 md:p-0 z-10 flex flex-col justify-start ${
          alignRight ? 'md:ml-auto md:pl-8' : 'md:pr-8'
        }`}
      >
        <h4 className="text-3xl text-left text-argBlue py-1 hover:text-magnolia">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h4>

        <p className="px-3 py-2 leading-snug text-left border-l-[3px] border-l-[#3b82f6] bg-[rgba(15,23,42,0.75)] backdrop-blur rounded-r-md">
          {project.description}
        </p>

        <ul className="py-2 flex gap-4 w-full flex-wrap justify-start">
          {project.technologies.map((tech) => (
            <li key={tech} className="font-chivo opacity-80 py-2">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 justify-start">
          {project.link && (
            <motion.a
              whileHover={{ scale: 1.5, color: '#FCF7FF' }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-argBlue text-xl"
            >
              <FaExternalLinkAlt />
            </motion.a>
          )}

          {project.link && (
            <motion.a
              whileHover={{ scale: 1.5, color: '#FCF7FF' }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-argBlue text-xl"
            >
              <FaExternalLinkAlt />
            </motion.a>
          )}
          
        </div>
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
