import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store';

import Header from './componet/header';
import Vote from './componet/vote-form';
import Result from './componet/vote-result';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Header></Header>
        <Vote></Vote>
        <Route exact path="/result" render={() => <Result />} />
      </Provider>
    </div>
  );
}

export default App;
