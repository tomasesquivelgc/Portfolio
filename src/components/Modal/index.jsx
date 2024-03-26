import { useEffect } from 'react';
import PropTypes from 'prop-types';
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
        className="bg-richBlack opacity-100 p-4 rounded-lg fixed lg:max-w-1/2 w-11/12 h-1/2 m-auto flex flex-col align-center z-50"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p className="">{text}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-argBlue py-2 px-4 rounded-lg hover:bg-argBlueDark"
          onClick={handleClose}
        >
          Close
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Modal;
