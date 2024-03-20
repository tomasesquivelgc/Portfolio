import React from "react";

function AboutSection() {
  return(
    <section className="bg-richBlack min-h-screen p-4 md:p-16 flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2 px-2">
          <h2 className="font-gentium italic text-magnolia text-5xl py-3">About me</h2>
          <p className="font-chivo py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          <ul>
            <li>A list</li>
            <li>Goes here</li>
            <li>Of stuff</li>
            <li>About me!</li>
          </ul>
        </div>
        <img src="src\assets\cropped_face.jpg" alt="thats me!" className="w-1/2 py-3" />
      </section>
  );
}

export default AboutSection;