import React, { Component } from 'react'

import Image from "./assets/task6.png"

const NUMBER_OF_EXPERIMENTS = 1000;

class ExponentiallyDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      durationOfSystem: 0,
      durationOfMainElements: 0
    }
  }

  componentDidMount() {
    this.getDurations();
  }

  generateExponentiallyRandomValue() {
    return (-1 / 10) * Math.log10(Math.random());
  }

  getDurations = () => {
    this.setState({
      durationOfSystem: this.calculateDurationOfSystem(),
      durationOfMainElements: this.calculateDurationOfMainElements()
    })
  }

  calculateDurationOfMainElements() {
    let time = [];
    for (let index = 0; index < NUMBER_OF_EXPERIMENTS; index++) {
      let firstMainElement = this.generateExponentiallyRandomValue();
      let secondMainElement = this.generateExponentiallyRandomValue();
      let count = 0;
      while (firstMainElement > 0 && secondMainElement > 0) {
        count++;
        time.push(count);
        firstMainElement -= Math.random();
        secondMainElement -= Math.random();
      }
    }
    return time.reduce((acc, val) => acc + val) / NUMBER_OF_EXPERIMENTS;
  }

  calculateDurationOfSystem() {
    let time = [];
    for (let index = 0; index < NUMBER_OF_EXPERIMENTS; index++) {
      let firstMainElement = this.generateExponentiallyRandomValue();
      let secondMainElement = this.generateExponentiallyRandomValue();
      let reservedElement = this.generateExponentiallyRandomValue();
      let count = 0;
      while (firstMainElement > 0 && secondMainElement > 0) {
        count++;
        time.push(count);
        firstMainElement -= Math.random();
        secondMainElement -= Math.random();
      }
      while (reservedElement > 0) {
        count++;
        time.push(count)
        reservedElement -= Math.random();
      }
    }
    return time.reduce((acc, val) => acc + val) / NUMBER_OF_EXPERIMENTS;
  }

  render() {
    return (
      <div>
        <h1>Task 6</h1>
        <img src={Image} height="200px" width="600px" alt="" />
        <div>A work's duration of the whole system: {this.state.durationOfSystem} </div>
        <div>A work's duration of the main elements: {this.state.durationOfMainElements} </div>
        <button onClick={this.getDurations}>Calculate</button>
      </div>
    )
  }
}

export default ExponentiallyDistribution;
