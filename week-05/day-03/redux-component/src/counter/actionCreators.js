export const SET_ACTION = 'set';
export const RESET_ACTION = 'reset';
export const INCREASE_BY_ACTION = 'increase_by';
export const DECREASE_BY_ACTION = 'decrease_by';

export function setCounter(amount) {
  return {
    type: SET_ACTION,
    payload: amount
  }
}

export function decreaseCounterBy(amount = 1) {
  return {
    type: DECREASE_BY_ACTION,
    payload: amount
  }
}

export function increaseCounterBy(amount = 1) {
  return {
    type: INCREASE_BY_ACTION,
    payload: amount
  }
}

export function resetCounter() {
  return {
    type: RESET_ACTION
  }
}

export function increaseByDelay(amount, delay) {
  return (dispatch) => {
    setTimeout(() => dispatch(increaseCounterBy(amount)), parseInt(delay));
  }
}