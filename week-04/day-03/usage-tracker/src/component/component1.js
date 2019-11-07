import React from 'react';

export default class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    }
  }

  componentDidMount() {
    this.setState({
      time: Date.now()
    })
  }

  componentWillUnmount() {
    let duration = (Date.now() - this.state.time) / 1000;
    this.props.changeMount('component1', duration);
  }

  render() {
    return <h1>This is component1</h1>
  }
}