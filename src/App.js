import './App.css';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import Compc from './Components/Compc';

function App() {

  var obj={lastname:'chaurasiya'}
  var h=console.log('hello')
  var name ='Anshika Chaurasiya'
  var score=[98,56,78]
  var Marks=0
   var total = Math.max(...score) 
 

  return (
    <div className="App">
      <h1>Task1</h1>
      <CompA name='Anshika'/>
      <hr/>
      <h1>Task2</h1>
      <h3>perform validation on following prop-types in functional components.</h3>
      <CompB name='Anshika' obj={obj} num={20} bool={true} func={h} symbol={Symbol('m')}/>
      <hr/>
      <h1>Task3</h1>
      <h3>Implement and validate the following using prop-type</h3>
      <Compc name={name} total={total} Marks={Marks}/>
      <br/>
      <hr/>
    </div>
  );
}

export default App;
