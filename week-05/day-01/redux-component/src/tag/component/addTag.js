import React from 'react';
import { useDispatch } from 'react-redux';
import { addTag } from '../actionCreators'

export default function AddTag() {
  const dispatch = useDispatch();
  let input = '';
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