import styled, { css } from "styled-components";

type Props = {
  type?: "submit" | "button" | "reset";
};

const callToActionAnimation = css`
  --offset-distance: 3px;
  outline: ${({ theme }) => theme.border.sizes[500]} solid;
  outline-color: ${({ theme }) => theme.colors.action};
  outline-offset: calc(var(--offset-distance) * -1);

  transition-property: transform, outline-offset;
  transition-duration: ${({ theme }) => theme.animation.durations[300]};
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};

  &:hover,
  &:focus-visible {
    transform: scale(1.01);
    outline-offset: var(--offset-distance);
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const Button = styled.button.attrs(({ type }) => ({
  type: type || "button",
}))<Props>`
  cursor: pointer;
  font: inherit;
  color: inherit;
  border: none;
  background-color: transparent;
`;

export const CallToAction = styled(Button)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.action};
  padding: ${({ theme }) => theme.gaps[300]};
  border-radius: ${({ theme }) => theme.border.radius[500]};

  ${callToActionAnimation}
`;

export const CallToActionText = styled.p`
  grid-column-start: 2;
  color: ${({ theme }) => theme.colors[100]};
`;

export const Text = styled.p``;

const AuthProviderButton = styled(Button)`
  padding: ${({ theme }) => theme.gaps[300]};
  border-radius: ${({ theme }) => theme.border.radius[500]};
  display: flex;
  align-items: center;

  ${callToActionAnimation}

  p {
    flex: 1;
  }
`;

export const GoogleButton = styled(AuthProviderButton)`
  background-color: #fff;
  color: #000;
  outline-color: #fff;
`;

export const GitHubButton = styled(AuthProviderButton)`
  background-color: #000;
  color: #fff;
  outline-color: #000;
`;

export const NewExerciseButton = styled(Button)`
  position: fixed;
  bottom: ${({ theme }) => theme.gaps[900]};
  right: ${({ theme }) => theme.gaps[900]};
  outline: none;
  height: 50px;
  width: 50px;
  font-size: ${({ theme }) => theme.fontSizes[900]};
  font-weight: 500;
  backdrop-filter: blur(${({ theme }) => theme.blur});

  color: ${({ theme }) => theme.colors[500]};
  border: ${({ theme }) => theme.border.sizes[700]} solid;
  border-color: ${({ theme }) => theme.colors[500]};
  border-radius: 50%;

  transition-property: color, border-color, transform;
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};
  transition-duration: ${({ theme }) => theme.animation.durations[300]};

  line-height: ${({ theme }) => theme.fontSizes[900]};
  text-align: center;

  &:focus-visible,
  &:hover {
    border-color: ${({ theme }) => theme.colors[900]};
    color: ${({ theme }) => theme.colors[900]};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
