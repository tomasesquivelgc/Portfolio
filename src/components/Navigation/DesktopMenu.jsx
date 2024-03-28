import { motion } from "framer-motion";

const DesktopMenu =({ navBgColor }) => {
  return (
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
  )
}

export default DesktopMenu;