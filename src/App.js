import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Top from './Top';
import GreetComp from './Components/GreetComp';
import TopComp from './Components/TopComp';
import Parent from './Parent';
function App() {
  return (
    <div className="App">
      <Greet name='Anshika'/>
      <Top username='Chaurasiya'/>
      <GreetComp name='Anshika'/>
      <TopComp username='Singh'/>
      <Parent/>
    </div>
  );
}

export default App;
