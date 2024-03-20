function App() {
  return (
    <>
      <section className="bg-night min-h-screen flex flex-col justify-center text-center p-16">
        <h1 className="font-monts font-extrabold text-4xl md:text-6xl py-3">
          Welcome.
          <br />
          {' '}
          My name is
          <span className="text-argBlue">Tomás</span>
        </h1>
        <h2 className="font-gentium text-3xl md:text-5xl text-magnolia italic py-3">
          <span className="text-argBlue">Software</span>
          {' '}
          developer
        </h2>
        <p className="font-chivo py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.</p>
      </section>

      <section className="bg-richBlack min-h-screen p-16 flex flex-col lg:flex-row">
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

      <section className="bg-richBlack min-h-screen flex flex-col md:flex-row p-16">
        <form action="https://formspree.io/f/xwkjrkqw" method="post" className="flex flex-col w-full md:w-1/2 py-3">
          <label htmlFor="full-name">
            Full Name:
            <input id="full-name" type="text" name="name" placeholder="Full name" maxLength="30" required />
          </label>

          <label htmlFor="email">
            Email:
            <input id="email" type="email" name="email" placeholder="Email address" required />
          </label>

          <textarea id="msg" name="user_message" maxLength="500" placeholder="Write me something..." required />

          <input type="submit" value="Submit" />
        </form>

        <div className="px-3 w-full md:w-1/2">
          <h2 className="font-gentium italic text-5xl pb-3">Contact me</h2>
          <p className="font-chivo py-3">I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</p>
        </div>

      </section>
    </>
  );
}

export default App;
