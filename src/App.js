import './App.css';
import UseCallBack from './Components/UseCallBack';
import UseMemo from './Components/UseMemo';
import CustomHook from './Components/CustomHook';

function App() {
  return (
  <div className="App">
    <h2>UseMemo Task 1</h2>
    <UseMemo/>
    <hr/>
    <h2>UseCallback Task 2</h2>
    <UseCallBack/>
    <hr/>
    <h2>Custom Hook Task3</h2>
    <CustomHook/>
    <hr/>
  </div>
  );
}

export default App;
