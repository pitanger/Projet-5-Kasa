import React from "react";
import { Link } from "react-router-dom";

const Erreurtexte = () => {
    return (
        <div className="wrapper-404">
            <div className="AOA">404</div>
            <div className="oups">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/" className="retour">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default Erreurtexte;