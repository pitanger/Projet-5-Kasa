import React, { useState, useRef, useEffect } from "react";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Collapse = ({ nom, contenu }) => {
    const [ferme, ouvert] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    const ouvreferme = () => {
        ouvert(!ferme);
        setHeight(ferme ? "0px" : `${contentRef.current.scrollHeight}px`);
    };

    useEffect(() => {
        if (ferme) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        }
    }, [ferme]);

    const downarrow = <FontAwesomeIcon icon={faAngleDown} />;
    const uparrow = <FontAwesomeIcon icon={faAngleUp} />;

    return (
        <div className={`collapse__item ${ferme ? "ouvert" : ""}`}>
            <div className="collapse__click" onClick={ouvreferme}>
                <p>{nom}</p>
                <span>{ferme ? uparrow : downarrow}</span>
            </div>
            <div
                className="collapse__content"
                ref={contentRef}
                style={{
                    maxHeight: height,
                    transition: "max-height 0.6s ease-in-out",
                    overflow: "hidden"
                }}
            >
                {/* Les 6 lignes suivantes vérifient si Collapse est un tableau (Array) et renvoient un contenu mapé sous forme de tableau si c'est le cas, sinon le texte s'affiche normalement */}
                {Array.isArray(contenu) ? (
                    contenu.map((item, index) => (
                        <p key={index} className="collapse__content__item">
                            {item}
                        </p>
                    ))
                ) : (
                    <p>{contenu}</p>
                )}
            </div>
        </div>
    );
};

export default Collapse;
