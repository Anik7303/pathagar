import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  position: relative;
  font-size: 1rem;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.4;
}

p {
  text-align: justify;
}

#root {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: visible;
}
`;

export default GlobalStyle;
