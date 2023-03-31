import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <h2>Main Section</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
