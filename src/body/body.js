import AboutMe from './aboutMe/aboutMe.js';
import Services from './services/services.js';
import './body.css';

function Body() {
  return (
    <div className="Body">
      <h2>Weaving Digital Magic</h2>
      <h2> This Site is still under construction, pardon the mess!</h2>
      <div className="bodCont">
        <AboutMe />
        
      </div>
      <div className="servCont">
        <Services />
      </div>
      
    </div>
  );
}

export default Body;
