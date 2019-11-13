import { SHOW_IMAGE, START_FETCH, END_FETCH } from './action'

const initial = {
  image: [],
  status: ''
}

export const image = (state = initial, action) => {
  switch (action.type) {
    case START_FETCH:
      return state = { ...state, status: 'start' };
    case SHOW_IMAGE:
      let temp = [];
      for (let i = 0; i < 10; i++) {
        temp[i] = action.payload[i];
      }
      return state = { image: temp, status: 'success' };
    case END_FETCH:
      return state = { ...state, status: 'end' };
    default:
      return state;
  }
}