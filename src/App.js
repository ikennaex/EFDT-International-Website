import React from "react";
import About from "./components/About/About";
import Catalog from "./components/catalog/Catalog";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="margin">
      <Intro />
      <About />
      <Catalog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
