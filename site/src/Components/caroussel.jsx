import React from "react";
import Collapse from "../Components/collapse.jsx";
import FiltresLogements from './filtre.jsx';

const Caroussel = ({ text, cover, images, description, nomhost, pichost, note, lieu, equipement, filtres }) => {
    return (
        <div className="Container-caroussel">
            <img src={cover} alt=""></img>
            <div className="titre-et-personne">
                <div className="titre-et-sous-titre">
                    <div className="titre">{text}</div>
                    <div className="sous-titre">{lieu}</div>
                </div>
                <div className="personne">
                    <div className="nom-personne">
                        {nomhost.split(" ").map((prenom, nom) => (
                            <span key={nom}>{prenom}<br /></span>
                        ))}
                    </div>
                    <div className="photo-personne">
                        <img src={pichost} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="filtres-et-note">
                <div className="filtres">
                    <FiltresLogements tags={filtres} />
                </div>
                <div className="note">
                    {/* La note doit venir ici */}
                </div>
            </div>
            <div className="descri-et-equipement">
                <Collapse nom="Description" contenu={description} />
                <Collapse nom="Équipements" contenu={equipement} />
            </div>
        </div>
    );
}

export default Caroussel;
