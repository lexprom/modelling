import React, { Component } from 'react'

import Image from "./assets/task5.png"

const NUMBER_OF_EXPERIMENTS = 10000;

class NDRV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDuration: 0,
      secondDuration: 0,
      thirdDuration: 0
    }
  }

  componentDidMount() {
    this.getDurations();
  }

  generateNormalRandomValue = () => {
    let sum = 0;
    for (let index = 0; index < 11; index++) {
      sum += Math.random();
    }
    const { expectedValue, varience } = this.calculateExpectedValues();
    const randomVal = expectedValue + (varience * sum);
    return randomVal.toFixed(3);
  }

  getDurations = () => {
    this.setState({
      firstDuration: this.generateNormalRandomValue(),
      secondDuration: this.generateNormalRandomValue(),
      thirdDuration: this.generateNormalRandomValue()
    })
  }

  calculateExpectedValues = () => {
    let result = {};

    for (let index = 0; index < NUMBER_OF_EXPERIMENTS; index++) {
      let randomVal = Math.round(Math.random() * 11);
      if (randomVal in result) {
        result[randomVal] += 1
      } else {
        result[randomVal] = 1;
      }
    }

    let expectedValue = 0;
    let varience = 0;
    for (const prop in result) {
      expectedValue += prop * result[prop] / NUMBER_OF_EXPERIMENTS
      varience += prop * prop * result[prop] / NUMBER_OF_EXPERIMENTS
    }
    return { expectedValue, varience }
  }

  render() {
    return (
      <div>
        <h1>Task 5</h1>
        <img src={Image} height="180px" width="600px" alt="" />
        <div>A work's duration of the first element: {this.state.firstDuration} </div>
        <div>A work's duration of the second element: {this.state.secondDuration} </div>
        <div>A work's duration of the third element: {this.state.thirdDuration} </div>
        <button onClick={this.getDurations}>Calculate</button>
      </div>
    )
  }
}

export default NDRV;
