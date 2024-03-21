import React, { useState } from 'react';
import Modal from './Modal';

function InfoList() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <ul>
        <li>Hobbies</li>
        <li>Soft Skills</li>
        <li>Blog</li>
        <li>Languages</li>
      </ul>

      <button onClick={openModal}>Open Modal</button>

      {modalOpen && <Modal handleClose={closeModal} text="Modal Content" />}
    </div>
  );
}

export default InfoList;