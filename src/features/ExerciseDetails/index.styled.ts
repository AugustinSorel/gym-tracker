import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 75vh;
  gap: ${({ theme }) => theme.gaps[900]};
  margin-top: ${({ theme }) => theme.gaps[900]};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 100%;
    grid-template-rows: 75vh 75vh;

    & > *:first-child {
      grid-row-start: 2;
    }
  }
`;
