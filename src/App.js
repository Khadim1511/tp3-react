import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './home';
import Apropos from './about';
import Connexion from './Connexion';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/" className="App-link">Accueil</Link> |{" "}
          <Link to="/apropos" className="App-link">À propos</Link>
        </nav>
        <Connexion />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
