import featured from '../data/featured';
import moreProjects from '../data/others';
import FeaturedProject from '../components/Projects/FeaturedProject';
import OtherProject from '../components/Projects/OtherProject';

function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen px-10 py-20 md:px-16 lg:px-32 bg-richBlack">
      <h2 className="font-medium text-3xl md:text-5xl py-1">My projects</h2>
      <div className="py-3 mb-10">
        <h3 className="font-chivo text-2xl md:text-xl py-1">Featured projects</h3>
        <div className="flex flex-col justify-center py-3 gap-4 md:gap-20">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              alignRight={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <div className="py-3">
        <h3 className="text-2xl md:text-xl font-chivo py-1">More projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3">
          {moreProjects.map((project) => (
            <OtherProject
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
