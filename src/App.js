import logo from './logo.svg';
import './App.css';
import test from './test.jpg'
import Game from './components/Game';

function App() {
  return (
    <div className="header">
      <div>
        <div className="textCenter">
          Hi!! Welcome to My React Website
        </div>
        <br />
        Let's have a game of tic-tac-toe
        <Game />
      </div>

      <div>
        <div>Thank you for visiting</div>
        <div className="info">
          <img src={test} alt="test" className="myImage" />
          <div>
            <b>Sarthak Agarwal</b><br />
            Senior Software Engineer<br />
            Accenture Solutions Pvt. Ltd.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
