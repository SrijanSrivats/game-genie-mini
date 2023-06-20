import logo from './logo.svg';
import './App.css';
import CustomNavbar from './nav';
import Game from './game'
import { gameData } from './data';
function App() {
  return (
    <>
    <div><CustomNavbar></CustomNavbar>
    <div className="game-list">{
      gameData.map((g, i) => (<Game key={i}  title={g.title} achievements={g.achivements} imgSrc={g.imgSrc}></Game>))
    }</div>
    </div>
    </>
  );
}

export default App;
