import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import ImageSlider from "./components/ImageSlider";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    // Wrap everything inside AudioProvider
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/slider" element={<ImageSlider />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
