import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactForm from '../components/Contact/ContactForm';
import { FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa6';

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <section id="contact" ref={ref} className="bg-richBlack flex min-h-screen flex-col items-center justify-start px-6 py-20 sm:px-10 md:px-20 lg:px-32 xl:px-48">
      <div className="flex w-full max-w-6xl flex-col gap-8 py-3 md:flex-row md:items-start md:gap-12">
        <div className="flex w-full flex-col gap-4 md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="py-1 text-left text-5xl"
        >
          Contact me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md text-left text-lg leading-snug"
        >
          I&apos;m looking to put my skills to good use on an interesting project, so if you&apos;re interested in building something with me go ahead and E-mail me!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md text-left text-lg leading-snug"
        >
          Or you can find me using my socials!
        </motion.p>
        <div className="mt-2 flex justify-start gap-3 border-t border-white/10 pt-5 text-2xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            href="https://www.linkedin.com/in/tomas-esquivel-dev/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-argBlue transition-colors hover:bg-argBlue/20 hover:text-magnolia"
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
            whileHover={{ scale: 1.08 }}
            href="https://github.com/tomasesquivelgc"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-argBlue transition-colors hover:bg-argBlue/20 hover:text-magnolia"
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
            whileHover={{ scale: 1.08 }}
            href="https://medium.com/@tomasesquivel"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-argBlue transition-colors hover:bg-argBlue/20 hover:text-magnolia"
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
          className="w-full md:w-1/2 md:self-start"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
