import logo from "./assets/logo.svg";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <h1>সুধীজন পাঠাগার | Sudhijan Pathagar</h1>
        <img src={logo} alt="Sudhijan Pathagar Logo" width="250px" />
      </main>
    </>
  );
}

export default App;
