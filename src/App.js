import './App.css';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';

function App() {
  return (
    <div className="App">
      <h3>Q1. Go to https://jsonplaceholder.typicode.com/users and fetch and display the user data on page.</h3>
      <Task1/>
      <hr/>
      <h3>Q2. Get the Github users data using Rest API through React</h3>
      <Task2/>
    </div>
  );
}

export default App;
