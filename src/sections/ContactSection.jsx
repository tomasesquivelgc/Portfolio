import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactForm from '../components/Contact/ContactForm';

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <section id="contact" ref={ref} className="bg-night min-h-screen flex flex-col justify-start items-center px-10 py-20 md:px-16 lg:px-32">
      <div className="text-left w-full">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on inView
          transition={{ duration: 0.5 }}
          className="text-5xl py-1"
        >
          Contact me
        </motion.h2>
      </div>
      <div className="py-3 flex flex-col md:flex-row gap-4 items-start">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on inView
          transition={{ duration: 0.5, delay: 0.2 }}
          className="opacity-90 w-full text-center md:w-1/2 md:text-left text-xl"
        >
          I&apos;m looking to put my skills to good use on an interesting project, so if you&apos;re interested in building something with me go ahead and E-mail me!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animate based on inView
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/2"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
