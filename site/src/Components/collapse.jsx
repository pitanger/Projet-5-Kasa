import React, { useState } from "react";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Collapse = ({ nom, contenu }) => {
    const [ferme, ouvert] = useState(false);

    const ouvreferme = () => {
        ouvert(!ferme);
    };

    const downarrow = <FontAwesomeIcon icon={faAngleDown} />
    const uparrow = <FontAwesomeIcon icon={faAngleUp} />

    return (
        <div className={`collapse ${ferme ? 'ouvert' : ''}`}>
            <div className="collapse-click" onClick={ouvreferme}>
                <p>{nom}</p>
                <span className="collapse-icon">{ferme ? uparrow : downarrow}</span>
            </div>
            {ferme && (
                <div className="collapse-content">
{/* Les 6 lignes suivantes vérifient si Collapse est un tableau (Array) et renvoient un contenu mapé sous forme de tableau si c'est le cas, sinon le texte s'affiche normalement */}
                    {Array.isArray(contenu) ? (
                        contenu.map((item, index) => (
                            <p key={index} className="collapse-item">{item}</p>
                        ))
                    ) : (
                        <p>{contenu}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Collapse;
