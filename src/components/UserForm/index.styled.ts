import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  display: flex;
  gap: ${({ theme }) => theme.gaps[700]};
`;

export const AuthProvidersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps[700]};
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Main = styled.main`
  margin: auto;
  max-width: 95%;
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

export const SeparatorText = styled.p`
  margin: ${({ theme }) => theme.gaps[900]} 0;
  text-align: center;
  --line-height: 1px;
  --line-width: 3rem;

  ::before,
  ::after {
    content: "";
    position: relative;
    background-color: ${({ theme }) => theme.colors[900]};
    display: inline-block;
    height: var(--line-height);
    vertical-align: middle;
    width: var(--line-width);
  }

  ::before {
    right: ${({ theme }) => theme.gaps[300]};
    margin-left: -50%;
  }

  ::after {
    left: ${({ theme }) => theme.gaps[300]};
    margin-right: -50%;
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
