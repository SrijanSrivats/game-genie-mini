import logo from './logo.svg';
import './App.css';
import CustomNavbar from './nav';
import Game from './game'
import { gameData } from './data';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from './login-page/login';
import { Register } from './login-page/register';
function Home() {
  return (
    <>

    <h1 className='main-head p-4'>Library</h1>

    <div className="game-list">{
      gameData.map((g, i) => (<Game className='col-3' key={i}  title={g.title} achievements={g.achivements} imgSrc={g.imgSrc}></Game>))
    }</div>
    </>
  );
}

export default Home;

