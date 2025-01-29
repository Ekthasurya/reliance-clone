import React, { useEffect, useState } from 'react';
import "../../Css/HomeFirstSlider.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';



const images=[
    "https://www.reliancedigital.in/medias/LA-BAU-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDk3Mzh8aW1hZ2UvanBlZ3xpbWFnZXMvaGNlL2g5ZC8xMDIxOTIwNzk4MzEzNC5qcGd8MzZkMjhlNjM3NWZlMmYzZTMwNTkxZGRjOTE0YzhiNjk3ZDJhMWU1MDVkOWYxMmI0NDkxYzQyYmRjOTFjN2YxZQ",
    "https://www.reliancedigital.in/medias/Apple-Days-Main-Banner-Hybris-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjA4MDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDcyL2hjMy8xMDIyOTQ0MDgzOTcxMC5qcGd8MGY1OWI0N2IxNGM1ZTVmMjZkY2IxNjI1YzEzYzdkZmQ1MmY2ZTRhYzRhZWM5OWZlNjliMTA1ZjJkOTM3OTczZA",
    "https://www.reliancedigital.in/medias/OnePlus-Nord-3-Lite-5G-Banners-D.jpg?context=bWFzdGVyfGltYWdlc3wxMzg5MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDI2L2g2OS8xMDIyODMzNDg1NDE3NC5qcGd8MmRiMjFiM2Q3Njk4OGE5NTJiMWY3YjNiZDA0ZWI2N2NjMWQ0ZDlkYzcwNjczZGI4NDU2Y2MyYjUxNjhmNDlkNA",
    "https://www.reliancedigital.in/medias/v1-Apple-AirPods-Banner-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIzL2gzZi8xMDIyODMxODQzNzQwNi5qcGd8ZjRiYzgxYzc5MDQzN2VjMzRlZWY4OTdiNWZlYmMzYjgxZWIyOGZjNWMyNzM3MDA4NmY4MjYxYjFhZDM1MDJlYg",
    "https://www.reliancedigital.in/medias/CLP1-Bigger-TV-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ5NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2gwOC8xMDIyOTQ0OTI2MTA4Ni5qcGd8MzkwZDFkOTEyZDVmNWMxMGMwNjQxZWVhZjE4YTZkYWQ5ZmM1ZmRlODg3NzlmZjljNTMzOTQ3ZTQzMjY3OTQwNQ",
]
const HomeFirstSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 8000;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, delay);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
     <div className="spotlight-container">
      <div className="spotlight-slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="spotlight-image"
        />
        <button className="spotlight-button prev" onClick={prevSlide}>
        <AiOutlineLeft />
        </button>
        <button className="spotlight-button next" onClick={nextSlide}>
        <AiOutlineRight />
        </button>
      </div>
    </div>
    </>
  )
}

export default HomeFirstSlider