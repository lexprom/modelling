import React, { Component } from 'react';

import Biomass from "./CalculatingBiomass";
import ExpectedValueDiscrete from './ExpectedValueDiscrete';
import GeometricProbability from './GeometricProbability';
import SoDE from "./SystemOfDifferentialEquation";
import NDRV from "./NormallyDistributedRandomValue";

import "./styles.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Biomass />
        <SoDE />
        <ExpectedValueDiscrete />
        <GeometricProbability />
        <NDRV />
      </div>
    );
  }
}

export default App;
