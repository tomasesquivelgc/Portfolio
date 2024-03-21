import React from "react";
import featured from "../projects/featured.js";
import FeaturedProject from "../components/FeaturedProject.jsx";

function ProjectsSection() {
  return (
    <section className="bg-night min-h-screen text-center p-36">
      <h2 className="font-gentium italic text-5xl py-3">My projects</h2>
      <div className="flex flex-col justify-center">
        {featured.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            alignRight={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;