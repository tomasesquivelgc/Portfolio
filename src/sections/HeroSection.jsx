import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section id="home" className="bg-night min-h-screen flex flex-col justify-center text-center px-10 py-20 md:px-16 lg:px-32 items-center">
      <motion.div
      initial={{ opacity: 0, x: -100}}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 1 }}
      >
        <h1 className="font-monts font-bold w-full text-4xl md:text-6xl py-3">
         Tomás&nbsp;
         <span className='text-argBlue'>Esquivel</span>
         
        </h1>
        <h2 className="text-2xl font-medium md:text-4xl py-1">
          <span className="text-argBlue">Full-stack</span>
          {' '}
          developer
        </h2>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 100}}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 1}}
      className='w-full flex justify-center'>
        <p className="py-1 md:text-l opacity-80 w-full md:w-1/2">
          Experienced in remote team projects and adapting to new challenges.
          Eager to collaborate and build new things.
        </p>
      </motion.div>
    </section>
  );
}

export default HeroSection;
