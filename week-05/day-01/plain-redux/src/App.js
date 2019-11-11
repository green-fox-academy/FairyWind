import React from 'react';
import { Provider } from "react-redux";
import Counter from './counter';
import store from './store'
import Tag  from "./tag";


function App() {
  return (
    <Provider store={store}>
    <Counter />
    <Tag />
    </Provider>
  )
}

export default App;
