import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink className="nav-link" to={'#'} onClick={() => setShowModal(true)}>Log In</NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
