import React, { useState } from 'react';
import Modal from './Modal';

function InfoList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hobbiesExpanded, setHobbiesExpanded] = useState(false);

  const toggleHobbies = () => setHobbiesExpanded(!hobbiesExpanded);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <ul>
        <li className='hover:cursor-pointer hover:text-argBlue'>
          <span onClick={toggleHobbies}>Hobbies</span>
        </li>
        {hobbiesExpanded && (
          <ul>
            <li className='ml-5 border-b hover:cursor-pointer hover:text-argBlue' onClick={openModal}>Gaming</li>
            <li className='ml-5 border-b hover:cursor-pointer hover:text-argBlue' onClick={openModal}>Music</li>
            <li className='ml-5 border-b hover:cursor-pointer hover:text-argBlue' onClick={openModal}>Reading</li>
          </ul>
        )}
        <li className='hover:cursor-pointer hover:text-argBlue' onClick={openModal}>Soft Skills</li>
        <li className='hover:cursor-pointer hover:text-argBlue' onClick={openModal}>Blog</li>
        <li className='hover:cursor-pointer hover:text-argBlue' onClick={openModal}>Languages</li>
      </ul>

      {modalOpen && <Modal handleClose={closeModal} text="Modal Content" />}
    </div>
  );
}

export default InfoList;
