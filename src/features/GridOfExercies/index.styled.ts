import Link from "next/link";
import styled from "styled-components";

export const Grid = styled.main`
  gap: ${({ theme }) => theme.gaps[900]};
  margin-top: ${({ theme }) => theme.gaps[900]};

  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.25fr));

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`;

export const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
  outline: none;
`;
