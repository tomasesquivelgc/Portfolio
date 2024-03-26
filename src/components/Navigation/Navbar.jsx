import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [navBgColor, setNavBgColor] = useState('rgba(10, 22, 35, 0.9)');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Set background color based on section index
          if (index % 2 === 0) {
            setNavBgColor('rgba(10, 22, 35, 0.9)');
          } else {
            setNavBgColor('rgba(10, 11, 11, 0.6)');
          }
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <motion.nav
        className="w-full fixed z-30 p-4 justify-between hidden md:flex"
        initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        animate={{ backgroundColor: navBgColor }}
        transition={{ duration: 0.5 }}
      >
        <motion.a whileHover={{scale: 1.3}} href="#home"><img className="mt-auto w-8" src="favicon32.png" alt="my logo" /></motion.a>
        <div>
          <ul className="flex gap-6 font-chivo">
            <motion.li initial={{opacity: 0.6}} whileHover={{ scale: 1.3, color: "#4CA8EA", opacity: 1 }}><a href="#projects">Projects</a></motion.li>
            <motion.li initial={{opacity: 0.6}} whileHover={{ scale: 1.3, color: "#4CA8EA", opacity: 1 }}><a href="#skills">Skills</a></motion.li>
            <motion.li initial={{opacity: 0.6}} whileHover={{ scale: 1.3, color: "#4CA8EA", opacity: 1 }}><a href="#about">About</a></motion.li>
            <motion.li initial={{opacity: 0.6}} whileHover={{ scale: 1.3, color: "#4CA8EA", opacity: 1 }}><a href="#recommendations">Recommendations</a></motion.li>
            <motion.li initial={{opacity: 0.6}} whileHover={{ scale: 1.3, color: "#4CA8EA", opacity: 1 }}><a href="#contact">Contact</a></motion.li>
          </ul>
        </div>
      </motion.nav>
      <div className="fixed z-30 md:hidden p-2">
        <button aria-label='mobile menu' className="relative group">
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
      </div>
    </>
      
    
  );
}

export default Navbar;
