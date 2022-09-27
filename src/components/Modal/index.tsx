import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import SvgIcon from "../SvgIcon";
import * as Styles from "./index.styled";

type Props = {
  children: ReactNode;
  closeHandler: () => void;
};

const Modal = ({ children, closeHandler }: Props) => {
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  const startExitAnimationHandler = () => {
    setStartExitAnimation(true);
  };

  const onAnimationEndHandler = () => {
    startExitAnimation && closeHandler();
  };

  return createPortal(
    <Styles.Backdrop
      onKeyDown={(e) => e.key === "Escape" && startExitAnimationHandler()}
      onClick={startExitAnimationHandler}
      startExitAnimation={startExitAnimation}
      onAnimationEndCapture={onAnimationEndHandler}
    >
      <Styles.Container
        onClick={(e) => e.stopPropagation()}
        startExitAnimation={startExitAnimation}
      >
        <Styles.CloseButton onClick={startExitAnimationHandler}>
          <SvgIcon svgName="close" />
        </Styles.CloseButton>

        {children}
      </Styles.Container>
    </Styles.Backdrop>,
    document.body
  );
};

export default Modal;
