// import React, { useState } from 'react';
// import './ImageSlider.css';

// const ImageSlider = () => {
//   const slides = [
//     { id: 1, name: "Horror", description: "Enter if you dare – it’s spooky fun", image: "horrer.webp" },
//     { id: 2, name: "Fantasy", description: "Step into a world of magic and wonder!", image: "fantasy.webp" },
//     { id: 3, name: "Jungle", description: "Swing through trees and meet wild friends!", image: "jungle.webp" },
//     { id: 4, name: "Space:", description: "Blast off into an adventure among the stars!", image: "space.webp" },
//     { id: 5, name: "Desert", description: "Feel the heat and explore the dunes!", image: "desert.webp" },
//     { id: 6, name: "Arctic", description: "Slide into a cool, icy escape!", image: "arctic.webp" }
//   ];

//   const [currentSlides, setCurrentSlides] = useState(slides);

//   const handleNext = () => {
//     const updatedSlides = [...currentSlides];
//     const firstSlide = updatedSlides.shift();
//     updatedSlides.push(firstSlide);
//     setCurrentSlides(updatedSlides);
//   };

//   const handlePrev = () => {
//     const updatedSlides = [...currentSlides];
//     const lastSlide = updatedSlides.pop();
//     updatedSlides.unshift(lastSlide);
//     setCurrentSlides(updatedSlides);
//   };

//   return (
//     <div className="container">
//         <div className='title'>
//             <h1>Explore the World of Sky Hopper</h1>
//         </div>
//       <div className="slide">
//         {currentSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`item ${index === 1 ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             {index === 1 && (
//               <div className="content">
//                 <div className="name">{slide.name}</div>
//                 <div className="des">{slide.description}</div>
//                 <button>See More</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="button">
//         <button className="prev" onClick={handlePrev}>
//           &lt;
//         </button>
//         <button className="next" onClick={handleNext}>
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;



//////////////working code without flappy bird logic wala///////////
// import React, { useState, useEffect } from "react";
// import "./ImageSlider.css";
// import Heading from "./Heading";
// const ImageSlider = () => {
//   const slides = [
   
//     { id: 2, name: "Fantasy", description: "Step into a world of magic and wonder!", image: "fantasy.webp" },
//     { id: 1, name: "Horror", description: "Enter if you dare – it’s spooky fun", image: "horrer.webp" },
//     { id: 3, name: "Jungle", description: "Swing through trees and meet wild friends!", image: "jungle.webp" },
//     { id: 4, name: "Space", description: "Blast off into an adventure among the stars!", image: "space.webp" },
//     { id: 5, name: "Desert", description: "Feel the heat and explore the dunes!", image: "desert.webp" },
//     { id: 6, name: "Arctic", description: "Slide into a cool, icy escape!", image: "arctic.webp" },
//   ];

//   const [currentSlides, setCurrentSlides] = useState(slides);
//   const [transitioning, setTransitioning] = useState(false);

//   const handleNext = () => {
//     if (transitioning) return;
//     setTransitioning(true);
//     setTimeout(() => {
//       const updatedSlides = [...currentSlides];
//       const firstSlide = updatedSlides.shift();
//       updatedSlides.push(firstSlide);
//       setCurrentSlides(updatedSlides);
//       setTransitioning(false);
//     }, 300);
//   };

//   const handlePrev = () => {
//     if (transitioning) return;
//     setTransitioning(true);
//     setTimeout(() => {
//       const updatedSlides = [...currentSlides];
//       const lastSlide = updatedSlides.pop();
//       updatedSlides.unshift(lastSlide);
//       setCurrentSlides(updatedSlides);
//       setTransitioning(false);
//     }, 300);
//   };

//   return (
//     <div className="container">
//       <div className="title">
//        <Heading/>
//       </div>
//       <div className={`slide ${transitioning ? "transition" : ""}`}>
//         {currentSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`item ${index === 1 ? "active" : ""}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             {index === 1 && (
//               <div className="content">
//                 <div className="name">{slide.name}</div>
//                 <div className="des">{slide.description}</div>
//                 <button>See More</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="button">
//         <button className="prev" onClick={handlePrev}>
//           &lt;
//         </button>
//         <button className="next" onClick={handleNext}>
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

//////////////////////add play button with same backgrond img/////////////
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ImageSlider.css";
// import Heading from "./Heading";

// const ImageSlider = () => {
//   const slides = [
//     { id: 2, name: "Fantasy", description: "Step into a world of magic and wonder!", image: "fantasy.webp" },
//     { id: 1, name: "Horror", description: "Enter if you dare – it’s spooky fun", image: "horrer.webp" },
//     { id: 3, name: "Jungle", description: "Swing through trees and meet wild friends!", image: "jungle.webp" },
//     { id: 4, name: "Space", description: "Blast off into an adventure among the stars!", image: "space.webp" },
//     { id: 5, name: "Desert", description: "Feel the heat and explore the dunes!", image: "desert.webp" },
//     { id: 6, name: "Arctic", description: "Slide into a cool, icy escape!", image: "arctic.webp" },
//   ];

//   const [currentSlides, setCurrentSlides] = useState(slides);
//   const [transitioning, setTransitioning] = useState(false);
//   const navigate = useNavigate();

//   // Function to play sound
//   const playSound = (filePath) => {
//     const audio = new Audio(filePath);
//     audio.play();
//   };

//   const handleNext = () => {
//     if (transitioning) return;
//     playSound("/slidechange3.wav"); // Play next slide sound
//     setTransitioning(true);
//     setTimeout(() => {
//       const updatedSlides = [...currentSlides];
//       const firstSlide = updatedSlides.shift();
//       updatedSlides.push(firstSlide);
//       setCurrentSlides(updatedSlides);
//       setTransitioning(false);
//     }, 300);
//   };

