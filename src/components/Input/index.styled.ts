import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import invalidAnimation from "./invalidAnimation.styled";

type Props = {
  type?: HTMLInputTypeAttribute;
};

export const Input = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))<Props>`
  font: inherit;
  color: ${({ theme }) => theme.colors[500]};
  background-color: transparent;
  border: ${({ theme }) => theme.border.sizes[500]} solid;
  border-color: ${({ theme }) => theme.colors[300]};
  padding: ${({ theme }) => theme.gaps[300]};
  border-radius: ${({ theme }) => theme.border.radius[500]};
  outline: none;

  transition-property: color, border-color, transform;
  transition-duration: ${({ theme }) => theme.animation.durations[300]};
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors[900]};
    border-color: ${({ theme }) => theme.colors[900]};
    transform: scale(1.01);
  }
`;

type FormInputContainerProps = {
  isValid: boolean;
};

export const FormInputContainer = styled.div<FormInputContainerProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.gaps[200]};

  ${({ isValid }) => !isValid && invalidAnimation}

  input {
    grid-column: span 2;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors[900]};
  text-transform: capitalize;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error};
  animation-name: start;
  animation-duration: ${({ theme }) => theme.animation.durations[500]};
  animation-timing-function: ${({ theme }) => theme.animation.timingFunction};

  @keyframes start {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &::before {
    content: "- ";
  }
`;

export const EditableText = styled.p`
  cursor: pointer;
  user-select: none;
`;

export const EditableInput = styled(Input)`
  width: 100%;
  padding: 0;
  background-color: ${({ theme }) => theme.colors[400]};
`;
