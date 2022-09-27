import styled, { keyframes } from "styled-components";

export const Grid = styled.main`
  gap: ${({ theme }) => theme.gaps[900]};
  margin-top: ${({ theme }) => theme.gaps[900]};

  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, 300px);

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`;

const lineMove = keyframes`
  from {
    left: calc(var(--width) * -1);
  }

  to {
    left: 100%;
  }
`;

export const GridSkeleton = styled(Grid)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors[400]};
    opacity: 0.2;

    --width: 10%;

    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.colors[500]} 50%,
      transparent 100%
    );
    top: 0;
    height: 100%;
    width: var(--width);

    animation-name: ${lineMove};
    animation-duration: ${({ theme }) => theme.animation.durations[500]};
    animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
    animation-iteration-count: infinite;
  }
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

export const ItemSkeleton = styled.div`
  background-color: ${({ theme }) => theme.colors[300]};
  aspect-ratio: 1;
  cursor: pointer;
  outline: none;
`;

export const Title = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
`;
