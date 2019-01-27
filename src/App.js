import React, { Component } from 'react';
import SideBar from './components/SideBar';
import { SIDE_BAR_SECTIONS } from './constants';
import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar sections={SIDE_BAR_SECTIONS} />
      </div>
    );
  }
}

export default App;
