import './App.css';
import ComponentA from './Components/ComponentA';
import { UserProvider } from './Components/UserContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Q1. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of Context API to perform this.</h3>
      <UserProvider value='Anshika'>
        <ComponentA/>
      </UserProvider>
     
      </header>
    </div>
  );
}

export default App;
