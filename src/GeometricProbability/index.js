import React, { Component } from 'react'

import Image from "./assets/task4.png"

const ALL_DAY_HOURS = 24;
const FIRST_STEAMER_TIME = 1;
const SECOND_STEAMER_TIME = 2;

export default class GeometricProbability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
  }

  generateSteamersTime = () => {
    let result = [];

    for (let index = 0; index < 10000; index++) {
      const firstSteamerTime = Math.floor(Math.random() * 24);
      const secondSteamerTime = Math.floor(Math.random() * 24);
      let count = 0;

      if (firstSteamerTime >= FIRST_STEAMER_TIME && secondSteamerTime >= SECOND_STEAMER_TIME) {
        count++;
        result.push(count);
      }
    }
    const sum = result.reduce((acc, currentVal) => acc + currentVal);
    this.setState({ result: sum / 10000 })
  }

  calculate() {
    const fullSquare = Math.pow(ALL_DAY_HOURS, 2);
    const trianglesSquare = (Math.pow(ALL_DAY_HOURS - FIRST_STEAMER_TIME, 2) + Math.pow(ALL_DAY_HOURS - SECOND_STEAMER_TIME, 2)) / 2;
    const specifiedSquare = fullSquare - trianglesSquare;
    const foundProbability = 1 - (specifiedSquare / fullSquare);
    return foundProbability;
  }

  render() {
    return (
      <div>
        <h1>Task 4</h1>
        <img src={Image} height="150px" width="550px" alt="help" />
        <div>Analytic Result: {this.calculate()}</div>
        <div>Result: {this.state.result}</div>
        <button onClick={this.generateSteamersTime}>Calculate</button>
      </div>
    )
  }
}
