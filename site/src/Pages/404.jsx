import React from "react";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";
import Erreurtexte from "../Components/erreurtexte";
import Footer from "../Components/footer";


const Erreur = () => {
    return (
      <div className="Index">
        <main>
          <header className="Accueil-header">
            <Logo />
            <Navigation />
          </header>
            <Erreurtexte />
        </main>
        <Footer />
      </div>
    );
  }
  export default Erreur;