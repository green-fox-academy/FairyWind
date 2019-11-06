import React from 'react';

export default class component1 extends React.Component {
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
    const { changeMount } = this.props;
    changeMount('component1', (Date.now() - this.time) / 1000);
  }

  render() {
    return <h1>component1</h1>
  }
}