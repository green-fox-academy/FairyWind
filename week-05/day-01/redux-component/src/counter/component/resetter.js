import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCounter } from '../actionCreators'

export default function Resetter() {
  const dispatch = useDispatch();
  return (
    <div className="block">
      <p>The Resetter</p>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  )
}