import React from 'react';
import { motion } from 'framer-motion';

function FeaturedProject({ project, alignRight }) {
  return (
    <div
      key={project.id}
      className={`w-full md:w-full relative pt-4 pb-20 flex ${
        alignRight ? 'flex-row-reverse' : ''
        }`}
      >

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="w-7/12">
          <img
            className="w-full"
            src={project.image}
            alt={project.title}
          />
      </motion.div>

      <div className={`${alignRight ? 'lg:text-left' : 'lg:text-right left-2/4'} w-1/2 absolute top-0 left-0 z-10`}>
        <h4 className='font-monts text-3xl font-medium hover:text-argBlue py-4'>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h4>
        
        <p className="font-chivo py-3 px-5 bg-richBlack">{project.description}</p>

        <ul className={`flex gap-3 w-full ${alignRight ? 'justify-start' : 'justify-end'}`}>
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

export default FeaturedProject;
