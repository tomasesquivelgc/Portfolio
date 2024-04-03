import InfoList from '../components/InfoList';

function AboutSection() {
  return (
    <section id="about" className="bg-richBlack min-h-screen gap-4 px-10 py-20 md:px-16 lg:px-32 flex flex-col md:flex-row-reverse">
      <div className="w-full lg:w-1/2">
        <h2 className="font-medium text-5xl py-3">About me</h2>
        <p className="py-3 opacity-80">
          Driven individual with resiliency and tenacity to solve challenges and problems.
          Positive attitude and growth mindset to learn and adapt to new situations.
          Background in team projects and
          <br />
          <br />
          Today I&apos;m redescovering my passion for creating and inventing in the form of
          software development. Right now my focus is on web development but I hope to learn
          more tools to expand my horizons, such as AI and game engines.
        </p>
        <div className='h-full'>
          <p>If you must know one thing about me is that I love a good challenge.
          I&apos;m always looking for new ways to improve and learn new things.
          But if you want to know more, you can check the list below.</p>
          <InfoList />
        </div>
       
      </div>
      <img src="src\assets\cropped_face.jpg" alt="thats me!" className="w-1/2 h-auto object-cover" />
    </section>
  );
}

export default AboutSection;
