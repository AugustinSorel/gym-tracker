import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors[900]};
    color: ${({ theme }) => theme.colors[100]};
    font-family: 'Noto Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.medium};

    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;

export default GlobalStyle;
