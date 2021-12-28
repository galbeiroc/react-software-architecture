import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home';
// import Articles from './pages/Articles';
// import About from './pages/About';

const Home = lazy(() => import('./pages/Home'));
const Articles = lazy(() => import('./pages/Articles'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <h1>Code Splitting Basics</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/article">Articles</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
