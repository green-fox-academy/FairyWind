import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCounter } from '../actionCreators'

export default function Setter() {
  const whatever = useSelector(state => state.counter);
  const dispatch = useDispatch();
  let input = 0;
  return (
    <div className="block">
      <p>The Setter</p>
      <input
        type="text"
        onChange={(e) => {
          input = e.target.value
        }}
        placeholder="input a number">
      </input>
      <button onClick={() => dispatch(setCounter(input))}>Set</button>
    </div>
  )
}