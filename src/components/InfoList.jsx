import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import {
  skills, languages, games, music, books, blog,
} from '../data/aboutMe';

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
    <div className="md:w-1/3 w-1/2">
      <ul className="flex flex-col gap-2">
        <li className="w-full h-full">
          <motion.button
            className="w-full h-full bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md"
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
            className="w-full h-full bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md"
            type="button"
            onClick={() => openModal(blog)}
          >
            Blog
          </motion.button>
        </li>
        <li className="w-full h-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full h-full bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md"
            type="button"
            onClick={() => openModal(languages)}
          >
            Languages
          </motion.button>
        </li>
        <li className="w-full h-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full h-full bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md"
            type="button"
            onClick={toggleHobbies}
          >
            Hobbies
          </motion.button>
        </li>
        {hobbiesExpanded && (
          <ul>
            <li className="ml-5 border-b hover:cursor-pointer hover:text-argBlue">
              <button type="button" onClick={() => openModal(games)}>
                Gaming
              </button>
            </li>
            <li className="ml-5 border-b hover:cursor-pointer hover:text-argBlue">
              <button type="button" onClick={() => openModal(music)}>
                Music
              </button>
            </li>
            <li className="ml-5 border-b hover:cursor-pointer hover:text-argBlue">
              <button type="button" onClick={() => openModal(books)}>
                Reading
              </button>
            </li>
          </ul>
        )}
      </ul>

      {modalOpen && <Modal handleClose={closeModal} info={modalInfo} />}
    </div>
  );
}

export default InfoList;
