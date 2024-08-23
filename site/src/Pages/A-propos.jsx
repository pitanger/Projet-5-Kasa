import React from "react";
import Navigation from "../Components/nav";
import Footer from "../Components/footer";
import Logo from "../Components/logo";
import Banniere2 from "../Components/banniere2";
import Collapse from "../Components/collapse";

const Apropos = () => {
    return (
      <div className="Index">
        <main>
          <header className="Accueil-header">
            <Logo />
            <Navigation />
          </header>
            <Banniere2 /> 
            <div className="conteneur-collapse">
            <Collapse nom="Fiabilité" contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont confirmes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
            <Collapse nom="Respect" contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Collapse nom="Service" contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Collapse nom="Sécurité" contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </main>
        <Footer />
      </div>
    );
}
export default Apropos;
