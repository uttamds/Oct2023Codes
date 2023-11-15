import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Localstoragedemo from './components/Localstoragedemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Localstoragedemo/>
    
  </React.StrictMode>
);
