import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import MainPage from './Components/MainPage';
import SweetPage from './Components/SweetPage';
import ContactUs from './ContactUs';
// import SweetPage from './Components/SweetPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}>Home</Route>
        <Route path='/about' element={<AboutUs/>}>About Us</Route>
        <Route path='/contact' element={<ContactUs/>}>Contact Us</Route>
      </Routes>
      {/* <SweetPage/> */}
    </div>
  );
}

export default App;
