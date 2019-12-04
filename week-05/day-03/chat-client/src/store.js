import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { message } from './reducer';

export default createStore(message, applyMiddleware(thunk));