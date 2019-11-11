import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCounter } from '../actionCreators'

export default function Tags() {
  const whatever = useSelector(state => state.tag);
  const dispatch = useDispatch();
  return (
    <div className="block">
      <p>Tags</p>
      <ul>
        {whatever.map((element, index) =>
          <li key={index}>{element}</li>
        )}
      </ul>
    </div>
  )
}