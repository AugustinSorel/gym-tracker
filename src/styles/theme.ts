import { DefaultTheme } from "styled-components";

const fontBase = 1.1;
const gapBase = 1;
const colorBase = 50;
const borderRadiusBase = 0.3;
const borderSizeBase = 0.15;
const maxWidth = 1500;

const theme: DefaultTheme = {
  colors: {
    "100": `hsl(0, 0%, ${colorBase * 0.1}%)`,
    "200": `hsl(0, 0%, ${colorBase * 0.2}%)`,
    "300": `hsl(0, 0%, ${colorBase * 0.3}%)`,
    "400": `hsl(0, 0%, ${colorBase * 0.4}%)`,
    "500": `hsl(0, 0%, ${colorBase * 1}%)`,
    "600": `hsl(0, 0%, ${colorBase * 1.2}%)`,
    "700": `hsl(0, 0%, ${colorBase * 1.4}%)`,
    "800": `hsl(0, 0%, ${colorBase * 1.6}%)`,
    "900": `hsl(0, 0%, ${colorBase * 1.8}%)`,

    action: "hsl(200, 100%, 50%)",
    error: "hsl(10, 75%, 50%)",
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

  border: {
    radius: {
      "300": `${borderRadiusBase * 0.6}rem`,
      "500": `${borderRadiusBase * 1}rem`,
      "700": `${borderRadiusBase * 1.4}rem`,
    },

    sizes: {
      "300": `${borderSizeBase * 0.6}rem`,
      "500": `${borderSizeBase * 1}rem`,
      "700": `${borderSizeBase * 1.4}rem`,
    },
  },

  breakpoints: {
    mobile: "screen and (max-width: 425px)",
    tablet: "screen and (max-width: 768px)",
    desktop: "screen and (max-width: 1024px)",
    minWidthOnly: `screen and (max-width: ${maxWidth}px)`,
    maxWidthOnly: `screen and (min-width: ${maxWidth}px)`,
  },

  animation: {
    durations: {
      "300": "200ms",
      "500": "1s",
      "700": "5s",
    },
    timingFunction: "ease-in-out",
  },

  maxWidth: `${maxWidth}px`,

  blur: "10px",
};

export default theme;
