import Card from "../components/Card/TiltCard";
import stack from "../data/techs";

const SkillsSection = () => (
  <section className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32">
    <h2 className="font-medium text-5xl">Skills</h2>
    {stack.length && (
      <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-7 md:gap-8 mt-10 m-auto">
        {stack.map((tech, index) => (
          <Card key={index} title={tech.title} icon={tech.icon} />
        ))}
      </div>
    )}
  </section>
);

export default SkillsSection;
