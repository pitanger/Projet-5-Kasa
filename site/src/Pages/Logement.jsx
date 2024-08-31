import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";
import Footer from "../Components/footer";
import Caroussel from "../Components/caroussel";
import Data from "../Components/data";
import Collapse from "../Components/collapse";
import FiltresLogements from "../Components/filtre";
import Note from "../Components/noteetoile";

const Logement = () => {
  const { id } = useParams();
  const redirection = useNavigate();

  const logement = Data.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      redirection("/404", { replace: true });
    }
  }, [logement, redirection]);

  if (!logement) {
    return null;
  }

  return (
    <div>
      <main>
        <header className="Accueil-header">
          <Logo />
          <Navigation />
        </header>

        <div key={logement.id}>
          <Caroussel
            id={logement.id}
            text={logement.title}
            cover={logement.cover}
            images={logement.pictures}
            description={logement.description}
            nomhost={logement.host.name}
            pichost={logement.host.picture}
            note={logement.rating}
            lieu={logement.location}
            equipement={logement.equipments}
            filtres={logement.tags}
          />
        </div>
        <div className="contenu-autre">
          <div className="Logement-gauche">
            <div className="titre-et-sous-titre">
              <div className="titre">{logement.title}</div>
              <div className="sous-titre">{logement.location}</div>
            </div>
            <div className="filtres">
              <FiltresLogements tags={logement.tags} />
            </div>
          </div>
          <div className="Logement-droite">
            <div className="note-host">
            <div className="personne">
                <div className="nom-personne">
                  {logement.host.name.split(" ").map((prenom, index) => (
                    <span key={index}>
                      {prenom}
                      <br />
                    </span>
                  ))}
                </div>
                <div className="photo-personne">
                  <img src={logement.host.picture} alt="Hôte" />
                </div>
              </div>
              <div className="note">
                <Note id={logement.id} />
              </div>
            </div>
          </div>
        </div>
          <div className="descri-et-equipement">
            <Collapse nom="Description" contenu={logement.description} />
            <Collapse nom="Équipements" contenu={logement.equipments} />
          </div>
        </main>
        <Footer />
      </div>
  );
};

export default Logement;
