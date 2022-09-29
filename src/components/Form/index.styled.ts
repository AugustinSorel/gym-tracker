import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 500;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors[500]};
  font-weight: 400;
  margin-bottom: 15%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[500]};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  display: flex;

  & > *:not(h1, h2, button) {
    margin-bottom: ${({ theme }) => theme.gaps[700]};
  }

  button[type="submit"] {
    margin-top: ${({ theme }) => theme.gaps[300]};
  }
`;
