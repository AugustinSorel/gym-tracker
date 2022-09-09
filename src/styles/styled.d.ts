import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      color: string;
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
