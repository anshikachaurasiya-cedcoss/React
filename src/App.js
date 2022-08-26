import './App.css';
import CardComponent from './Component/CardComponent';
function App(props) {
  return (
    <div className="App">
      <CardComponent color='rgb(48, 48, 240)'  border='1px solid rgb(35, 35, 196)' spanpara='Primary Card Title' />
      <CardComponent color='grey'  border='1px solid rgb(102, 100, 100)' spanpara='Secondary Card Title'  />
      <CardComponent color='green' border='1px solid rgb(43, 78, 43)' spanpara='Sucess Card Title' />
      <CardComponent color='rgb(184, 20, 47)' border='1px solid rgb(223, 64, 91)' spanpara='Danger Card Title' />
    </div>
  );
}

export default App;
