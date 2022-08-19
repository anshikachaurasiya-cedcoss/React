import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
// var i,fact=1;
// const factorial=(number)=>{
//   for(i=1;i<=number;i++)
//     fact = fact * i;
//     return fact;
// }
// root.render(
//   <div>
//     <h1>{factorial(10)}</h1>
//   </div>
// );
// /////////////////////////////Task2///////////////////////////////////
// var p=true;
// const prime=()=>{
//   let i =2;
//   let x="";
// while(i <= 100){
//   let j=2;
//   while(j < i - 1){
//     if(i % j === 0){
//       p = false;
//       break;
//     }
//     j++;
//   }
//   if(p){
//     x=x+i+" ";
//   }
//   p = true;
//   i++;
// }
// return x;
// }
// root.render(
//   <div>
//     <p>{prime()}</p>
//   </div>
// )
// ///////////////////////////task 3//////////////////////
const arr =["Lucknow","Kanpur","Allahabad","Agra","Jhansi","Bareilly","Basti","Lakhimpur"];
var x= arr.sort();
const renderArr = x.map((item, index) =>
<div key={index}>{item}</div>
);
root.render(
  <div>
    <ul>
      {renderArr}
    </ul>
  </div>
)
reportWebVitals();