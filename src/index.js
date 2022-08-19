import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
var i,fact=1;
const factorial=(number)=>{
  for(i=1;i<=number;i++)
    fact = fact * i;
    return fact;
}
root.render(
  <div>
    <h1>{factorial(10)}</h1>
  </div>
);
reportWebVitals();