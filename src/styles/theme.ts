import { DefaultTheme } from "styled-components";

const fontBase = 1;
const gapBase = 1;
const colorBase = 50;

const theme: DefaultTheme = {
  colors: {
    "100": `hsl(0, 0%, ${colorBase * 0.2}%)`,
    "200": `hsl(0, 0%, ${colorBase * 0.4}%)`,
    "300": `hsl(0, 0%, ${colorBase * 0.6}%)`,
    "400": `hsl(0, 0%, ${colorBase * 0.8}%)`,
    "500": `hsl(0, 0%, ${colorBase * 1}%)`,
    "600": `hsl(0, 0%, ${colorBase * 1.2}%)`,
    "700": `hsl(0, 0%, ${colorBase * 1.4}%)`,
    "800": `hsl(0, 0%, ${colorBase * 1.6}%)`,
    "900": `hsl(0, 0%, ${colorBase * 1.8}%)`,
  },

  gaps: {
    "100": `${gapBase * 0.2}rem`,
    "200": `${gapBase * 0.4}rem`,
    "300": `${gapBase * 0.6}rem`,
    "400": `${gapBase * 0.8}rem`,
    "500": `${gapBase * 1}rem`,
    "600": `${gapBase * 1.2}rem`,
    "700": `${gapBase * 1.4}rem`,
    "800": `${gapBase * 1.6}rem`,
    "900": `${gapBase * 1.8}rem`,
  },

  fontSizes: {
    "100": `${fontBase * 0.2}rem`,
    "200": `${fontBase * 0.4}rem`,
    "300": `${fontBase * 0.6}rem`,
    "400": `${fontBase * 0.8}rem`,
    "500": `${fontBase * 1}rem`,
    "600": `${fontBase * 1.2}rem`,
    "700": `${fontBase * 1.4}rem`,
    "800": `${fontBase * 1.6}rem`,
    "900": `${fontBase * 1.8}rem`,
  },

  breakpoints: {
    mobile: "screen and (max-width: 425px)",
    tablet: "screen and (max-width: 768px)",
    desktop: "screen and (max-width: 1024px)",
  },
};

export default theme;
