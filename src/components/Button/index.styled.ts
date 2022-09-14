import styled, { css, keyframes } from "styled-components";

type Props = {
  type?: "submit" | "button" | "reset";
};

export const Button = styled.button.attrs(({ type }) => ({
  type: type || "button",
}))<Props>`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: transparent;
`;

export const CallToAction = styled(Button)<{ isLoading: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.action};
  padding: ${({ theme }) => theme.gaps[300]};
  border-radius: ${({ theme }) => theme.border.radius[500]};

  --offset-distance: 3px;
  outline: ${({ theme }) => theme.border.sizes[500]} solid;
  outline-color: ${({ theme }) => theme.colors.action};
  outline-offset: calc(var(--offset-distance) * -1);

  transition-property: transform, outline-offset;
  transition-duration: ${({ theme }) => theme.animation.durations[300]};
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};

  &:hover,
  &:focus-visible {
    transform: scale(1.01);
    outline-offset: var(--offset-distance);
  }

  &:active {
    transform: scale(0.99);
  }

  ${({ isLoading }) => isLoading && loader};
`;

const spin = keyframes` 
  from {
    transform: translateY(-50%) rotate(0);
  }

  to {
    transform: translateY(-50%) rotate(360deg);
  }
`;

const loader = css`
  &::after {
    content: "";

    position: absolute;
    right: ${({ theme }) => theme.gaps[300]};
    top: 50%;

    border: ${({ theme }) => theme.border.sizes[500]} solid;
    border-color: ${({ theme }) => theme.colors[100]};
    border-top-color: transparent;
    border-radius: 50%;

    height: ${({ theme }) => theme.fontSizes[500]};
    aspect-ratio: 1 / 1;

    animation-name: ${spin};
    animation-duration: ${({ theme }) => theme.animation.durations[500]};
    animation-timing-function: ${({ theme }) => theme.animation.timingFunction};
    animation-iteration-count: infinite;
  }
`;
