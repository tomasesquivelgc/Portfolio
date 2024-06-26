import ContactForm from '../components/Contact/ContactForm';

function ContactSection() {
  return (
    <section id="contact" className="bg-night min-h-screen flex flex-col justify-center items-center px-10 py-20 md:px-16 lg:px-32">
      <div className="text-center w-full md:w-1/2">
        <h2 className="text-5xl py-1">Contact me</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <p className="py-3 opacity-90 w-full text-center md:w-1/2 md:text-left text-xl">I&apos;m looking to put my skills to good use on an interesting project, so if you&apos;re interested in building something with me go ahead and E-mail me!</p>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
