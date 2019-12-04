import { ADD_TAG, REMOVE_TAG, REMOVE_TAGS } from "./actionCreators";

const defaultState = ['blue', 'bold', 'hipster'];
export const tag = (state = defaultState, action) => {
  let index = state.indexOf(action.payload);
  switch (action.type) {
    case ADD_TAG:
      if (index === -1) {
        return state = [...state, action.payload];
      } else {
        return state;
      }
    case REMOVE_TAG:
      let tempArr = [...state];
      if (index !== -1) {
        tempArr.splice(index, 1);
      }
      return state = tempArr;
    case REMOVE_TAGS:
      return state = [];
    default:
      return state;
  }
}