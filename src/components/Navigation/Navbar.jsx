import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

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
      <DesktopMenu navBgColor={navBgColor} />
      <MobileMenu navBgColor={navBgColor} />
    </>

  );
};

export default Navbar;
