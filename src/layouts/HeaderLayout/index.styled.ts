import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;
  gap: ${({ theme }) => theme.gaps[500]};

  --color: hsla(0, 0%, 11%, 50%);

  background-color: var(--color);
  backdrop-filter: blur(${({ theme }) => theme.blur});
  padding: ${({ theme }) => theme.gaps[500]} 0;

  position: sticky;
  top: 0;
  z-index: 1;

  box-shadow: 0 0 0 100vmax var(--color);
  clip-path: inset(0 -100vmax);
`;

export const Title = styled.h1`
  text-transform: capitalize;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
    left: 0;
    transform: translate(0, -50%);
  }
`;

export const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Name = styled.p`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

export const Avatar = styled.img.attrs({ alt: "user profile picture" })`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
