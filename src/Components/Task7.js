import React, { useState,useMemo } from "react";

let dark = {
  backgroundColor: "black",
  color: "white",
};
let light = {
  backgroundColor: "white",
  color: "black",
};
const Task7 = () => {
  let [count, setCount] = useState(0);
  let [flg,setFlg]=useState(true);
  

  const changeHandler = (e) => {
    setCount(e.target.value);
  };

  const toggleTheme = ()=>{
    setFlg(!flg);
  }

  const checkBool=useMemo(()=>{
    return flg;
  },[flg])

  return (
    <div id="task7">
    <div className="lpo" style={checkBool ? light:dark}>
      <h2>Task 7 using useMemo</h2>
      <input value={count} onChange={changeHandler} type="number" />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>{count}</p>
      <p>{parseInt(count) + 1}</p>
      <p>{parseInt(count) + 2}</p>
    </div>
    </div>
  );
};

export default Task7;