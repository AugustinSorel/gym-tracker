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
