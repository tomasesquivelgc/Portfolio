import { motion } from 'framer-motion';

function HeroSection() {
  const sentence1 = 'Welcome.';
  const sentence2 = 'My name is ';
  return (
    <section className="bg-night min-h-screen flex flex-col justify-center text-center p-4 md:p-16">
      <motion.h1
        className="font-monts font-extrabold text-4xl md:text-6xl py-3"
      >
        {sentence1.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        <br />
        {sentence2.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 1.1 }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          className="text-argBlue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 2 }}
        >
          Tomás
        </motion.span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, size: 0 }}
        animate={{ opacity: 1, size: 1 }}
        transition={{ duration: 2, delay: 3.5 }}
        className="font-gentium text-3xl md:text-4xl text-magnolia italic py-3"
      >
        <span className="text-argBlue">Software</span>
        {' '}
        developer
      </motion.h2>
      <p className="font-chivo py-3 md:text-l">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 3 }}
        >
          Create.
        </motion.span>
        {' '}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.7, duration: 3 }}
        >
          Design.
        </motion.span>
        {' '}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.2, duration: 3 }}
        >
          Innovate.
        </motion.span>
      </p>
    </section>
  );
}

export default HeroSection;
