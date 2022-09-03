import List from './Components/List';
import Producttable from './Components/Producttable';
import Userlist from './Components/Userlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Q1. Create a list of fruits and print it using map.
      <List/>
      Q2. Make a Products Table which should work as:  1. Fill form and submit values. 2. Product should add in product list and display in list below add product form.
      <Producttable/>
      Q4. Using class components create a username list as shown.
      <Userlist/>
      </header>
    </div>
  );
}

export default App;
