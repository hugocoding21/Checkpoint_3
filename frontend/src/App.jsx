// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Scan from "./components/pages/Scan_galerie/Scan";
import Mangainfo from "./components/pages/Mangainfo/Mangainfo";
import Chapitre from "./components/pages/Chapitre/Chapitre";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          {/* Use the correct URL parameter for the manga name */}
          <Route path="/:mangaUrl/chapitre/:id" element={<Chapitre />} />
          <Route path="/:mangaUrl/:id" element={<Mangainfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
