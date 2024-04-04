import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section id="home" className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32 items-center">
      <motion.div
      initial={{ opacity: 0, x: -100}}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 0.6 }}
      >
        <h1 className="font-monts font-bold text-4xl md:text-6xl py-1">
          Welcome.<br />My name is&nbsp;
          <span className="text-argBlue">
            Tomás
          </span>
        </h1>
        <h2 className="text-3xl font-medium md:text-4xl py-1">
          <span className="text-argBlue">Full-stack</span>
          {' '}
          developer
        </h2>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 100}}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 0.6}}
      className='w-full flex justify-center'>
        <p className="py-3 md:text-l opacity-80 w-1/2">
          Design. Create. Innovate.
        </p>
      </motion.div>
    </section>
  );
}

export default HeroSection;
