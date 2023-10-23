import {React, useState} from "react";
import servData from "./servData";
import './services.css';

function Services() {

    const servArr = servData.toArray();

    const [display, setDisplay] = useState(false);

    function onHover () {setDisplay(!display)};

    return(
        <nav id="serv">
            <ul id="servList">
                {servArr.map((entry, index) => {
                    return(
                        <>
                            <li key={index}
                                className="servItem"
                                id={entry.heading}
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}>
                                    <img src={entry.image} className="servImg" alt="icon for "/>
                                    <h2 className="servHeading">{entry.heading}</h2>
                                    <p className="servText">{entry.text}</p>
                                </li>
                        </>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Services;