import './App.css';
import Count1Comp from './Components/Counter1Component';
import Count2Comp from './Components/Counter2Component';
import CountComp from './Components/CounterComponent';

import AgeComp from './UrlComponents/AgeComponent';
import ColorComp from './UrlComponents/ColorComponent';
import GenderComp from './UrlComponents/GenderComponent';


function App() {
  return (
    <div className="App">
      <h2>Counter using HOC</h2>
      <CountComp/>
      <Count1Comp/>
      <Count2Comp/>     
      <h2>Url Fetching using HOC</h2>
      <AgeComp/>
      <ColorComp/>
      <GenderComp/>
    </div>
  );
}

export default App;
