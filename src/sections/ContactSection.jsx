import ContactForm from '../components/ContactForm';

function ContactSection() {
  return (
    <section id="contact" className="bg-richBlack min-h-screen flex flex-col md:flex-row px-10 py-20 md:px-16 lg:px-32">
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl pb-3">Contact me</h2>
        <p className="py-3 opacity-90">I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</p>
      </div>
      <ContactForm />
    </section>
  );
}

export default ContactSection;
