import React from "react";

function HeroSection() {
  return(
    <section className="bg-night min-h-screen flex flex-col justify-center text-center p-4 md:p-16">
      <h1 className="font-monts font-extrabold text-4xl md:text-6xl py-3">
        Welcome.
        <br />
        {' '}
        My name is
        <span className="text-argBlue"> Tomás</span>
      </h1>
      <h2 className="font-gentium text-3xl md:text-5xl text-magnolia italic py-3">
        <span className="text-argBlue">Software</span>
        {' '}
        developer
      </h2>
      <p className="font-chivo py-3 md:text-xl">In my youth I dreamt of becoming an inventor, so I became an engineer.</p>
    </section>
  ); 
}

export default HeroSection;