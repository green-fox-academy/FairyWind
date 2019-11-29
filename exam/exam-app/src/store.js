import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { votes } from './redux/reducer';

export default createStore(votes, applyMiddleware(thunk));