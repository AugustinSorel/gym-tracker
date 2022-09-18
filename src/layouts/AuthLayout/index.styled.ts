import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Main = styled.main`
  margin: auto;
  max-width: 85%;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.gaps[100]};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors[500]};
  font-weight: 400;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[500]};
    text-align: center;
  }
`;

export const NavigationText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors[900]};
  font-weight: 400;
`;

const circle = css`
  &::before {
    content: "";
    --circle-radius: 10rem;
    position: absolute;
    left: calc(50% - var(--circle-radius) / 2);
    top: calc(50% - var(--circle-radius) / 2);
    width: var(--circle-radius);
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.action};
    animation: breath 5s ${({ theme }) => theme.animation.timingFunction}
      infinite alternate-reverse;

    @keyframes breath {
      from {
        transform: scale(1);
        box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.action};
      }
      to {
        transform: scale(1.1);
        box-shadow: 0 0 15px 10px ${({ theme }) => theme.colors.action};
      }
    }
  }
`;

const glass = css`
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 50%;
    backdrop-filter: blur(10px);
  }
`;

export const CircleScreen = styled.div`
  background-color: ${({ theme }) => theme.colors[200]};
  position: relative;
  width: 50%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }

  ${circle}
  ${glass}
`;
