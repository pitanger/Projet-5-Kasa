import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    return (
        <span className="navigation">
            <Link
                to="/"
                className={`navigation__nav-item ${location.pathname === "/" ? "active" : ""}`}
                style={{ pointerEvents: location.pathname === "/" ? "none" : "auto" }}
            >
                Accueil
            </Link>
            <Link
                to="/a-propos"
                className={`navigation__nav-item ${location.pathname === "/a-propos" ? "active" : ""}`}
                style={{ pointerEvents: location.pathname === "/a-propos" ? "none" : "auto" }}
            >
                A Propos
            </Link>
        </span>
    );
}

export default Navigation;
