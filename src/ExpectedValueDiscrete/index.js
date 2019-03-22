import React, { Component } from 'react'

import Image from "./assets/task3.png"

const NUMBER_OF_EXPERIMENTS = 1000;
const MIN_NUMBER_OF_DETAILS = 5;

class ExpectedValueDiscrete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: 0
		}
	}

	calculateExpectedValues = () => {
		const details = [0, 0, 1, 1, 1, 2, 2, 2, 2, 3]; // odds of the details
		const resultsExpectedValues = [];
		for (let index = 0; index < NUMBER_OF_EXPERIMENTS; index++) {
			let temp = 0;
			let count = 0;
			while (temp <= MIN_NUMBER_OF_DETAILS) {
				temp += details[Math.floor(Math.random() * details.length)];
				count++;
			}
			resultsExpectedValues.push(count);
		}
		const sumExpctedValues = resultsExpectedValues.reduce((acc, currentVal) => acc + currentVal);
		this.setState({ result: sumExpctedValues / NUMBER_OF_EXPERIMENTS });
	}

	componentDidMount() {
		this.calculateExpectedValues();
	}

	render() {
		return (
			<div>
				<h1>Task 3</h1>
				<img src={Image} height="150px" width="550px" alt="" />
				<div>Result:{this.state.result} </div>
				<button onClick={this.calculateExpectedValues}>Calculate</button>
			</div>
		)
	}
}

export default ExpectedValueDiscrete;
