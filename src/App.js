import logo from './logo.svg';
import './App.css';
import CustomNavbar from './nav';
import Game from './game'
import { gameData } from './data';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from './login-page/login';
import { Register } from './login-page/register';
import Home from './home';
function App() {
  return (
    <>
    <Router>  
      <div style={{backgroundColor: "black"}}><CustomNavbar></CustomNavbar>
      </div>
      <Routes>
          <Route exact path='' element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          
      </Routes>
    </Router>  
    </>
  );
}

export default App;

