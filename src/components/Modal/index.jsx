import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

const Modal = ({ handleClose, text }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-richBlack p-4 rounded-lg fixed lg:max-w-1/2 w-11/12 h-1/2 m-auto flex flex-col align-center"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p className="font-chivo text-magnolia">{text}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-argBlue text-magnolia font-chivo py-2 px-4 rounded-lg hover:bg-argBlueDark"
          onClick={handleClose}
        >
          Close
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
