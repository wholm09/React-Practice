import React, { useRef } from 'react';

import PinViewer from './components/PinViewer/PinViewer';
import Keyboard from './components/Keyboard/Keyboard';
import ExpenseItem from './components/Expense/ExpenseItem';

import scrollToTarget from './components/ScrollToTarget/ScrollToTarget.jsx';

import logo from './logo.svg';
import './App.css';

function App() {
  const KeyboardAndPinsRef= useRef();
  const LotToProfitRef = useRef();
  const EmptySectionRef= useRef();
  const ExpenseItemRef= useRef();

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
        <ul className="givePointer">
          <li>&#9203;
            <span onClick={() => scrollToTarget(ExpenseItemRef)}>Testing PIN and Keyboard</span></li>
          <li>
            <span onClick={()=> scrollToTarget(KeyboardAndPinsRef)}>Expense Items</span>
          </li>
          <li>&#9203; Calculation - "Lot to Profit"</li>
          <li>&#9203; Blog - How harmful is it "Online Gambling"?</li>
        </ul>
      </header>
      <main>
        <div ref={KeyboardAndPinsRef}>
          <PinViewer pins="123"></PinViewer>
          <Keyboard></Keyboard>
        </div>
        <div ref={EmptySectionRef} className="emptySection"/>
        <div ref={LotToProfitRef}>
          <span>Lot To Protif Calculator</span>
          {/* LotToProfit Calc */}
        </div>
        <div ref={ExpenseItemRef}>
          <span>Expense Tracker</span>
          <ExpenseItem></ExpenseItem>
        </div>
      </main>
    </div>
  );
}

export default App;
