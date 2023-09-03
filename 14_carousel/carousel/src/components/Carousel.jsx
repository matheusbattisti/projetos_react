import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import Indicators from "./Indicators";

const Carousel = ({ imageUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualChange, setManualChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!manualChange) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }
      setManualChange(false); // Reset manual change
    }, 5000);

    return () => clearInterval(interval);
  }, [manualChange, imageUrls.length]);

  const goPrev = () => {
    setManualChange(true);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  const goNext = () => {
    setManualChange(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div className="carousel">
      {imageUrls.map((url, index) => (
        <Slide url={url} key={index} isActive={index === activeIndex} />
      ))}
      <Indicators activeIndex={activeIndex} length={imageUrls.length} />
      <button className="carousel-button prev" onClick={goPrev}>
        Anterior
      </button>
      <button className="carousel-button next" onClick={goNext}>
        Próximo
      </button>
    </div>
  );
};

export default Carousel;
