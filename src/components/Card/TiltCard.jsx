import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(0.25, 0.1, 0.25, 1)",    // Easing on enter/exit.
}

const Card = ({ title, icon }) => {
  return (
    <motion.div
    drag
    dragElastic={0.1}
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center w-full h-full">
      <Tilt options={defaultOptions} className="relative w-14 h-14 md:w-20 md:h-20 rounded-lg justify-center shadow-lg overflow-hidden p-2 flex bg-gradient-to-br from-richBlack via-argBlue to-magnolia">
        <img className="w-full h-full object-cover m-auto" src={icon} alt={title} loading="lazy" />
      </Tilt>
      <h3 className="text-center text-lg md:text-xl font-chivo text-magnolia opacity-80 py-3">{title}</h3>
    </motion.div>
    
  );
};

export default Card;