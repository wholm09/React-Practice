import { useState } from 'react';
import PinItem from './components/PinItem';
import Keyboard from './components/Keyboard';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pins] = useState([
    { id: '1', value: 1 },
    { id: '2', value: 2 }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Keyboard */}
        <div>
          { pins.map(pin =>
            <PinItem
              value={ pin.value }
              key={ pin.id }
            ></PinItem>
          )}
        </div>
        <Keyboard></Keyboard>
      </header>
    </div>
  );
}

export default App;
