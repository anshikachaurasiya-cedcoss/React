import './App.css';

import Product1Component from './Components/Product1Component'

const products = [{"id":101,"image":"football.png","price":150},
    {"id":102,"image":"tennis.png","price":120},
    {"id":103,"image":"basketball.png","price":110},
    {"id":104,"image":"soccer.png","price":130},
    {"id":105,"image":"table-tennis.png","price":100}];
    
function App(props) {
  return (
    <div className="App">
      <div id='upperDiv'>
        <Product1Component prd={products[0]}/>
        <Product1Component prd={products[1]}/>
        <Product1Component prd={products[2]}/>
      </div>
      <div id='lowerDiv'>
        <Product1Component prd={products[3]}/>
        <Product1Component prd={products[4]}/>
      </div>
    </div>
  );
}

export default App;
