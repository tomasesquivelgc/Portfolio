import { Backdrop } from "../Backdrop";
import { motion } from "framer-motion";

const MobileMenuContent = ({handleClose}) => {
  return (
    <Backdrop onClick={handleClose} justify={"justify-start"}>
        <motion.nav
          onClick={(e) => e.stopPropagation()}
          className="bg-richBlack  opacity-100 p-4 rounded-lg fixed lg:max-w-1/2 w-11/12 h-1/2 m-auto flex flex-col align-center z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>About me</li>
            <li>Recommendations</li>
            <li>Contact</li>
          </ul>
        </motion.nav>
      </Backdrop>
  )
}

export default MobileMenuContent;