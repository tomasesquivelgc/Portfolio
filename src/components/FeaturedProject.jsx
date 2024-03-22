import React from 'react';

function FeaturedProject({ project, alignRight }) {
  return (
    <div
      key={project.id}
      className={`w-full md:w-full pt-4 pb-20 flex ${
        alignRight ? 'flex-row-reverse' : ''
        }`}
      >

      <div className="w-1/2">
        <img
          className="w-full"
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className={`${alignRight ? 'lg:text-left' : 'lg:text-right'} w-1/2`}>
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
