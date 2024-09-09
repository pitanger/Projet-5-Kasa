import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000); 
        return () => clearInterval(interval);
    });

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='carousel'>
        <div className="carousel__container">
            <div className="carousel">
                <button className="carousel__left-arrow" onClick={goToPrevious}>❮</button>
                <div 
                    className="carousel__image-container" 
                    style={{ 
                        transform: `translateX(-${currentIndex * 100}%)`, 
                        transition: 'transform 0.5s ease-in-out'
                    }}
                >
                    {images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Slide ${index}`} 
                            className="carousel__image" 
                        />
                    ))}
                </div>
                <button className="carousel__right-arrow" onClick={goToNext}>❯</button>
            </div>
        </div>
        </div>
    );
};

export default ImageCarousel;
