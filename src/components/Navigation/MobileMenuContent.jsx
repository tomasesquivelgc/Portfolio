import { Backdrop } from "../Backdrop";
import { motion } from "framer-motion";

const MobileMenuContent = ({handleClose}) => {
  return (
    <Backdrop onClick={handleClose} justify={"justify-start"}>
        <motion.nav
          onClick={(e) => e.stopPropagation()}
          className="bg-richBlack items-center opacity-100 p-4 rounded-lg fixed lg:max-w-1/2 w-2/3 h-full m-auto flex flex-col z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul className="h-full flex flex-col w-full justify-center">
            <li className="py-2"><a className="text-xl border-b-2 py-2 border-argBlue block w-full h-full" href="#home" onClick={handleClose}>Home</a></li>
            <li className="py-2"><a className="text-xl border-b-2 py-2 border-argBlue block w-full h-full" href="#projects" onClick={handleClose}>Projects</a></li>
            <li className="py-2"><a className="text-xl border-b-2 py-2 border-argBlue block w-full h-full" href="#skills" onClick={handleClose}>Skills</a></li>
            <li className="py-2"><a className="text-xl border-b-2 py-2 border-argBlue block w-full h-full" href="#about" onClick={handleClose}>About me</a></li>
            <li className="py-2"><a className="text-xl border-b-2 py-2 border-argBlue block w-full h-full" href="#recommendations" onClick={handleClose}>Recommendations</a></li>
            <li className="py-2"><a className="text-xl border-b-2 py-2 border-argBlue block w-full h-full" href="#contact" onClick={handleClose}>Contact</a></li>
          </ul>
        </motion.nav>
      </Backdrop>
  )
}

export default MobileMenuContent;