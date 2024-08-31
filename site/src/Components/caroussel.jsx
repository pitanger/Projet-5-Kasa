import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000); 
        return () => clearInterval(interval);
    }, [currentIndex]);

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
        <div className="carousel-container">
            <div className="carousel">
                <button className="left-arrow" onClick={goToPrevious}>❮</button>
                <div 
                    className="carousel-image-container" 
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
                            className="carousel-image" 
                        />
                    ))}
                </div>
                <button className="right-arrow" onClick={goToNext}>❯</button>
            </div>
        </div>
    );
};

export default ImageCarousel;
