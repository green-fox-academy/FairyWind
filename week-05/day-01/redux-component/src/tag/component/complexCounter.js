import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCounter } from '../actionCreators'

export default function ComplexCounter() {
  const tagState = useSelector(state => state.tag);
  const counterState = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="block">
      <p>Complex Counter</p>
      <span>{tagState.length + counterState}</span>
    </div>
  )
}