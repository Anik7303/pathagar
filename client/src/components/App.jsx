import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle(`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
}

body {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: relative;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
}
`);

function App() {
    return (
        <>
            <GlobalStyles />
            <p>App</p>
        </>
    );
}

export default App;
