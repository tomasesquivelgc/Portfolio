import ContactForm from '../components/Contact/ContactForm';

function ContactSection() {
  return (
    <section id="contact" className="bg-night min-h-screen flex flex-col md:flex-row px-10 py-20 md:px-16 lg:px-32">
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl py-1">Contact me</h2>
        <p className="py-3 opacity-90">I&apos;m looking to put my skills to good use on an interesting project, so if you&apos;re interested in building something with me go ahead and E-mail me!</p>
      </div>
      <ContactForm />
    </section>
  );
}

export default ContactSection;
