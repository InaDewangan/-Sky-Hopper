///////////current very well working code before created AudioContext file////////////////
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageSlider.css";
import Heading from "./Heading";
import fantasyImage from "../Images/fantasy.webp";
import horrorImage from "../Images/horror.jpeg";
import jungleImage from "../Images/jungle.webp";
import spaceImage from "../Images/space.webp";
import desertImage from "../Images/desert.webp";
import arcticImage from "../Images/arctic.webp";
import magicalImage from "../Images/magical.webp";

const ImageSlider = () => {
  const slides = [
    { id: 2, name: "Fantasy", description: "Step into a world of magic and wonder!", image: fantasyImage },
    { id: 1, name: "Horror", description: "Enter if you dare – it’s spooky fun", image: horrorImage },
    { id: 3, name: "Jungle", description: "Swing through trees and meet wild friends!", image: jungleImage },
    { id: 4, name: "Space", description: "Blast off into an adventure among the stars!", image: spaceImage },
    { id: 5, name: "Desert", description: "Feel the heat and explore the dunes!", image: desertImage },
    { id: 6, name: "Arctic", description: "Slide into a cool, icy escape!", image: arcticImage },
    { id: 7, name: "Magical", description: "Glow with the magical lights of the Northern skies! 🌌✨", image: magicalImage },
  ];

  const [currentSlides, setCurrentSlides] = useState(slides);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();
  const slideChangeAudioRefNext = useRef(new Audio("/slidechange2.wav")); // Reference for the "Next" button sound
  const slideChangeAudioRefPrev = useRef(new Audio("/slidechange3.wav")); // Reference for the "Previous" button sound

  const handleNext = () => {
    if (transitioning) return;
    // Play the "Next" slide change sound
    slideChangeAudioRefNext.current.play().catch((error) => console.error("Error playing next slide change sound:", error));
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
    // Play the "Previous" slide change sound
    slideChangeAudioRefPrev.current.play().catch((error) => console.error("Error playing previous slide change sound:", error));
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
    const currentSlide = currentSlides[1]; // The slide selected
    navigate("/game", { state: { selectedTheme: currentSlide.name } });
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
