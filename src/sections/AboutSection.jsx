import InfoList from '../components/InfoList';

function AboutSection() {
  return (
    <section className="bg-richBlack min-h-screen p-10 lg:px-36 lg:py-28 flex flex-col md:flex-row-reverse">
      <div className="w-full lg:w-1/2 px-2">
        <h2 className="font-medium text-5xl py-3">About me</h2>
        <p className="py-3 opacity-90">
          From a young age my dream was to become an inventor.
          Give life to ideas and help the world with my mind.
          Life took many turns, I studied many different things and worked in different places;
          and along the way I forgot my dream.
          <br />
          <br />
          Today I&apos;m redescovering my passion for creating and inventing in the form of
          software development. Right now my focus is on web development but I hope to learn
          more tools to expand my horizons, such as AI and game engines.
          <br />
          <br />
          If you must know one thing about me is that I love a good challenge.
          I&apos;m always looking for new ways to improve and learn new things.
          But if you want to know more, you can check the list below.
        </p>
        <InfoList />
      </div>
      <img src="src\assets\cropped_face.jpg" alt="thats me!" className="w-1/2 py-3" />
    </section>
  );
}

export default AboutSection;
