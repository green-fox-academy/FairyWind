import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { counter } from './counter/reducer';
import { tag } from './tag/reducer';

export default createStore(
  combineReducers({
    counter,
    tag
  }),
  applyMiddleware(thunk)
);