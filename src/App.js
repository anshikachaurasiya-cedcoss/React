import './App.css';
import UseCallBack from './Components/UseCallBack';
import UseMemo from './Components/UseMemo';

function App() {
  return (
  <div className="App">
    <h2>UseMemo Task 1</h2>
    <UseMemo/>
    <hr/>
    <h2>UseCallback Task 2</h2>
    <UseCallBack/>
  </div>
  );
}

export default App;
