import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseByDelay } from '../actionCreators'

let amount = 0;
let delay = 0;

export default function Thunk() {
  const dispatch = useDispatch();
  return (
    <div className="block">
      <p>Delay increase</p>
      <input
        type="text"
        onChange={(e) => {
          amount = e.target.value
        }}
        placeholder="amount">
      </input>
      <input
        type="text"
        onChange={(e) => {
          delay = e.target.value
        }}
        placeholder="ms to delay">
      </input>
      <button onClick={() => dispatch(increaseByDelay(amount, delay))}>increase</button>
    </div>
  )
}