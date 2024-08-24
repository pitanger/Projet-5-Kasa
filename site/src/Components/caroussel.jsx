import React, { useState, useEffect } from "react";
import Collapse from "../Components/collapse.jsx";
import FiltresLogements from './filtre.jsx';
import Note from "./noteetoile.jsx";

const Caroussel = ({ id, text, cover, images = [], description, nomhost, pichost, note, lieu, equipement = [], filtres = [] }) => {
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
                )}
            </div>
            <div className="titre-et-personne">
                <div className="titre-et-sous-titre">
                    <div className="titre">{text}</div>
                    <div className="sous-titre">{lieu}</div>
                </div>
                <div className="personne">
                    <div className="nom-personne">
                        {nomhost?.split(" ").map((prenom, index) => (
                            <span key={index}>{prenom}<br /></span>
                        ))}
                    </div>
                    <div className="photo-personne">
                        <img src={pichost} alt="Hôte" />
                    </div>
                </div>
            </div>
            <div className="filtres-et-note">
                <div className="filtres">
                    <FiltresLogements tags={filtres} />
                </div>
                <div className="note">
                    <Note id={id} />
                </div>
            </div>
            <div className="descri-et-equipement">
                <Collapse nom="Description" contenu={description} />
                <Collapse nom="Équipements" contenu={equipement.join(', ')} />
            </div>
        </div>
    );
};

export default Caroussel;
