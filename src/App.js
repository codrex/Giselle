import React, { Component } from 'react';
import TextField from './components/TextField';
import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <TextField label="email" />
      </div>
    );
  }
}

export default App;
