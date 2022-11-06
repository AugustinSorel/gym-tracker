import styled from "styled-components";

export const ListItem = styled.li`
  flex: 1;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0 ${({ theme }) => theme.gaps[500]};

    svg {
      grid-row: span 2;
    }
  }
`;

export const Svg = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
})`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.colors[100]};
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.colors.action},
    hsl(200, 100%, 60%)
  );
  padding: ${({ theme }) => theme.gaps[200]};
  border-radius: ${({ theme }) => theme.border.radius[700]};
`;

export const ListItemTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[500]};
  text-transform: capitalize;
  margin-top: ${({ theme }) => theme.gaps[200]};
`;

export const ListItemParagraph = styled.p`
  color: ${({ theme }) => theme.colors[500]};
  font-size: ${({ theme }) => theme.fontSizes[400]};
  margin-top: ${({ theme }) => theme.gaps[200]};
`;
