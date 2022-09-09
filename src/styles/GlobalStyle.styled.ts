import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.color};
    font-family: 'Noto Sans', sans-serif;
  }
`;

export default GlobalStyle;
