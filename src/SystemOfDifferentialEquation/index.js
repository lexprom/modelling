import React, { Component } from 'react'
import { Line } from "react-chartjs-2"

import Image from "./assets/task2.png"
import "./styles.css"
import { FunctionX, FunctionY } from "./utils/func";

const chart = {
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    }
  ]
};

export default class SoDE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      K: "1",
      X: [],
      Y: []
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  calculateFunction = () => {
    this.state.X.splice(0, this.state.X.length);
    this.state.Y.splice(0, this.state.Y.length);
    this.setState({ K: "" })
    const { X, Y, K } = this.state;
    let t = 0;
    let a = 10; // x'
    let b = 10; // y'
    let x = 1;
    let y = 1;
    let xFromT = a * t + x;
    let yFromT = b * t + y;

    for (let index = 0; index < 100; index++) {
      let tempA = FunctionX(xFromT, yFromT, +K, t, a);
      xFromT = tempA * t + xFromT;
      a = tempA;

      let tempB = FunctionY(xFromT, yFromT, +K, t, b);
      yFromT = tempB * t + yFromT;
      b = tempB;

      t += .1;
      X.push(xFromT.toFixed(2));
      Y.push(yFromT);
    }
    this.setState({ X: this.state.X, Y: this.state.Y })
    chart.datasets[0].data = this.state.Y;
    chart.labels = this.state.X;
  }

  render() {
    return (
      <div className="Container">
        <h1>Task 2</h1>
        <img src={Image} height="300px" width="550px" alt="help" />
        <Line options={{ legend: { display: false } }} data={chart} redraw />
        <div>
          K=
            <input value={this.state.K} onChange={this.onChange} name="K" />
        </div>
        <button onClick={this.calculateFunction}>Calculate</button>
      </div>
    )
  }
}
