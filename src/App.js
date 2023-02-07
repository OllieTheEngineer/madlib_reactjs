import './App.css';
import React, {useState} from 'react'
import Madlib from './Madlib';
import MadlibForm from './MadlibForm';

function App() {

  return (
    <div className="App">
      <h1> Madlib </h1>
      <MadlibForm/>
    </div>
  );
}

export default App;
