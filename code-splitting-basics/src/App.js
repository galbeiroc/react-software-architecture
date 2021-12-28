import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <Router>
      <h1>Code Splitting Basics</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/article">Articles</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
