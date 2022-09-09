import { DefaultTheme } from "styled-components";

const fontBase = 1;

const theme: DefaultTheme = {
  colors: {
    "100": "#E1E1E1",
    "200": "#CFCFCF",
    "300": "#B1B1B1",
    "400": "#9E9E9E",
    "500": "#7E7E7E",
    "600": "#626262",
    "700": "#515151",
    "800": "#3B3B3B",
    "900": "#222222",
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
