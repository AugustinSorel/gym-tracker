import styled, { keyframes } from "styled-components";

export const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.gaps[900]};
  margin-top: ${({ theme }) => theme.gaps[900]};
`;

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.8);
  }
`;

export const Item = styled.div<{ delay: number }>`
  background-color: ${({ theme }) => theme.colors[300]};
  aspect-ratio: 1;
  cursor: pointer;
  outline: none;

  animation: ${scaleUp}, ${fade} both;
  animation-duration: ${({ theme }) => theme.animation.durations[300]};
  animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
  animation-delay: ${({ delay }) => delay}ms;

  transition-property: transform, background-color;
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};
  transition-duration: ${({ theme }) => theme.animation.durations[300]};

  &:focus-visible,
  &:hover {
    transform: scale(1.02);
    background-color: ${({ theme }) => theme.colors[400]};
  }

  &:active {
    transform: scale(0.98);
  }
`;
