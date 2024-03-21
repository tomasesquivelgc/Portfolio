import React from "react";

function FeaturedProject({ project, alignRight }) {
  return (
    <div
      key={project.id}
      className={`w-full md:w-full p-3 py-14 flex ${
        alignRight ? "flex-row-reverse" : ""
      }`}
    >
      <img
      className="w-3/5" src={project.image} alt={project.title} />
      <div className={`${alignRight ? "lg:text-left" : "lg:text-right"}`}>
        <p className="font-gentium italic text-argBlue">Featured project</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-monts text-3xl font-bold hover:text-argBlue py-3"
        >
          {project.title}
        </a>
        <p className="font-chivo py-3 bg-richBlack">{project.description}</p>
        <ul className={`flex gap-3 w-full ${alignRight ? "justify-start" : "justify-end"}`}>
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
