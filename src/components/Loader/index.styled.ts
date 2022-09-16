import styled, { keyframes } from "styled-components";

const spin = keyframes` 
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  content: "";
  margin-left: auto;

  border: ${({ theme }) => theme.border.sizes[500]} solid;
  border-color: ${({ theme }) => theme.colors[100]};
  border-top-color: transparent;
  border-radius: 50%;

  height: ${({ theme }) => theme.fontSizes[500]};
  width: ${({ theme }) => theme.fontSizes[500]};

  animation-name: ${spin};
  animation-duration: ${({ theme }) => theme.animation.durations[500]};
  animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
  animation-iteration-count: infinite;
`;
