import logo from './logo.svg';
import './App.css';
import test from './test.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="info">
          <img src={test} alt="test" className="myImage"/>
          <div>
            <b>Sarthak Agarwal</b><br/>
            Senior Software Engineer<br/>
            Accenture Solutions Pvt. Ltd.
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
