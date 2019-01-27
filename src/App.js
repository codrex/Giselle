import React, { Component } from 'react';
import Header from './components/Header';
import user from './assets/img/user.png';
import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header url={user} name="giselle" />
      </div>
    );
  }
}

export default App;
