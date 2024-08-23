import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();  // pour obtenir le chemin de la page actuelle

    return (
        <span className="navigation">
            <Link
                to="/"
                className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
                style={{ pointerEvents: location.pathname === "/" ? "none" : "auto" }}
            >
                Accueil
            </Link>
            <Link
                to="/a-propos"
                className={`nav-item ${location.pathname === "/a-propos" ? "active" : ""}`}
                style={{ pointerEvents: location.pathname === "/a-propos" ? "none" : "auto" }}
            >
                A Propos
            </Link>
        </span>
    );
}

export default Navigation;
