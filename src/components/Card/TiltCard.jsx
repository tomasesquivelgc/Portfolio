import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Card = ({ title, icon }) => {
  const tiltRef = useRef();
  const [tilt, setTilt] = useState({});

  const calculateTilt = (e) => {
    const { left, top, width, height } = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotation = 60 * (x - 0.5);
    const tilt = { x: `${10 * (0.5 - y)}deg`, y: `${rotation}deg` };
    setTilt(tilt);
  };

  return (
    <motion.div
      className="relative w-10 h-10 md:w-28 md:h-28 bg-prussiaBlue rounded-lg shadow-lg overflow-hidden flex"
      ref={tiltRef}
      onMouseMove={calculateTilt}
      onMouseLeave={() => setTilt({})}
      style={{ rotateX: tilt.x, rotateY: tilt.y }}
    >
      <img className="w-full h-full object-cover m-auto" src={icon} alt={title} />
    </motion.div>
  );
};

export default Card;