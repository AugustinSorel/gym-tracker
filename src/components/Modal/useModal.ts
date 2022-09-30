import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsShow] = useState(false);
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  const open = () => {
    setStartExitAnimation(false);
    setIsShow(true);
  };

  const close = () => {
    setStartExitAnimation(true);
    setTimeout(() => setIsShow(false), 1000);
  };

  return { close, open, isOpen, startExitAnimation };
};

export default useModal;
