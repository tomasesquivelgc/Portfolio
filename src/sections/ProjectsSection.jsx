import React from 'react';
import featured from '../projects/featured.js';
import FeaturedProject from '../components/FeaturedProject.jsx';

function ProjectsSection() {
  return (
    <section className="bg-night min-h-screen text-center md:px-36 md:py-28">
      <h2 className="font-monts font-bold text-4xl py-3">My projects</h2>
      <div>
        <h3 className="text-xl font-gentium italic text-argBlue py-5">Featured projects</h3>
        <div className="flex flex-col justify-center">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              alignRight={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default ProjectsSection;
