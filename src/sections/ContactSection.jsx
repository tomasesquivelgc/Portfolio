import React from "react";

function ContactSection() {
  return(
    <section className="bg-richBlack min-h-screen flex flex-col md:flex-row p-16">
        <form action="https://formspree.io/f/xwkjrkqw" method="post" className="flex flex-col w-full md:w-1/2 py-3">
          <label htmlFor="full-name">
            <input className="w-full" id="full-name" type="text" name="name" placeholder="Full name" maxLength="30" required />
          </label>

          <label htmlFor="email">
            <input className="w-full" id="email" type="email" name="email" placeholder="Email address" required />
          </label>

          <textarea id="msg" name="user_message" maxLength="500" placeholder="Write me something..." required />

          <input type="submit" value="Submit" />
        </form>

        <div className="px-3 w-full md:w-1/2">
          <h2 className="font-gentium italic text-5xl pb-3">Contact me</h2>
          <p className="font-chivo py-3">I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</p>
        </div>

      </section>
  );
}

export default ContactSection;