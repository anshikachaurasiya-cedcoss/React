import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Component1 from './Components/Component1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id='mainDiv'>
    <Component1/>
  </div>
);

reportWebVitals();
