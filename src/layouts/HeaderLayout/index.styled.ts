import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;
  gap: ${({ theme }) => theme.gaps[500]};

  background-color: ${({ theme }) => theme.colors[200]};
  padding: ${({ theme }) => theme.gaps[500]};

  position: relative;

  box-shadow: 0 0 0 100vmax ${({ theme }) => theme.colors[200]};
  clip-path: inset(0 -100vmax);
`;

export const Title = styled.h1`
  text-transform: capitalize;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Name = styled.p``;

export const Avatar = styled.img.attrs({ alt: "user profile picture" })`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
