import React from 'react';
import Increaser from './component/increaser';
import Decreaser from './component/decreaser';
import Setter from "./component/setter";
import Resetter from "./component/resetter";

export default function Counter() {
  return (
    <div className="function">
      <Increaser />
      <Decreaser />
      <Resetter />
      <Setter />
    </div>
  )
}