import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
import { InitialDataContext } from './context/InitialDataContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.hydrate(
  <React.StrictMode>
    <InitialDataContext.Provider value={(window && window.preloadedData) || { _data: {} }}>
      <Router>
        <App />
      </Router>
    </InitialDataContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
