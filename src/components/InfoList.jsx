import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { skills } from '../data/aboutMe';

function InfoList() {
  const info = skills;
  const [modalOpen, setModalOpen] = useState(false);
  const [hobbiesExpanded, setHobbiesExpanded] = useState(false);

  const toggleHobbies = () => setHobbiesExpanded(!hobbiesExpanded);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className='md:w-1/3 w-1/2 lg:w-1/4'>
      <ul className='flex flex-col gap-2'>
      <li className="w-full h-full">
          <motion.button
            className='w-full h-full bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md' type="button" onClick={openModal}
            whileHover={{ scale: 1.1 }}
          >
            Soft Skills
          </motion.button>
        </li>
        <li className="w-full h-full">
          <motion.button
          whileHover={{ scale: 1.1 }}
          className='w-full h-full bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md' type="button" onClick={openModal}>Blog</motion.button>
        </li>
        <li className="w-full h-full">
          <motion.button
          whileHover={{ scale: 1.1 }}
          className='w-full h-full bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md' type="button" onClick={openModal}>Languages</motion.button>
        </li>
        <li className="w-full h-full">
          <motion.button
          whileHover={{ scale: 1.1 }}
          className='w-full h-full bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md' type="button" onClick={toggleHobbies}>Hobbies</motion.button>
        </li>
        {hobbiesExpanded && (
          <ul>
            <li className="ml-5 border-b hover:cursor-pointer hover:text-argBlue">
              <button type="button" onClick={openModal}>Gaming</button>
            </li>
            <li className="ml-5 border-b hover:cursor-pointer hover:text-argBlue">
              <button type="button" onClick={openModal}>Music</button>
            </li>
            <li className="ml-5 border-b hover:cursor-pointer hover:text-argBlue">
              <button type="button" onClick={openModal}>Reading</button>
            </li>
          </ul>
        )}
        
      </ul>

      {modalOpen && <Modal handleClose={closeModal} info={info} />}
    </div>
  );
}

export default InfoList;
