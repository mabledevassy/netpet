import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<Navbar/>}/>
     <Route path='/login' element={<LoginSignup/>}/>
     <Route path='/s' element={<Hero/>}/>
       
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
