import {React, useState, useEffect} from "react";
import portData from "./portData";
import './portfolio.css';

function Portfolio () {

    const portArr = portData.toArray();

    const [display, setDisplay] = useState(false);
    function onHover () {setDisplay(!display)};

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="portCont">
            <h2 className="head2" id="portHead">OPWebDev Portfolio</h2>
            <div id="portCont">
                <div className="babble">
                    <p className="portText">Below are some of the projects we have completed for our clients.</p>
                </div>
                <div id="portProjs">
                    <ul id = "portList">
                        {portArr.map((entry, index) => {
                            return(
                                <>
                                    <li key={index}
                                        className={`portItem${isMobile && index % 2 !== 0 ? 'row-reverse' : ""}`}
                                        id={entry.heading}
                                        onMouseEnter={onHover}
                                        onMouseLeave={onHover}>
                                            <a href={entry.link} target='blank' ><img src={entry.image} className="portImg" alt="screenshot of the this project's front page"/>
                                            </a>
                                            <div id="portCard">
                                                <h2 className="portHeading">{entry.heading}</h2>
                                                <p className="portText">{entry.text}</p>
                                            </div>
                                        </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;