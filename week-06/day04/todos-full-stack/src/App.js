import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './todoList'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home',
      todo: []
    };
  }

  render() {
    return (
      <div className="container">
        <main>
          <Router>
            <Route exact path="/" component={Home}></Route>
          </Router>
        </main>
      </div>
    )
  }
}


export default App;
