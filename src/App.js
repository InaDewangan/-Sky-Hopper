// import React from "react";
// import FrontPage from "./components/FrontPage";
// import ImageSlider from "./components/ImageSlider";
// function App() {
//   return (
//     <div className="App">
//       <FrontPage />
//       <ImageSlider />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import ImageSlider from "./components/ImageSlider";
import FlappyBird from "./components/FlappyBird";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/slider" element={<ImageSlider />} />
          <Route path="/flappybird" element={<FlappyBird />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



