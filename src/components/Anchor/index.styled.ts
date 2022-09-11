import styled from "styled-components";

export const Anchor = styled.a`
  color: ${({ theme }) => theme.colors.action};
  text-decoration: none;
  cursor: pointer;
  position: relative;
  outline: none;

  ::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.action};
    height: ${({ theme }) => theme.border.sizes[300]};
    width: 0;
    left: 0;
    bottom: -3px;
    transition-property: width;
    transition-duration: ${({ theme }) => theme.animation.duration};
    transition-timing-function: ${({ theme }) =>
      theme.animation.timingFunction};
  }

  :focus-visible::after,
  :hover::after {
    width: 100%;
  }
`;
