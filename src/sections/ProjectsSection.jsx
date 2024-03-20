import React from "react";

function ProjectsSection() {
  return(
    <section className="bg-night min-h-screen text-center p-16">
        <h2 className="font-gentium italic text-5xl py-3">My projects</h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/3 p-3">
            <h3 className="font-chivo text-3xl text-argBlue py-3">Project 1</h3>
            <p className="font-chivo py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
          </div>
          <div className="w-full md:w-1/3 p-3">
            <h3 className="font-chivo text-3xl text-argBlue py-3">Project 2</h3>
            <p className="font-chivo py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
          </div>
          <div className="w-full md:w-1/3 p-3">
            <h3 className="font-chivo text-3xl text-argBlue py-3">Project 3</h3>
            <p className="font-chivo py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
          </div>
        </div>
      </section>
  );
}

export default ProjectsSection;