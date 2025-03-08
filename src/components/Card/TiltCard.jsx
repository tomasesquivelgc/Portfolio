import propTypes from 'prop-types';
import {
  motion, useMotionValue, useTransform, useSpring,
} from 'framer-motion';

const Card = ({
  technologies, isInView, fromRight = false,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const slidePosition = fromRight ? 200 : -200;

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  // Add spring physics for smoother animation
  const springConfig = { damping: 15, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        opacity: isInView ? 1 : 0,
        rotateX: springRotateX,
        rotateY: springRotateY,
        perspective: 1000,
      }}
      initial={{ x: slidePosition, opacity: 0 }}
      animate={{
        x: isInView ? 0 : slidePosition,
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.17, 0.55, 0.55, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="md:w-3/4 p-4 rounded-2xl bg-gradient-to-br from-prussiaBlue via-argBlue to-prussiaBlue transform-gpu shadow-inner-custom"
    >
      <div className="ring ring-night rounded-2xl p-4 shadow-inner-custom">
        <div className="grid grid-cols-4 gap-8 w-fit mx-auto">
          {technologies.map((tech) => (
            <div key={tech.title} className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-24 md:h-24 rounded-lg flex items-center justify-center p-2 bg-richBlack/70">
                <img
                  className="w-full h-full object-contain"
                  src={tech.icon}
                  alt={tech.title}
                  loading="lazy"
                />
              </div>
              <span className="text-sm md:text-base text-magnolia/80 mt-2 text-center">
                {tech.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

Card.propTypes = {
  isInView: propTypes.bool.isRequired,
  technologies: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      icon: propTypes.string.isRequired,
    }),
  ).isRequired,
  fromRight: propTypes.bool.isRequired,
};
