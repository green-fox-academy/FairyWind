import React from 'react';

export default class component2 extends React.Component {
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
    changeMount('component2', (Date.now() - this.time) / 1000);
  }

  render() {
    return <h1>component2</h1>
  }
}