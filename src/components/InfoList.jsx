import { useState } from 'react';
import Modal from './Modal';

function InfoList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hobbiesExpanded, setHobbiesExpanded] = useState(false);

  const toggleHobbies = () => setHobbiesExpanded(!hobbiesExpanded);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className='md:w-1/3 w-1/2 lg:w-1/4'>
      <ul>
      <li className="w-full h-full">
          <button className='w-full h-full shadow-inner bg-argBlue  tracking-wider text-xl  p-1 md:text-base rounded-md' type="button" onClick={openModal}>Soft Skills</button>
        </li>
        <li className="hover:cursor-pointer hover:text-argBlue">
          <button type="button" onClick={openModal}>Blog</button>
        </li>
        <li className="hover:cursor-pointer hover:text-argBlue">
          <button type="button" onClick={openModal}>Languages</button>
        </li>
        <li className="hover:cursor-pointer hover:text-argBlue">
          <button type="button" onClick={toggleHobbies}>Hobbies</button>
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

      {modalOpen && <Modal handleClose={closeModal} text="Modal Content" />}
    </div>
  );
}

export default InfoList;
