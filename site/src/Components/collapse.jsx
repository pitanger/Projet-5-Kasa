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
                    <p>{contenu}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;
