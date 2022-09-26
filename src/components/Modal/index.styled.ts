import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Backdrop = styled.div<{ startExitAnimation: boolean }>`
  position: fixed;
  inset: 0;
  background-color: transparent;
  background-color: #00000050;
  backdrop-filter: blur(${({ theme }) => theme.blur});
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ startExitAnimation }) =>
    startExitAnimation
      ? css`
          animation: ${fadeOut} forwards;
        `
      : css`
          animation: ${fadeIn};
        `};
  animation-duration: ${({ theme }) => theme.animation.durations[300]};
  animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
`;

const dropIn = keyframes`
  from {
    transform: translateY(-60vh);
  }

  to {
    transform: translateY(0);
  }
`;

const dropOut = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(60vh);
  }
`;

export const Container = styled.div<{ startExitAnimation: boolean }>`
  background-color: ${({ theme }) => theme.colors[100]};
  padding: ${({ theme }) => theme.gaps[900]};
  border-radius: ${({ theme }) => theme.border.radius[700]};
  position: relative;

  ${({ startExitAnimation }) =>
    startExitAnimation
      ? css`
          animation: ${dropOut} forwards;
        `
      : css`
          animation: ${dropIn};
        `};
  animation-duration: ${({ theme }) => theme.animation.durations[300]};
  animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.gaps[500]};
  right: ${({ theme }) => theme.gaps[500]};

  background-color: transparent;
  border: none;
  cursor: pointer;

  fill: ${({ theme }) => theme.colors[500]};

  transition-property: fill, transform;
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};
  transition-duration: ${({ theme }) => theme.animation.durations[300]};

  &:focus-visible,
  &:hover {
    fill: ${({ theme }) => theme.colors[900]};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
