import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import {
  skills, languages, games, music, books, blog,
} from '../data/aboutMe';
import { IoIosArrowDown } from "react-icons/io";

function InfoList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hobbiesExpanded, setHobbiesExpanded] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const toggleHobbies = () => setHobbiesExpanded(!hobbiesExpanded);

  const openModal = (info) => {
    setModalInfo(info);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className=" w-full min-w-min py-1">
      <ul className="grid grid-cols-2 gap-4 text-night font-medium">
        <li className="w-full h-full">
          <motion.button
            className="w-full h-full bg-argBlue border tracking-wider text-xl  p-1 md:text-base rounded-md"
            type="button"
            onClick={() => openModal(skills)}
            whileHover={{ scale: 1.1 }}
          >
            Soft Skills
          </motion.button>
        </li>
        <li className="w-full h-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full h-full bg-argBlue border tracking-wider text-xl  p-1 md:text-base rounded-md"
            type="button"
            onClick={() => openModal(blog)}
          >
            Blog
          </motion.button>
        </li>
        <li className="w-full h-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full h-full bg-argBlue border tracking-wider text-xl  p-1 md:text-base rounded-md"
            type="button"
            onClick={() => openModal(languages)}
          >
            Languages
          </motion.button>
        </li>
        <li className="w-full h-full relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full h-full bg-argBlue border tracking-wider text-xl  p-1 md:text-base rounded-md"
            type="button"
            onClick={toggleHobbies}
          >
            Hobbies
          <IoIosArrowDown className={`inline transition-all ${hobbiesExpanded ? "rotate-180" : ""}`} />
          </motion.button>
          <AnimatePresence>
            {hobbiesExpanded && (
              <motion.ul
                className='absolute left-0 top-100 flex flex-col gap-1 py-1'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.li
                  className="border"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                  whileHover={{scale: 1.1}}
                  type="button" className="w-full h-full bg-argBlue border tracking-wider text-xl  p-1 md:text-base rounded-md" onClick={() => openModal(games)}>
                    Gaming
                  </motion.button>
                </motion.li>
                <motion.li
                  className="border-b"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.button
                  whileHover={{scale: 1.1}}
                  className="w-full h-full bg-argBlue border tracking-wider text-xl  p-1 md:text-base rounded-md" type="button" onClick={() => openModal(music)}>
                    Music
                  </motion.button>
                </motion.li>
                <motion.li
                  className="border-b"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <motion.button
                  whileHover={{scale: 1.1}}
                  className="w-full h-full bg-argBlue border tracking-wider text-xl  p-1 md:text-base rounded-md" type="button" onClick={() => openModal(books)}>
                    Reading
                  </motion.button>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      </ul>
      <AnimatePresence>
        {modalOpen && <Modal handleClose={closeModal} info={modalInfo} />}
      </AnimatePresence>
    </div>
  );
}

export default InfoList;
