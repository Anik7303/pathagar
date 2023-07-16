import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  color: {
    primary: "#009521",
    secondary: "#812511",
    footer: "#017d1c",
    white: "#f0f0f0",
    black: "#111",
  },
  shadow: {
    primary: "rgba(0, 149, 33, 0.3)",
    secondary: "rgba(129, 37, 17, 0.3)",
  },
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
  },
  shadow: {
    ...defaultTheme.shadow,
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
  },
  shadow: {
    ...defaultTheme.shadow,
  },
};
