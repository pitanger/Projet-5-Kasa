import React from "react";
import { useParams } from "react-router-dom";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";
import Footer from "../Components/footer";
import Caroussel from "../Components/caroussel";
import Data from "../Components/data";
import Collapse from "../Components/collapse";
import FiltresLogements from "../Components/filtre";
import Note from "../Components/noteetoile";
import { useNavigate } from "react-router-dom";

const Logement = () => {
  const { id } = useParams();
  const redirection404 = useNavigate();
    // Nouveau Hook : use navigate:  https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430


  const logement = Data.find(logement => logement.id === id);

  if (!logement) {
    redirection404("/404", { replace: true });
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
        <div className="titre-et-personne">
            <div className="titre-et-sous-titre">
                <div className="titre">{logement.title}</div>
                <div className="sous-titre">{logement.location}</div>
            </div>
            <div className="personne">
                <div className="nom-personne">
                    {logement.host.name.split(" ").map((prenom, index) => (
                        <span key={index}>{prenom}<br /></span>
                    ))}
                </div>
                <div className="photo-personne">
                    <img src={logement.host.picture} alt="Hôte" />
                </div>
            </div>
        </div>
        <div className="filtres-et-note">
            <div className="filtres">
                <FiltresLogements tags={logement.tags} />
            </div>
            <div className="note">
                <Note id={logement.id} />
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
}

export default Logement;
