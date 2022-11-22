import './App.css';
import Count1Comp from './Components/Counter1Component';
import Count2Comp from './Components/Counter2Component';
import CountComp from './Components/CounterComponent';

function App() {
  return (
    <div className="App">
      <h2>Counter using HOC</h2>
      <CountComp/>
      <Count1Comp/>
      <Count2Comp/>     
    </div>
  );
}

export default App;
