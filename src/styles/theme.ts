import { DefaultTheme } from "styled-components";

const fontBase = 1;

const theme: DefaultTheme = {
  colors: {
    background: "#fafafa",
    color: "#121212",
  },

  fontSizes: {
    extraSmall: `${fontBase * 0.5}rem`,
    small: `${fontBase * 0.75}rem`,
    medium: `${fontBase * 1}rem`,
    large: `${fontBase * 1.25}rem`,
    extraLarge: `${fontBase * 1.5}rem`,
  },

  breakpoints: {
    mobile: "screen and (max-width: 425px)",
    tablet: "screen and (max-width: 768px)",
    desktop: "screen and (max-width: 1024px)",
  },
};

export default theme;
