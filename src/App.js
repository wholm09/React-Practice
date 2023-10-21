import React, { useRef } from 'react';

import PinViewer from './components/PinViewer/PinViewer';
import Keyboard from './components/Keyboard/Keyboard';
import ExpenseItem from './components/Expense/ExpenseItem';

// import ScrollToTarget from './components/ScrollToTarget/ScrollToTarget';

import logo from './logo.svg';
import './App.css';

function App() {
  const targetRef = useRef();

  function scrollToTarget() {
    // Scroll to the top of the target element
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  }

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
        <div>OR</div>
        <ul>
          <li>&#9203; Testing PIN and Keyboard</li>
          <li>
            <button onClick={scrollToTarget}>Expense Items</button>
          </li>
          <li>&#9203; Calculation - "Lot to Profit"</li>
          <li>&#9203; Blog - How harmful is it "Online Trading"?</li>
        </ul>
        {/* TODO: connect to LD toggle to switch to route */}
      </header>
      <main>
        <PinViewer pins="123"></PinViewer>
        <Keyboard></Keyboard>
        <div ref={targetRef}>Expense Tracker</div>
        <ExpenseItem></ExpenseItem>
      </main>
    </div>
  );
}

export default App;
