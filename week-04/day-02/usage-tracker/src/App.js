import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home'
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error" component={Error} />
          <Route path="/error/:errorcode" component={ErrorCode} />
          <Route render={() => <h1>This page is not implement yet.</h1>} />
        </Switch>
      </Router>
    )
  }
}

const Home = () => <h1>Hello World!</h1>;
const Error = () => <h1>Something bad happened.</h1>;
const ErrorCode = ({match}) => <h1>Error: {match.params.errorcode}</h1>;

export default App;