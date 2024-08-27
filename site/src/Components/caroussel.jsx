import React, { useState, useEffect } from "react";


const Caroussel = ({ cover, images = [] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // inititialisation du useState à 0

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    // https://dev.to/ranewallin/this-simple-math-hack-lets-you-create-an-image-carousel-without-any-if-statements-5chj : créer un caroussel avec le modulo operator => commentaire de André

    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000);
        return () => clearInterval(intervalId);
        }, 
    );

    return (
        <div className="container-caroussel">
            <div className="caroussel-images">
                {images.length > 0 ? (
                    <>
                        <img src={images[currentImageIndex]} alt="Logement" />
                        <button className="prev-button" onClick={prevImage}>&#10094;</button>
                        <button className="next-button" onClick={nextImage}>&#10095;</button>
                    </>
                ) : (
                    <img src={cover} alt="Logement" />
                    // Affiche l'image de cover quand l'index est à 0, sinon affiche les autres
                )}
            </div>
        </div>
    );
};

export default Caroussel;
