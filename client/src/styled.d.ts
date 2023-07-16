import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      footer: string;
      white: string;
      black: string;
    };
    shadow: {
      primary: string;
      secondary: string;
    };
  }
}
