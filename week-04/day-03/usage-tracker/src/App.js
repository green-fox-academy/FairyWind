import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Component1 from './component/component1';
import Component2 from './component/component2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  changeMount(currentPage, duration) {
    this.setState({
      data: [...[...this.state.data],
      {
        currentPage: currentPage,
        duration: duration
      }
      ]
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
            <Route exact path="/" render={() => <Component1 changeMount={this.changeMount.bind(this)} />} />
            <Route exact path="/page" render={() => <Component2 changeMount={this.changeMount.bind(this)} />} />
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
            {this.state.data.map(({ currentPage, duration }, index) => {
              return (
                <tr key={index} style={{ textAlign:"center" }}>
                  <td>{currentPage}</td>
                  <td>{`${duration}s`}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default App;