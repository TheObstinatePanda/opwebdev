import Header from './header/header.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './body/body.js';
import ServPage from './servPage/servPage.js'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Routes>
            <Route path="/" element={<Body />}/>
            <Route path="/services" element={<ServPage />}/>
        </Routes>
      <footer>
        
      </footer>
      
    </div>
    </Router>
  );
}

export default App;
