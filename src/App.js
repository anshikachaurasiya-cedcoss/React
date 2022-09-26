import './App.css';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Task3';

function App() {
  return (
    <div className="App">
      <h3>Q1. Create a Button that counts no of clicks and displays on button itself</h3>
      <Task1/>
      <hr/>
      <h3>Q2. Create a counter with increment, decrement and reset functionality.</h3>
      <Task2/>
      <hr/>
      <h3>Q3. Create a count down clock that starts on a button click with current time as start and decrements second by second.</h3>
      <Task3/>
      <hr/>
    </div>
  );
}

export default App;
