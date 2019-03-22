import React, { Component } from 'react'
import { Line } from "react-chartjs-2"

import Image from "./assets/task2.png"
import "./styles.css"
import { FunctionX, FunctionY } from "./utils/func";

const chart = {
  labels: [...Array(101).keys()],
  datasets: [
    {
      label: "X",
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
    },
    {
      label: "Y",
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(192, 38, 128, 1)',
      borderColor: 'rgba(230, 127, 187, 1)',
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
      K: "",
      X: [],
      Y: []
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  calculateFunction = () => {
    let x;
    let y;
    let t = 0;
    const { K, X, Y } = this.state;

    // X loop
    let xT;
    for (let i = 1; i < 100; i++) {
      x = y = i;
      xT = FunctionX(x, y, +K);
      X.push(xT);
      t += .1;
    }
    this.setState({ X: this.state.X });
    chart.datasets[0].data = this.state.X;
    console.log(this.state.X);

    t = 0;

    // Y loop
    let yT;
    for (let i = 1; i < 100; i++) {
      x = y = i;
      yT = FunctionY(x, y, +K);
      Y.push(xT);
      t += .1;
    }
    this.setState({ Y: this.state.Y });
    chart.datasets[1].data = this.state.Y;
  }

  render() {
    return (
      <div className="Container">
        <h1>Task 2</h1>
        <img src={Image} height="300px" width="550px" alt="help" />
        <Line data={chart} redraw />
        <div>
          K=
            <input value={this.state.K} onChange={this.onChange} name="K" />
        </div>
        <button onClick={this.calculateFunction}>Calculate</button>
      </div>
    )
  }
}
