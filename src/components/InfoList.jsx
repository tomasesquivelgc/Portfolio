import { useState } from 'react';
import Modal from './Modal';

function InfoList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hobbiesExpanded, setHobbiesExpanded] = useState(false);

  const toggleHobbies = () => setHobbiesExpanded(!hobbiesExpanded);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="opacity-80">
      <ul>
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
        <li className="hover:cursor-pointer hover:text-argBlue">
          <button type="button" onClick={openModal}>Music</button>
        </li>
        <li className="hover:cursor-pointer hover:text-argBlue">
          <button type="button" onClick={openModal}>Music</button>
        </li>
        <li className="hover:cursor-pointer hover:text-argBlue">
          <button type="button" onClick={openModal}>Languages</button>
        </li>
      </ul>

      {modalOpen && <Modal handleClose={closeModal} text="Modal Content" />}
    </div>
  );
}

export default InfoList;
