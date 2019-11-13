import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from './store'
import { FetchResult } from './component/fetchResult'
import { SendMessage } from './component/sendMessage'
import { ReloadMessage } from './component/reloadMessage'


function App() {
  return (
    <Provider store={store}>
      <SendMessage />
      <ReloadMessage />
      <FetchResult />
    </Provider>
  )
}

export default App;
