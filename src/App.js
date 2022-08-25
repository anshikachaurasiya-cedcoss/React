import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Top from './Top';
import GreetComp from './Components/GreetComp';
function App() {
  return (
    <div className="App">
      <Greet name='Anshika'/>
      <Top username='Chaurasiya'/>
      <GreetComp name='Anshika'/>
    </div>
  );
}

export default App;
