import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Main = styled.main`
  margin: auto;
  max-width: 95%;

  button {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.gaps[100]};
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors[500]};
  font-weight: 400;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[500]};
  }
`;

export const SigningOutContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[900]};

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.error};
    outline-color: ${({ theme }) => theme.colors.error};
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15% 0;
  fill: ${({ theme }) => theme.colors[500]};

  svg {
    width: 100px;
    height: 100px;
  }
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
        box-shadow: 0 0 20px 5px ${({ theme }) => theme.colors.action};
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
