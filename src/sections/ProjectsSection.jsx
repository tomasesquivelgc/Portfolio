import React from "react";
import featured from "../projects/featured.js";

function ProjectsSection() {
  return(
    <section className="bg-night min-h-screen text-center p-16">
        <h2 className="font-gentium italic text-5xl py-3">My projects</h2>
        <div className="flex flex-col justify-center">
          {featured.map((project) => (
            <div key={project.id} className="w-full md:w-full p-3 flex">
              <img className="w-3/5" src={project.image} alt={project.title} />
              <div className="">
                <h3 className="font-chivo text-3xl text-argBlue py-3">{project.title}</h3>
                <p className="font-chivo py-3 bg-richBlack">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}

export default ProjectsSection;