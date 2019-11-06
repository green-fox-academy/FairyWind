import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import component1 from './component1';
import component2 from './component2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'component1',
      duration: 0
    };
  }

  changeMount(currentPage, duration) {
    this.setState({
      currentPage: currentPage,
      duration: duration
    })
  }

  render() {
    return (
      <>
        <Router>
          <nav>
            <NavLink style={{ marginRight: "20px" }} to="/">
              Link 1
          </NavLink>
            <NavLink to="/page">
              Link 2
          </NavLink>
          </nav>
          <Switch>
            <Route exact path="/" render={() => <component1 changeMount={(currentPage, duration) => this.changeMount(currentPage, duration)} />} />
            <Route exact path="/" render={() => <component2 changeMount={(currentPage, duration) => this.changeMount(currentPage, duration)} />} />
          </Switch>
        </Router>
        <table style={{ width: "50%" }}>
          <thead>
            <tr>
              <th>Component</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.currentPage}</td>
              <td>{this.state.duration}</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default App;