//   const handlePrev = () => {
//     if (transitioning) return;
//     playSound("/slidechange2.wav"); // Play previous slide sound
//     setTransitioning(true);
//     setTimeout(() => {
//       const updatedSlides = [...currentSlides];
//       const lastSlide = updatedSlides.pop();
//       updatedSlides.unshift(lastSlide);
//       setCurrentSlides(updatedSlides);
//       setTransitioning(false);
//     }, 300);
//   };

//   const handlePlay = () => {
//     const currentSlide = currentSlides[1]; // Active slide is always at index 1
//     navigate("/flappybird", { state: { background: currentSlide.image } });
//   };

//   return (
//     <div className="container">
//       <div className="title">
//         <Heading />
//       </div>
//       <div className={`slide ${transitioning ? "transition" : ""}`}>
//         {currentSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`item ${index === 1 ? "active" : ""}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             {index === 1 && (
//               <div className="content">
//                 <div className="name">{slide.name}</div>
//                 <div className="des">{slide.description}</div>
//                 <button onClick={handlePlay}>Play</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="button">
//         <button className="prev" onClick={handlePrev}>
//           &lt;
//         </button>
//         <button className="next" onClick={handleNext}>
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;




////////////add img start btn with same background img/////////////////////
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageSlider.css";
import Heading from "./Heading";

const ImageSlider = () => {
  const slides = [
    { id: 2, name: "Fantasy", description: "Step into a world of magic and wonder!", image: "fantasy.webp" },/*https://png.pngtree.com/background/20240412/original/pngtree-enchanting-natural-setting-in-a-fantasy-world-rendered-in-3d-picture-image_8465339.jpg */
    { id: 1, name: "Horror", description: "Enter if you dare – it’s spooky fun", image: "horrer.webp" },
    { id: 3, name: "Jungle", description: "Swing through trees and meet wild friends!", image: "jungle.webp" },
    { id: 4, name: "Space", description: "Blast off into an adventure among the stars!", image: "space.webp" },
    { id: 5, name: "Desert", description: "Feel the heat and explore the dunes!", image: "desert.webp" },
    { id: 6, name: "Arctic", description: "Slide into a cool, icy escape!", image: "arctic.webp" },
  ];

  const [currentSlides, setCurrentSlides] = useState(slides);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const playSound = (filePath) => {
    const audio = new Audio(filePath);
    audio.play();
  };

  const handleNext = () => {
    if (transitioning) return;
    playSound("/slidechange3.wav");
    setTransitioning(true);
    setTimeout(() => {
      const updatedSlides = [...currentSlides];
      const firstSlide = updatedSlides.shift();
      updatedSlides.push(firstSlide);
      setCurrentSlides(updatedSlides);
      setTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (transitioning) return;
    playSound("/slidechange2.wav");
    setTransitioning(true);
    setTimeout(() => {
      const updatedSlides = [...currentSlides];
      const lastSlide = updatedSlides.pop();
      updatedSlides.unshift(lastSlide);
      setCurrentSlides(updatedSlides);
      setTransitioning(false);
    }, 300);
  };

  const handlePlay = () => {
    const currentSlide = currentSlides[1];
    navigate("/flappybird", { state: { background: currentSlide.image } });
  };

  return (
    <div className="container">
      <div className="title">
        <Heading />
      </div>
      <div className={`slide ${transitioning ? "transition" : ""}`}>
        {currentSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`item ${index === 1 ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {index === 1 && (
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <img
                  src="/startbtn.png"
                  alt="Start Button"
                  className="start-button"
                  onClick={handlePlay}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="button">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/back-button-3d-icon-download-in-png-blend-fbx-gltf-file-formats--arrow-previous-game-pack-sports-games-icons-9802475.png?f=webp"
          alt="Previous Button"
          className="prev-button"
          onClick={handlePrev}
        />
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/next-button-3d-icon-download-in-png-blend-fbx-gltf-file-formats--arrow-forward-music-game-pack-sports-games-icons-9802478.png?f=webp"
          alt="Next Button"
          className="next-button"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ImageSlider.css";
// import Heading from "./Heading";

// const ImageSlider = () => {
//   const slides = [
//     { id: 2, name: "Fantasy", description: "Step into a world of magic and wonder!", image: "fantasy.webp" },
//     { id: 1, name: "Horror", description: "Enter if you dare – it’s spooky fun", image: "horrer.webp" },
//     { id: 3, name: "Jungle", description: "Swing through trees and meet wild friends!", image: "jungle.webp" },
//     { id: 4, name: "Space", description: "Blast off into an adventure among the stars!", image: "space.webp" },
//     { id: 5, name: "Desert", description: "Feel the heat and explore the dunes!", image: "desert.webp" },
//     { id: 6, name: "Arctic", description: "Slide into a cool, icy escape!", image: "arctic.webp" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0); // Track the active slide index
//   const navigate = useNavigate();

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   const handlePlayGame = (background) => {
//     navigate("/flappybird", { state: { background } });
//   };

//   return (
//     <div className="container">
//       <Heading />
//       <div className="slide">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`item ${index === currentIndex ? "active" : ""}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             {index === currentIndex && (
//               <div className="content">
//                 <div className="name">{slide.name}</div>
//                 <div className="des">{slide.description}</div>
//                 <button onClick={() => handlePlayGame(slide.image)}>Play Game</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       {/* Navigation Buttons */}
//       <div className="button">
//         <button onClick={handlePrevious}>&lt;</button>
//         <button onClick={handleNext}>&gt;</button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
