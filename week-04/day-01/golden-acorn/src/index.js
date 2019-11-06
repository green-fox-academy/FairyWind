import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class GoldenAcorn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
  }
  

  handleIncrement() {
    this.setState((previousState) => {
      return { amount: previousState.amount + 1 };
    })
  }

  handleDecrease() {
    this.setState((previousState) => {
      if (previousState.amount > 0) {
        return { amount: previousState.amount - 1 };
      }
    })
  }

  keyEvent(e) {d
    if (e.code === 'ArrowUp') {
      this.handleIncrement();
    } else if (e.code === 'ArrowDown') {
      this.handleDecrease();
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.keyEvent.bind(this));
  }

  render() {
    const {amount} = this.state;
    return (
      <div>
        <button onClick={this.handleIncrement.bind(this)} >Buy One</button>
        <p>{amount}</p>
        <button onClick={this.handleDecrease.bind(this)}>Eat One</button>
      </div>
    );
  }
}

ReactDOM.render(<GoldenAcorn />, document.querySelector(".main"));

export default GoldenAcorn;