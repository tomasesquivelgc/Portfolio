import { useState } from 'react';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';
import MobileMenuContent from './MobileMenuContent';

const MobileMenu = ({ navBgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBackdropClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed z-30 md:hidden p-2">
      <button type="button" onClick={handleClick} aria-label="mobile menu" className="relative group z-50">
        <motion.div
          initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          animate={{ backgroundColor: navBgColor }}
          transition={{ duration: 0.5 }}
          className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-argBlue ring-opacity-30 duration-200 shadow-md"
        >
          {isOpen ? (
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute items-center justify-between transform top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12"
              >
                <div className="absolute bg-magnolia h-[2px] w-5 transform rotate-45" />
                <div className="absolute bg-magnolia h-[2px] w-5 transform -rotate-45" />
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
            >
              <div className="bg-magnolia h-[2px] w-7 " />
              <div className="bg-magnolia h-[2px] w-7 " />
              <div className="bg-magnolia h-[2px] w-7 " />
            </motion.div>
          )}
        </motion.div>
      </button>
      {isOpen && <MobileMenuContent handleClose={handleBackdropClose} />}
    </div>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  navBgColor: propTypes.string.isRequired,
};
