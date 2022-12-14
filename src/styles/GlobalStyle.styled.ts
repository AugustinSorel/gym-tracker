import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body {
    background-color: ${({ theme }) => theme.colors[100]};
    color: ${({ theme }) => theme.colors[900]};
    font-family: 'Noto Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[500]};
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: ${({ theme }) => theme.fontSizes[400]};
    }
  }
`;

export default GlobalStyle;
