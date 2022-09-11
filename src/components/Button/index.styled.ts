import styled from "styled-components";

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

export const CallToAction = styled(Button)`
  background-color: ${({ theme }) => theme.colors.action};
  padding: ${({ theme }) => theme.gaps[300]};
  border-radius: ${({ theme }) => theme.borderRadius[500]};

  --offset-distance: 3px;
  outline: ${({ theme }) => theme.borderSizes[500]} solid;
  outline-color: ${({ theme }) => theme.colors.action};
  outline-offset: calc(var(--offset-distance) * -1);

  transition-property: transform outline-offset;
  transition-duration: ${({ theme }) => theme.animation.duration};
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};

  :hover,
  :focus-visible {
    transform: scale(1.01);
    outline-offset: var(--offset-distance);
  }

  :active {
    transform: scale(0.99);
  }
`;
