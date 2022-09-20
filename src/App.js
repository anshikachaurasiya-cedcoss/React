import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Site from './Components/Site';

function App() {
  const [count, setCount] = useState(true);
  
  
   if(count){
     return(
      <div className="App">
        <Login count={setCount}/>
      </div>
      )
    }
    else{
      return(
        <div className="App">
          <Site />
        </div>
      )
    }
}

export default App;