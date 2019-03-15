import React, { Component } from 'react'

import Image from "./assets/task4.png"

const ALL_DAY_HOURS = 24;
const FIRST_STEAMER_TIME = 1;
const SECOND_STEAMER_TIME = 2;

export default class GeometricProbability extends Component {
  calculate() {
    const fullSquare = this.square(ALL_DAY_HOURS);
    const trianglesSquare = (this.square(ALL_DAY_HOURS - FIRST_STEAMER_TIME) + this.square(ALL_DAY_HOURS - SECOND_STEAMER_TIME)) / 2;
    const specifiedSquare = fullSquare - trianglesSquare;
    const foundProbability = 1 - (specifiedSquare / fullSquare);
    return foundProbability;
  }

  square(value) {
    return value * value;
  }

  render() {
    return (
      <div>
        <h1>Task 4</h1>
        <img src={Image} height="150px" width="550px" alt="help" />
        <div>Result: {this.calculate()}</div>
      </div>
    )
  }
}
