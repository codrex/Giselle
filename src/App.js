import React, { Component } from 'react';
import SideBarButton from './components/SideBarButton';
import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarButton />
      </div>
    );
  }
}

export default App;
