import React, { Component } from 'react';
import ImageAvatar from './components/ImageAvatar';
import image from './assets/img/user.png';
import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageAvatar url={image} altText="user avatar" size="md" />
      </div>
    );
  }
}

export default App;
