import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MobileOS from './Components/MobileOS';
import MobileManufact from './Components/MobileManufact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <MobileOS/>
    <MobileManufact/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
