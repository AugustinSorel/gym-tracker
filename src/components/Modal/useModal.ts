import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  const openModal = () => {
    setStartExitAnimation(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setStartExitAnimation(true);
    setTimeout(() => setShowModal(false), 1000);
  };

  return {
    closeModal,
    openModal,
    showModal,
    startExitAnimation,
  };
};

export default useModal;
