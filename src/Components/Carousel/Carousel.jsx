import React from "react";
import './Carousel.css';

function Carousel({largeCarousel, background}){
    const images = [
        'https://preview.colorlib.com/theme/hepta/images/slider-1.jpg.webp',
        'https://preview.colorlib.com/theme/hepta/images/slider-2.jpg.webp',
        'https://preview.colorlib.com/theme/hepta/images/slider-3.jpg.webp',
        'https://preview.colorlib.com/theme/hepta/images/slider-4.jpg.webp',
        'https://preview.colorlib.com/theme/hepta/images/slider-5.jpg.webp',
        'https://preview.colorlib.com/theme/hepta/images/slider-6.jpg.webp'
      ];
      return(
<div className={ largeCarousel ? `carousel-container-1`:`carousel-container`} style={{background:background}}>
    <div
      id="customCarousel"
      className={ largeCarousel ? `carousel-1`:`carousel slide`}
      data-bs-ride="carousel"
      style={{ width: '65%', margin: '0 auto', marginTop:'55px', position: 'relative' }}
    >
        
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            data-bs-target="#customCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index}`}
              style={{ borderRadius: '10px' }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev custom-arrow"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="prev"
      >
        <span className="custom-prev-icon">&lt;</span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next custom-arrow"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="next"
      >
        <span className="custom-next-icon" >&gt;</span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>
  );
}
export default Carousel;