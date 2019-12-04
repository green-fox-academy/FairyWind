import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounterBy } from '../actionCreators'

export default function Increaser() {
  const whatever = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="block">
      <p>The Increaser</p>
      <span>{whatever}</span>
      <button onClick={() => dispatch(increaseCounterBy())}>increase</button>
    </div>
  )
}