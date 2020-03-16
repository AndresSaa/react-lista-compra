import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import ListApp from './components/ListApp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de la compra</h1>
        <ListApp />
      </header>
    </div>
  );
}

export default App;
