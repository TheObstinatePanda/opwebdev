import {React, useState} from "react";
import { Link } from 'react-router-dom';
import navData from "./navData";
import './navigation.css';

/*Navigation uses the doubly linked list from navData to populate the navigation bar. */
function Navigation() {
    //call toArray() to convert navData to an array.
    const navArr = navData.toArray();
    //using React, create a state for the display of the navigation bar, initialized to false.
    const [display, setDisplay] = useState(false);
    //onHover toggles the display state.
    function onHover () {setDisplay(!display)};
    //return the navigation bar.
    return(
        <>
        <nav>
            <ul id="navList">
                {/* map through the array and display a nav element for each entry.  */}
                {navArr.map((entry, index) => {
                    return(
                        <>
                            <li key={index}
                                className="navItem"
                                // when a users mouse enters or leaves the navItem, toggle the display state. 
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}>
                                    <Link to={entry.url} className="link" rel='noreferrer no opener'>
                                        {entry.title}                     
                                    </Link>
                                    <img src={entry.preview} className="navImg" alt="preview tile for project"/>
                                </li>
                        </>
                    )
                })}
            </ul>
        </nav>
        </>
        
    )
}

export default Navigation;