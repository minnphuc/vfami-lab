import React, { useState, useEffect, useCallback } from "react";

import "./Slider.css"; // Import external CSS

import banner1 from "../icons/banner vfami 1.jpg";
import banner2 from "../icons/banner vfami 2.jpg";
import banner3 from "../icons/banner vfami 3.jpg";
import arrowBack from "../icons/arrow_back.svg";
import arrowFord from "../icons/arrow_forward.svg";

const images = [banner1, banner2, banner3];
let intervalRef = null;

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  const stopAutoSlide = useCallback(() => {
    if (intervalRef) clearInterval(intervalRef);
  }, []);
  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    intervalRef = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 3 seconds
  }, [stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex, startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    const preloadImgs = () => {
      new Image().src = images[1];
      new Image().src = images[2];
    };
    preloadImgs();
  }, []);

  const prevSlide = () => {
    setSlideDirection("prev");
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const nextSlide = () => {
    setSlideDirection("next");
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const imgList = images.map(imgPath => (
    <div className={`carousel-slide ${slideDirection}`} key={currentIndex}>
      <img src={imgPath} alt={imgPath} className="carousel-image" />
    </div>
  ));

  return (
    <div className="carousel-container">
      <div className="carousel">{imgList[currentIndex]}</div>

      <button onClick={prevSlide} className="carousel-button left">
        <img src={arrowBack} alt="back" />
      </button>

      <button onClick={nextSlide} className="carousel-button right">
        <img src={arrowFord} alt="ford" />
      </button>
    </div>
  );
}

export default ImageSlider;
