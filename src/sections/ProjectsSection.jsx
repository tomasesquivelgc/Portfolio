import featured from '../projects/featured';
import moreProjects from '../projects/others';
import FeaturedProject from '../components/Projects/FeaturedProject';
import OtherProject from '../components/Projects/OtherProject';

function ProjectsSection() {
  return (
    <section className="bg-night min-h-screen text-center px-10 py-10 lg:px-28 lg:py-28">
      <h2 className="font-monts font-bold text-4xl py-3">My projects</h2>
      <div>
        <h3 className="text-xl font-gentium italic text-argBlue py-5">Featured projects</h3>
        <div className="flex flex-col justify-center">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              alignRight={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-gentium italic text-argBlue py-5">More projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
