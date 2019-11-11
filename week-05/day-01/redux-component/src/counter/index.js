import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Increaser from './component/increaser';
import Decreaser from './component/decreaser';
import Setter from "./component/setter";
import Resetter from "./component/resetter";

export default function Counter() {
  const whatever = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="function">
      <Increaser />
      <Decreaser />
      <Resetter />
      <Setter />
    </div>
  )
}