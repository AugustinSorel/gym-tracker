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

  outline: ${({ theme }) => theme.borderSizes[500]} solid;
  outline-color: ${({ theme }) => theme.colors.action};
  outline-offset: -5px;

  transition-property: transform outline-offset;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  :hover,
  :focus-visible {
    transform: scale(1.01);
    outline-offset: 5px;
  }

  :active {
    transform: scale(0.99);
  }
`;
