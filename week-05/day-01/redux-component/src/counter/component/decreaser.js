import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounterBy } from '../actionCreators'

export default function Decreaser() {
  const whatever = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="block">
      <p>The Decreaser</p>
      <span>{whatever}</span>
      <button onClick={() => dispatch(decreaseCounterBy())}>decrease</button>
    </div>
  )
}