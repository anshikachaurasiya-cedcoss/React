import './App.css';
import ComponentA from './Components/ComponentA';
import CurrencyConverter from './Components/CurrencyConverter';
import NumWords from './Components/NumWords';
import ParentComponent from './Components/ParentComponent';
import TextUtilityApp from './Components/TextUtilityApp';
import { UserProvider } from './Components/UserContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h5>Q1. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of Context API to perform this.</h5>
      <UserProvider value='Anshika'>
        <ComponentA/>
      </UserProvider>
      <br/>    
      <h5>Q2. Make a class component named ParentComponent and inside componentDidMount start a timer that console.log a name every 2 seconds. Inside this ParentComponent there is a child functional component called ChildComponent. We don't want to render ChildComponent every time the ParentComponent renders. How will you do this</h5>
      <ParentComponent/>
      <br/>
      <h5>Q3 Make a Currency Converter as shown here</h5>
      <CurrencyConverter/>
      <br/>
      <h5>Text Utility App</h5>
      <TextUtilityApp/>
      <br/>
      <h5>Number to Word</h5>
      <NumWords/>
      </header>
    </div>
  );
}

export default App;
