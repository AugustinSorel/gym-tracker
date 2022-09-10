import "styled-components";

type Palette = {
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
};

type PaletteSmall = {
  "300": string;
  "500": string;
  "700": string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Palette & {
      action: string;
      error: string;
    };

    gaps: Palette;

    fontSizes: Palette;

    borderSizes: PaletteSmall;

    borderRadius: PaletteSmall;

    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
