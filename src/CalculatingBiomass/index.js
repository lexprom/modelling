import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import Func from "./utils/func";
import image from "./assets/task1.png";

import "./styles.css";

const chart = {
  labels: [...Array(101).keys()],
  datasets: [
    {
      label: "Function's values",
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

class Biomass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      M0: "1",
      eps: "1",
      mu: "1",
      K: "1",
      S: "1"
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  calculateFunction = () => {
    this.state.data.splice(0, this.state.data.length);
    let M;
    let t = 0;
    const { M0, eps, mu, K, S } = this.state;
    for (let index = 0; index < 100; index++) {
      M = Func(t, +M0, +eps, +mu, +K, +S);
      this.state.data.push(M)
      t += .1;
    }
    this.setState({ data: this.state.data });
    chart.datasets[0].data = this.state.data;
  }

  render() {
    return (
      <div className="container">
        <h1>Task 1</h1>
        <img src={image} alt="" height="150px" width="500px" />
        <Line data={chart} redraw />
        <div>
          <div>
            M0=
            <input value={this.state.M0} onChange={this.onChange} name="M0" />
          </div>
          <div>
            ε=
            <input value={this.state.eps} onChange={this.onChange} name="eps" />
          </div>
          <div>
            μ=
            <input value={this.state.mu} onChange={this.onChange} name="mu" />
          </div>
          <div>
            K=
            <input value={this.state.K} onChange={this.onChange} name="K" />
          </div>
          <div>
            S=
            <input value={this.state.S} onChange={this.onChange} name="S" />
          </div>
          <button onClick={this.calculateFunction}>Done</button>
        </div>
      </div>
    );
  }
}

export default Biomass;