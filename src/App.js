import PinViewer from './components/PinViewer/PinViewer';
import Keyboard from './components/Keyboard';
import ExpenseItem from './components/Expense/ExpenseItem';

import logo from './logo.svg';
import './App.css';

function App() {
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
      </header>
      <main>
        <PinViewer></PinViewer>
        <Keyboard></Keyboard>
        <div>
          Expense Tracker
        </div>
        <ExpenseItem></ExpenseItem>
      </main>
    </div>
  );
}

export default App;
