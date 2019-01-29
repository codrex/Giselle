import React, { Component } from 'react';
import UserAccount from './components/UserAccount';

import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserAccount />
      </div>
    );
  }
}

export default App;
