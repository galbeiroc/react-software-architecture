import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import About from "./pages/About";
import Article from "./pages/Article";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <h1>Server-side Rendering</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/article"><Article /></Route>
            <Route path="/about"><About /></Route>
          </Switch>
    </Router>
  );
}

export default App;
