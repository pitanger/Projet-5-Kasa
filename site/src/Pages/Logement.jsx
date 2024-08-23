import React from "react";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";
import Footer from "../Components/footer";
import Caroussel from "../Components/caroussel";
import Collapse from "../Components/collapse";
import Data from "../Components/data";

const Logement = () => {
  return (
    <div>
      <main>
        <header className="Accueil-header">
          <Logo />
          <Navigation />
        </header>
        {Data.map((logement) => (
        <Caroussel  key={logement.id}
                    text={logement.title} 
                    cover={logement.cover} 
                    images={logement.pictures} 
                    description={logement.description} 
                    nomhost={logement.host.name} 
                    pichost={logement.host.picture}
                    note={logement.rating}
                    lieu={logement.location}
                    equipement={logement.equipments}
                    filtres={logement.tags}/>
        ))}
        <Collapse />
      </main> 
      <Footer />
    </div>
    );
}

export default Logement