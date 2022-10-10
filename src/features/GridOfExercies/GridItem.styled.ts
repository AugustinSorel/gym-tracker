import styled, { keyframes } from "styled-components";

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

export const Container = styled.div<{ delay: number }>`
  background-color: ${({ theme }) => theme.colors[200]};
  aspect-ratio: 1;
  cursor: pointer;
  outline: none;
  border-radius: ${({ theme }) => theme.border.radius[300]};
  overflow: hidden;

  display: flex;
  flex-direction: column;

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

    background-color: ${({ theme }) => theme.colors[300]};

    header {
      background-color: ${({ theme }) => theme.colors[400]};
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors[300]};
  padding: ${({ theme }) => theme.gaps[200]};

  transition-property: background-color;
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};
  transition-duration: ${({ theme }) => theme.animation.durations[300]};
`;

export const ExerciseName = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[600]};
  white-space: nowrap;
`;
