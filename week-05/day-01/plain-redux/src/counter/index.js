import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCounter, increaseCounterBy, decreaseCounterBy, resetCounter } from './actionCreators'

export default function Counter() {
  const whatever = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>counter</p>
      <span>{whatever}</span>
      <button onClick={() => dispatch(setCounter(6))}>set by 6</button>
      <button onClick={() => dispatch(increaseCounterBy())}>increase</button>
      <button onClick={() => dispatch(increaseCounterBy(2))}>increase by 2</button>
      <button onClick={() => dispatch(resetCounter())}>reset</button>
      <button onClick={() => dispatch(decreaseCounterBy(4))}>decrease by 4</button>
    </div>
  )
}