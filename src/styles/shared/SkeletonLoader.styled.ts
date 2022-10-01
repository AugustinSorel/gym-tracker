import { css, keyframes } from "styled-components";

const lineMove = keyframes`
  from {
    left: calc(var(--width) * -1);
  }

  to {
    left: 100%;
  }
`;

const SkeletonLoader = css`
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

export default SkeletonLoader;
