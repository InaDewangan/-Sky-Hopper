// import React from "react";
// import "./FrontPage.css";

// const FrontPage = () => {
//   return (
//     <div className="front-page">
//       <h1 className="title">Welcome to Flappy Bird</h1>
//       <p className="subtitle">Get ready to play!</p>
//     </div>
//   );
// };

// export default FrontPage;



import React from "react";
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="banner">
        <h1 className="game-title">Flappy Game</h1>
      </div>
      <img
        src="/playbtn.png"
        alt="Play Button"
        className="play-button"
        onClick={() => alert("Play button clicked!")}
      />
    </div>
  );
};

export default FrontPage;
