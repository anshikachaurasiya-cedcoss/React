import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const watch = ReactDOM.createRoot(document.getElementById('watch'));
var Hr=0,Min=0,Sec=0,mil=99;
function btnStop(){
  clearInterval(stop)
}
function btnStart(){
  stop = setInterval(stopWatch,10)
}
function stopWatch(){
  if(mil<99){
    mil++;
  }
  else{
    mil=0;
    if(Sec<59){
      Sec++;
    }
    else{
      Sec=0;
      if(Min<59){
        Min++;
      }
      else{
        Min=0;
        if(Hr<59){
          Hr++;
        }
      }
    }
  }

watch.render(
  <div id='main'>
    <div id='stopWatch'>
      <h1>{Hr}:{Min}:{Sec}:{mil}</h1>
    </div>
    <div id='btn'>
    <button type='button' onClick={btnStart}>Start</button>
    <button type='button' onClick={btnStop}>Stop</button>
    </div>
  </div>
)
}

var stop = setInterval(stopWatch,10)

reportWebVitals();
