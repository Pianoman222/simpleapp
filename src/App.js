import React from 'react';
import './App.css';

function App() {
  // Variables
  const title = "mami pupi222333333";
  let number1 = 10;
  let number2 = 20;

  // Operators
  const sum = number1 + number2;

  // Functions
  function multiply(a, b) {
    return a * b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <p>Number 1: {number1}</p>
        <p>Number 2: {number2}</p>
        <p>Sum: {sum}</p>
        <p>Multiplication: {multiply(number1, number2)}</p>
      </header>
    </div>
  );
}

export default App;