import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MobileManuComponent from './components/MobileManuComponent';
import MobileOsComponents from './components/MobileOsComponents';
import ReactAppComponent from './components/ReactAppComponent';
import MainComponent from './components/MainComponent';
import Task5Component from './components/Task5Component';
import ComponentPara from './components/ComponentPara';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MobileOsComponents/>
    <MobileManuComponent/>
    <ReactAppComponent/>
    <h3>Q4. Make the component structure as given in the attachment.</h3>
    <MainComponent/>
    <h3>Q5. Make the following design as shown</h3>
    <Task5Component/>
    <ComponentPara/>
  </div>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
