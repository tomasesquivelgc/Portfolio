import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32 items-center">
      <h1 className="font-monts font-bold text-4xl md:text-6xl py-3">
        <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        >
          Welcome.
        </motion.span>
        
        <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            My name is&nbsp;
          </motion.span>
        <motion.span
          className="text-argBlue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 2 }}
        >
          Tomás
        </motion.span>
      </h1>
      <motion.h2
        initial={{ opacity: 0, size: 0 }}
        animate={{ opacity: 1, size: 1 }}
        transition={{ duration: 2, delay: 3.5 }}
        className="font-gentium text-3xl md:text-4xl italic py-3"
      >
        <span className="text-argBlue">Software</span>
        {' '}
        developer
      </motion.h2>
      <p className="py-3 md:text-l opacity-80 w-1/2">
        Design. Create. Innovate.
      </p>
    </section>
  );
}

export default HeroSection;
