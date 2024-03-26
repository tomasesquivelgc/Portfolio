import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }) => (
  <motion.div
    className="fixed top-0 left-0 h-full w-full bg-modal flex items-center justify-center z-40"
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
