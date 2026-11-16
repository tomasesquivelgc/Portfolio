import propTypes from 'prop-types';
import {
  motion, useSpring, useTransform,
} from 'framer-motion';

const MAX_TILT = 9;
const spring = { stiffness: 280, damping: 28, mass: 0.45 };

const Card = ({
  technologies, isInView, fromRight = false,
}) => {
  const pointerX = useSpring(0, spring);
  const pointerY = useSpring(0, spring);

  const rotateX = useTransform(pointerY, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);
  const glare = useTransform([pointerX, pointerY], ([px, py]) => {
    const x = (px + 0.5) * 100;
    const y = (py + 0.5) * 100;
    return `radial-gradient(420px circle at ${x}% ${y}%, rgba(255,255,255,0.16), transparent 46%)`;
  });

  function handlePointerMove(event) {
    if (event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const slide = fromRight ? 72 : -72;

  return (
    <motion.div
      className="w-full md:w-3/4 [perspective:1200px]"
      initial={{ opacity: 0, x: slide }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : slide,
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-2xl border border-white/10 bg-[#16304a] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: glare }}
        />
        <div
          className="relative grid grid-cols-2 md:grid-cols-4 gap-8 w-fit mx-auto"
          style={{ transform: 'translateZ(28px)' }}
        >
          {technologies.map((tech) => (
            <div key={tech.title} className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-24 md:h-24 rounded-xl flex items-center justify-center p-2 bg-richBlack/80 border border-white/5">
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
      </motion.div>
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
