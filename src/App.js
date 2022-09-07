import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

const functionRepository = require("./utils/myFunctions");

const { cyclicRotation, oddOccurancesInArray, frogJump } = functionRepository;

function App() {
  const [output, setOutput] = useState();

  useEffect(() => {
    setOutput(frogJump());
  }, [output]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{output}</p>
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

export default App;
