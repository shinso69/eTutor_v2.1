import React from "react";

// Components
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer";

// Includes
import "./assets/css/style.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
