import styled from "styled-components";

export const MaxWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.gaps[500]};
`;
