import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MobileOS from './Components/MobileOS';
import MobileManufact from './Components/MobileManufact';
import ComponentBlueDiv from './Components/ComponentBlueDiv';
import ParaDiv from './Components/ParaDiv';
import Task5Component from './Components/Task5Component';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <MobileOS/>
    <MobileManufact/>
    <h3>Q3. Make the following component structure using functional components.</h3>
    <ComponentBlueDiv/>
    <h3>Q4. Make the component structure as given in the attachment.</h3>
    <ParaDiv/>
    <h3>Q5. Make the following design as shown</h3>
    <Task5Component/>
  </>
);
reportWebVitals();
