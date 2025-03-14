import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactForm from '../components/Contact/ContactForm';
import { FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa6';

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
        <div className="flex flex-col gap-2 w-full md:w-1/2">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on inView
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full text-center md:text-left text-xl"
        >
          I&apos;m looking to put my skills to good use on an interesting project, so if you&apos;re interested in building something with me go ahead and E-mail me!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on inView
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full text-center md:text-left text-xl"
        >
          Or you can find me using my socials!
        </motion.p>
        <div className="flex gap-4 justify-start text-2xl py-1">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.a
            whileHover={{ scale: 1.5, color: '#FCF7FF' }}
            href="https://www.linkedin.com/in/tomas-esquivel-dev/"
            target="_blank"
            rel="noreferrer"
            className="text-argBlue"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            whileHover={{ scale: 1.5, color: '#FCF7FF' }}
            href="https://github.com/tomasesquivelgc"
            target="_blank"
            rel="noreferrer"
            className="text-argBlue"
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.a
            whileHover={{ scale: 1.5, color: '#FCF7FF' }}
            href="https://medium.com/@tomasesquivel"
            target="_blank"
            rel="noreferrer"
            className="text-argBlue"
          >
            <FaMedium />
          </motion.a>
        </motion.div>

      </div>
        </div>
        
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
