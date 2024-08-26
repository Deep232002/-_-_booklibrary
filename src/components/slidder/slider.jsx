import React, { useState, useEffect } from "react";
import "./slider.css";

const images = [
  "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
  "https://storage.googleapis.com/du-prd/books/images/9781649377173.jpg",
  "https://storage.googleapis.com/du-prd/books/images/9781982182236.jpg",
  "https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg",
  "https://storage.googleapis.com/du-prd/books/images/9781250178633.jpg",
  "https://storage.googleapis.com/du-prd/books/images/9781619634459.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const getImagesToDisplay = () => {
    // This logic ensures circular wrapping of images
    return [
      images[currentIndex],
      images[(currentIndex + 1) % images.length],
      images[(currentIndex + 2) % images.length],
    ];
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        {getImagesToDisplay().map((image, index) => (
          <div
            key={index}
            className={`slider-image ${
              index === 1 ? "slider-image-center" : ""
            }`}
          >
            <img src={image} alt={`Slide ${currentIndex + index + 1}`} />
          </div>
        ))}
      </div>
      <button className="slider-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
