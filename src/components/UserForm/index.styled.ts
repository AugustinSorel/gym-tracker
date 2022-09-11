import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15% 0;
  display: flex;
  gap: ${({ theme }) => theme.gaps[700]};

  button[type="submit"] {
    margin-top: ${({ theme }) => theme.gaps[500]};
  }
`;
