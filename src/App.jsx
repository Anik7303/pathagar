import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/history" element={<History />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
