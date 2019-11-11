import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTag } from '../actionCreators'

export default function AddTag() {
  const whatever = useSelector(state => state.counter);
  const dispatch = useDispatch();
  let input = 0;
  return (
    <div className="block">
      <p>Add Tag</p>
      <input
        type="text"
        onChange={(e) => {
          input = e.target.value
        }}
        placeholder="input a color">
      </input>
      <button onClick={() => dispatch(addTag(input))}>Add</button>
    </div>
  )
}