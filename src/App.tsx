import React from 'react';
import './App.css';
import { A } from './Props/A'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
        <A />
      </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}
