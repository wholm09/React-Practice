import React, { useRef } from 'react';

import PinViewer from './components/PinViewer/PinViewer';
import Keyboard from './components/Keyboard/Keyboard';
import ExpenseList from './components/Expense/ExpenseList';

import scrollToTarget from './components/ScrollToTarget/ScrollToTarget.jsx';

import logo from './logo.svg';
import './App.css';

const expenses = [
  {
    id: 'e1',
    title: 'BRPT',
    lotAmount: 60,
    price: 1260.12,
    date: new Date(2023, 10, 10),
  },
  { id: 'e2',
    title: 'MIDI',
    lotAmount: 70,
    price: 470.45,
    date: new Date(2023, 10, 6),
  },
  {
    id: 'e3',
    title: 'MSTI',
    lotAmount: 20,
    price: 1355.67,
    date: new Date(2023, 10, 2),
  },
  {
    id: 'e4',
    title: 'BBRI',
    lotAmount: 5,
    price: 5125,
    date: new Date(2023, 10, 10),
  },
];

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
        {/* TODO */}
        <div ref={KeyboardAndPinsRef}>
          <PinViewer pins="123"></PinViewer>
          <Keyboard></Keyboard>
        </div>
        <div ref={EmptySectionRef} className="emptySection"/>
        <div ref={LotToProfitRef}>
          <h2>Lot To Protif Calculator</h2>
          {/* LotToProfit Calc */}
        </div>
        <div ref={EmptySectionRef} className="emptySection"/>
        <div ref={ExpenseItemRef}>
          <h2>Expense Tracker</h2>
          <ExpenseList expenses={expenses}/>
        </div>
      </main>
    </div>
  );
}

export default App;
