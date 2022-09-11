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
    height: ${({ theme }) => theme.borderSizes[300]};
    width: 0;
    left: 0;
    bottom: -3px;
    transition: width 200ms ease-in-out;
  }

  :focus-visible::after,
  :hover::after {
    width: 100%;
  }
`;
