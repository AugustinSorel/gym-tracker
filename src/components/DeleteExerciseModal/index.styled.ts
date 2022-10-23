import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[900]};

  button {
    width: 100%;
  }

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.error};
    outline-color: ${({ theme }) => theme.colors.error};
  }
`;
