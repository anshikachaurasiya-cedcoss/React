import logo from './logo.svg';
import './App.css';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';

function App() {
  return (
    <div className="App">
      <span>Q1. a: Create a Button that counts no of clicks and displays on button itself.  Now display odd or even next to the button based on the value of count.</span>
      <Task1/>
      <span>Q2. Create a counter with increment, decrement and reset functionality.</span>
      <Task2/>
      <span>Q3. Create a count down clock that starts on a button click with current time as start and decrements second by second.</span>
      <Task3/>
    </div>
  );
}

export default App;
