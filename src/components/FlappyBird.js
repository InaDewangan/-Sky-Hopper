// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./FlappyBird.css";

// const FlappyBird = () => {
//   const { state } = useLocation();
//   const background = state?.background || "default_background.jpg";

//   const [birdPosition, setBirdPosition] = useState(200);
//   const [obstacleLeft, setObstacleLeft] = useState(500);
//   const [gameOver, setGameOver] = useState(false);
//   const birdSize = 30;

//   useEffect(() => {
//     let gravityInterval;
//     if (!gameOver) {
//       gravityInterval = setInterval(() => {
//         setBirdPosition((pos) => pos + 4); // Gravity
//       }, 20);
//     }
//     return () => clearInterval(gravityInterval);
//   }, [gameOver]);

//   useEffect(() => {
//     let obstacleInterval;
//     if (!gameOver) {
//       obstacleInterval = setInterval(() => {
//         setObstacleLeft((left) => (left > 0 ? left - 5 : 500));
//       }, 20);
//     }
//     return () => clearInterval(obstacleInterval);
//   }, [gameOver]);

//   const handleJump = () => {
//     if (!gameOver) {
//       setBirdPosition((pos) => Math.max(pos - 50, 0));
//     }
//   };

//   useEffect(() => {
//     if (birdPosition >= 400 || (obstacleLeft < 100 && birdPosition > 200)) {
//       setGameOver(true);
//     }
//   }, [birdPosition, obstacleLeft]);

//   return (
//     <div
//       className="game-container"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       {!gameOver ? (
//         <>
//           <div
//             className="bird"
//             style={{
//               top: `${birdPosition}px`,
//               width: `${birdSize}px`,
//               height: `${birdSize}px`,
//             }}
//           ></div>
//           <div
//             className="obstacle"
//             style={{
//               left: `${obstacleLeft}px`,
//               height: "200px",
//               top: "200px",
//             }}
//           ></div>
//           <button className="jump-button" onClick={handleJump}>
//             Jump
//           </button>
//         </>
//       ) : (
//         <div className="game-over">Game Over</div>
//       )}
//     </div>
//   );
// };

// export default FlappyBird;


/////////////working code with same background img///////////////
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./FlappyBird.css";

const FlappyBird = () => {
  const { state } = useLocation();
  const background = state?.background || "default_background.jpg";

  const [birdPosition, setBirdPosition] = useState(200);
  const [obstacles, setObstacles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const birdSize = 30;
  const obstacleWidth = 50;
  const obstacleGap = 150;

  useEffect(() => {
    let gravityInterval;
    if (!gameOver) {
      gravityInterval = setInterval(() => {
        setBirdPosition((pos) => pos + 4);
      }, 20);
    }
    return () => clearInterval(gravityInterval);
  }, [gameOver]);

  useEffect(() => {
    let obstacleInterval;
    if (!gameOver) {
      if (obstacles.length === 0) {
        setObstacles(generateObstacles());
      }

      obstacleInterval = setInterval(() => {
        setObstacles((prevObstacles) => {
          const newObstacles = prevObstacles.map((obs) => ({
            ...obs,
            left: obs.left - 5,
          }));

          if (newObstacles[0]?.left + obstacleWidth <= 0) {
            newObstacles.shift();
            newObstacles.push(generateObstacle());
            setScore((prev) => prev + 1);
          }

          return newObstacles;
        });
      }, 20);
    }

    return () => clearInterval(obstacleInterval);
  }, [gameOver, obstacles]);

  useEffect(() => {
    let timerInterval;
    if (!gameOver) {
      timerInterval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [gameOver]);

  const handleJump = () => {
    if (!gameOver) {
      setBirdPosition((pos) => Math.max(pos - 50, 0));
    }
  };

  const generateObstacles = () => {
    const newObstacles = [];
    for (let i = 0; i < 3; i++) {
      newObstacles.push(generateObstacle(500 + i * 300));
    }
    return newObstacles;
  };

  const generateObstacle = (initialLeft = 500) => {
    const topHeight = Math.floor(Math.random() * 200) + 50;
    return { left: initialLeft, top: topHeight };
  };

  return (
    <div
      className="game-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      {!gameOver ? (
        <>
          <div className="score">Score: {score}</div>
          <div className="timer">Time: {time}s</div>
          <div
            className="bird"
            style={{
              top: `${birdPosition}px`,
              width: `${birdSize}px`,
              height: `${birdSize}px`,
            }}
          ></div>
          {obstacles.map((obs, index) => (
            <>
              <div
                key={`top-${index}`}
                className="obstacle"
                style={{
                  left: `${obs.left}px`,
                  height: `${obs.top}px`,
                  top: 0,
                  width: `${obstacleWidth}px`,
                }}
              ></div>
              <div
                key={`bottom-${index}`}
                className="obstacle"
                style={{
                  left: `${obs.left}px`,
                  height: `400px`,
                  top: `${obs.top + obstacleGap}px`,
                  width: `${obstacleWidth}px`,
                }}
              ></div>
            </>
          ))}
          <button className="jump-button" onClick={handleJump}>
            Jump
          </button>
        </>
      ) : (
        <div className="game-over">
          Game Over
          <div className="final-score">Your Score: {score}</div>
          <div className="final-time">Time Survived: {time}s</div>
        </div>
      )}
    </div>
  );
};

export default FlappyBird;
