import React from 'react';
import { useSelector } from 'react-redux';

export default function ComplexCounter() {
  const tagState = useSelector(state => state.tag);
  const counterState = useSelector(state => state.counter);
  return (
    <div className="block">
      <p>Complex Counter</p>
      <span>{tagState.length + parseInt(counterState)}</span>
    </div>
  )
}