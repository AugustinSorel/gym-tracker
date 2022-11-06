import styled from "styled-components";
import { MaxWidthContainer } from "src/layouts/MaxWidthLayout/index.styled";
import Link from "next/link";

export const Container = styled(MaxWidthContainer)`
  max-width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: max(${({ theme }) => theme.gaps[900]}, 10%);
  padding-bottom: max(${({ theme }) => theme.gaps[900]}, 10%);
`;

export const Title = styled.h1`
  font-size: 7rem;
  line-height: 7rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[900]};
    line-height: normal;
  }
`;

export const Span = styled.span`
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.colors.action},
    hsl(200, 100%, 70%)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Paragraph = styled.p`
  margin-top: 3rem;
  font-size: ${({ theme }) => theme.fontSizes[900]};
  color: ${({ theme }) => theme.colors[600]};
  max-width: 75%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 100%;
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSizes[500]};
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 4rem;
  max-width: 75%;
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
    margin: auto 0;
    gap: 1rem;
  }
`;

export const LinksContainer = styled.div`
  margin-top: 3rem;
  gap: ${({ theme }) => theme.gaps[500]};
  display: flex;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 2rem;
  }
`;

export const Anchor = styled(Link)`
  color: ${({ theme }) => theme.colors[100]};
  padding: ${({ theme }) => theme.gaps[500]};
  text-transform: capitalize;
  width: 200px;
  border-radius: ${({ theme }) => theme.border.radius[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  text-align: center;
  transition-property: scale;
  transition-duration: ${({ theme }) => theme.animation.durations[300]};
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};
  outline: none;

  &:hover,
  &:focus-visible {
    scale: 1.02;
  }

  &:active {
    scale: 0.98;
  }

  &:first-child {
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.action},
      hsl(200, 100%, 70%)
    );
  }

  &:nth-child(2) {
    background-color: #000;
    color: #fff;
    outline-color: #000;
  }
`;

export const AnchorText = styled.p`
  flex: 1;
`;
