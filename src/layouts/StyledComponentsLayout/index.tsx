import { ReactNode } from "react";
import GlobalStyle from "src/styles/GlobalStyle.styled";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";

const StyledComponentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledComponentsLayout;
