import { INCREASE_BY_ACTION, DECREASE_BY_ACTION, SET_ACTION, RESET_ACTION } from "./actionCreators";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_BY_ACTION:
      return state + action.payload;
    case DECREASE_BY_ACTION:
      return state - action.payload;
    case RESET_ACTION:
      return state = 0;
    case SET_ACTION:
      return state = action.payload

    default:
      return state;
  }
}