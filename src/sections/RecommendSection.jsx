import Recommendation from "../components/Recommendations/Recommendation";
import recommendations from "../data/recommendations";

const Recommend = () => (
  <section id="recommendations" className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32">
    <h2 className="font-medium text-3xl md:text-5xl text-center">Recommendations</h2>
    <div className="flex flex-col gap-12 mt-10 w-full">
      {recommendations.map((rec, index) => (
        <Recommendation
          key={rec.name + index}
          name={rec.name}
          title={rec.title}
          description={rec.description}
        />
      ))}
    </div>
  </section>
);

export default Recommend;
