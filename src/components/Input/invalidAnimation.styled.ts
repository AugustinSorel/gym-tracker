import { css, DefaultTheme, keyframes } from "styled-components";

const slide = keyframes`
  0% {
    transform: translate(0);
  }

  25% {
    transform: translate(var(--slide-offset));
  }

  50% {
    transform: translate(calc(var(--slide-offset)*-1));
  }

  75% {
    transform: translate(var(--slide-offset));
  }

  100% {
    transform: translate(0);
  }
`;

const changeColor = (theme: DefaultTheme) => keyframes`
  0% {
  }

  50% {
    color: ${theme.colors.error};
    border-color: ${theme.colors.error};
  }

  100% {
  }
`;

const invalidAnimation = css`
  --slide-offset: 15px;
  animation-name: ${slide};
  animation-duration: ${({ theme }) => theme.animation.durations[500]};
  animation-timing-function: ${({ theme }) => theme.animation.timingFunction};

  input,
  label {
    animation-name: ${({ theme }) => changeColor(theme)};
    animation-duration: ${({ theme }) => theme.animation.durations[500]};
    animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
  }
`;

export default invalidAnimation;
