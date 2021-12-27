import React from 'react';
import styled from 'styled-components';
import { Switch, Link, Route } from "react-router-dom";

import About from "./pages/About";
import Article from "./pages/Article";
import Home from "./pages/Home";

const BigGreenHeader = styled.h1`
  color: green;
  font-size: 50px;
`;

function App() {
  return (
    <>
      <BigGreenHeader>Server-side Rendering</BigGreenHeader>
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
    </>
  );
}

export default App;
