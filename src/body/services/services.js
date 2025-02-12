import {React, useState, useEffect} from "react";
import servData from "./servData";
import './services.css';

function Services() {

    const servArr = servData.toArray();

    const [display, setDisplay] = useState(false);
    function onHover () {setDisplay(!display)};

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        //Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return(
        <div className="services">
            <ul id="servList">
                {servArr.map((entry, index) => {
                    return(
                        <>
                            <li key={index}
                                className={`servItem${isMobile && index % 2 !== 0 ? 'row-reverse' : ""}`}
                                id={entry.heading}
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}>
                                    <img src={entry.image} className="servImg" alt="icon for "/>
                                    <div id="servCard">
                                        <h2 className="servHeading">{entry.heading}</h2>
                                        <p className="servText">{entry.text}</p>
                                    </div>
                                </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default Services;