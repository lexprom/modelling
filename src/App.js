import React, { Component } from 'react';

import Biomass from "./CalculatingBiomass";
import ExpectedValueDiscrete from './ExpectedValueDiscrete';

import "./styles.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Biomass />
        <ExpectedValueDiscrete />
      </div>
    );
  }
}

export default App;
