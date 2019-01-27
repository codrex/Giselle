import React, { Component } from 'react';
import Select from './components/Select';
import { COUNTRIES } from './constants';
import { buildSelectOptions } from './utils';
import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Select
          options={buildSelectOptions(COUNTRIES)}
          label="country"
          placeholder="Select your country"
        />
      </div>
    );
  }
}

export default App;
