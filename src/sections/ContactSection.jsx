import React from "react";
import ContactForm from "../components/ContactForm";

function ContactSection() {
  return(
    <section className="bg-richBlack min-h-screen flex flex-col md:flex-row md:px-36 md:py-28">
      <ContactForm />
      <div className="px-3 w-full md:w-1/2">
        <h2 className="font-gentium italic text-5xl pb-3">Contact me</h2>
        <p className="font-chivo py-3">I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</p>
      </div>
    </section>
  );
}

export default ContactSection;