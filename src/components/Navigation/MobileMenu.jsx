import { useState } from 'react';
import { motion } from 'framer-motion';
import MobileMenuContent from './MobileMenuContent';

const MobileMenu = ({ navBgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBackdropClose =(e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed z-30 md:hidden p-2">
        <button onClick={handleClick} aria-label='mobile menu' className="relative group z-50">
          <motion.div 
          initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          animate={{ backgroundColor: navBgColor }}
          transition={{ duration: 0.5 }}
          className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-argBlue ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-magnolia h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
              <div className="bg-magnolia h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
              <div className="bg-magnolia h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

              <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div className="absolute bg-magnolia h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div className="absolute bg-magnolia h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </motion.div>
        </button>
        {isOpen && <MobileMenuContent handleClose={handleBackdropClose} />}
    </div>
  );
}

export default MobileMenu;