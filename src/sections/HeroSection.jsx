import { motion } from 'framer-motion';
import { FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa6';

function HeroSection() {
  return (
    <section id="home" className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-monts font-bold w-full text-4xl md:text-6xl py-1"
        >
          Tomás&nbsp;
          <span className="text-argBlue">Esquivel</span>

        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold md:text-4xl py-1"
        >
          <span className="text-argBlue">Full-stack</span>
          {' '}
          developer
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full flex justify-center"
      >
        <p className="py-3 md:text-l opacity-80 w-full md:w-1/2 font-medium">
          With a passion for technology and innovation, my goal is to create amazing
          digital experiences that bring value to people&apos;s lives.
        </p>
      </motion.div>
      <div className="flex gap-4 justify-center text-2xl py-1">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
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
    </section>
  );
}

export default HeroSection;
