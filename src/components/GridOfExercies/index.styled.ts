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
    opacity: 0.2;

    --width: 20%;

    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.colors[100]} 50%,
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
    background-color: ${({ theme }) => theme.colors[400]};
  }

  &:hover svg {
    opacity: 1;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ItemSkeleton = styled.div`
  background-color: ${({ theme }) => theme.colors[300]};
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.border.radius[300]};
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & > * {
    padding: ${({ theme }) => theme.gaps[200]};
  }
`;

export const ExerciseName = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[600]};
  flex: 1;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors[400]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[200]};
  fill: currentColor;
  padding: ${({ theme }) => theme.gaps[200]};

  svg {
    opacity: 0;
    cursor: move;
  }
`;

export const HeaderSkeleton = styled(Header)`
  height: ${({ theme }) => theme.fontSizes[900]};
`;

export const Graph = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors[400]};
  margin: ${({ theme }) => theme.gaps[900]};
`;
