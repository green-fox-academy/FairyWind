import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from './store'
import { FetchResult } from './fetchResult'


function App() {
  return (
    <Provider store={store}>
      <FetchResult />
    </Provider>
  )
}

export default App;
