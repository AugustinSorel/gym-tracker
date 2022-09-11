import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
  type?: HTMLInputTypeAttribute;
};

export const Input = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))<Props>`
  font: inherit;
  color: ${({ theme }) => theme.colors[500]};
  background-color: transparent;
  border: ${({ theme }) => theme.borderSizes[500]} solid;
  border-color: ${({ theme }) => theme.colors[300]};
  padding: ${({ theme }) => theme.gaps[300]};
  border-radius: ${({ theme }) => theme.borderRadius[500]};
  outline: none;

  transition-property: color, border-color, transform;
  transition-duration: ${({ theme }) => theme.animation.duration};
  transition-timing-function: ${({ theme }) => theme.animation.timingFunction};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors[900]};
    border-color: ${({ theme }) => theme.colors[900]};
    transform: scale(1.01);
  }
`;

export const FormInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: ${({ theme }) => theme.gaps[200]} 0;

  input {
    grid-column: span 2;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors[900]};
  text-transform: capitalize;
`;

export const ErrorText = styled.p`
  flex-grow: 0;
  flex-shrink: 1;
  color: ${({ theme }) => theme.colors.error};
`;
