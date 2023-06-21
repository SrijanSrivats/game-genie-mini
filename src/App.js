import logo from './logo.svg';
import './App.css';
import CustomNavbar from './nav';
import Game from './game'
import { gameData } from './data';

function App() {
  return (
    <>
    <div style={{backgroundColor: "black"}}><CustomNavbar></CustomNavbar>
    <h1 className='main-head'>Library</h1>

    <div className="game-list">{
      gameData.map((g, i) => (<Game className='col-3' key={i}  title={g.title} achievements={g.achivements} imgSrc={g.imgSrc}></Game>))
    }</div>
    </div>
    </>
  );
}

export default App;
