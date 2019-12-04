import { createStore, combineReducers } from 'redux';

import { counter } from './counter/reducer';
import { tag } from './tag/reducer';

export default createStore(
  combineReducers({
    counter,
    tag
  })
);