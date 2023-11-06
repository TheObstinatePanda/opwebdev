import AboutMe from './aboutMe/aboutMe.js';
import Services from './services/services.js';
import './body.css';

function Body() {
  return (
    <div className="Body">
      <h2 class="head2">Weaving Digital Magic</h2>
      
      <div className="bodCont">
        <AboutMe />        
      </div>
      {/* <h2 className="head2"> This Site is still under construction, pardon the mess!</h2> */}
      
      <Services />
      
      
    </div>
  );
}

export default Body;
