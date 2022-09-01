import Suggestion from './Suggestion';
import ParentComponent from './ParentComponent';
import Theme from './Theme';
import './App.css';

function App() {
  return (
    <div className="App">
      <Suggestion/>
      <ParentComponent/>
      <Theme/>
    </div>
  );
}

export default App;
