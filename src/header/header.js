
import Navigation from './navigation/navigation.js'
import './Header.css';

function Header() {
  return (
    <div 
     id="header">
      <header id="App-header">
        
        <div className="container" id="logoCont">
          <img src={require("../assets/OPlogo1.0.png")} id="logo" alt="Obstinate Panda Logo"/>
        </div>
        <div className="container" id="headright">
          <div className="container" id="titleCont">
            <h1 id="title">Obstinate Panda's Web Development</h1>
          </div>
          <div className="container" id="navCont">
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
