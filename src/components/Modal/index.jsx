import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import ModalInfo from './ModalInfo';

const Modal = ({ handleClose, info }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return (
    <Backdrop onClick={handleClose} justify="justify-center">
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-richBlack p-4 opacity-100 rounded-lg fixed lg:max-w-1/2 w-11/12 h-full md:h-5/6 m-auto flex flex-col align-center justify-between z-50"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalInfo info={info} />
          <div className='flex justify-center'>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="bg-argBlue px-4 py-2 rounded-lg hover:bg-argBlueDark w-1/2 align-middle"
              onClick={handleClose}
            >
              Close
            </motion.button> 
          </div>
            
      </motion.div>
    </Backdrop>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Modal;
