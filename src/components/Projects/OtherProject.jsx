import React from "react";
import { motion } from "framer-motion";


const OtherProject = ({project}) =>{

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    } else {
      window.open(project.codeLink, "_blank");
    }
  };

  return(
    <motion.div
    whileHover={{ translateY: -10 }}
    onClick={handleClick}
    className="w-full hover:cursor-pointer light-title text-left bg-richBlack justify-self-center p-7 h-full flex flex-col justify-between">
      <h4 className="font-monts text-2xl font-medium py-3">
        {project.title}
      </h4>
      <p className="py-3">
        {project.description}
      </p>
      <ul className="flex gap-x-3 py-3">
        {project.technologies.map((tech, index) => (
          <li
          className="font-gentium text-argBlue"
          key={index}>
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  )
};

export default OtherProject;