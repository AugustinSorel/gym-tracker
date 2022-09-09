import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      "900": string;
      "800": string;
      "700": string;
      "600": string;
      "500": string;
      "400": string;
      "300": string;
      "200": string;
      "100": string;
    };

    fontSizes: {
      extraSmall: strings;
      small: strings;
      medium: strings;
      large: strings;
      extraLarge: strings;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
