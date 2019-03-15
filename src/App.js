import React, { Component } from 'react';

import Biomass from "./CalculatingBiomass";
import ExpectedValueDiscrete from './ExpectedValueDiscrete';

import "./styles.css"
import GeometricProbability from './GeometricProbability';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Biomass />
        <ExpectedValueDiscrete />
        <GeometricProbability />
      </div>
    );
  }
}

export default App;
