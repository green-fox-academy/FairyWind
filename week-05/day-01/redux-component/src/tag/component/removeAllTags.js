import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTags } from '../actionCreators'

export default function RemoveAllTags() {
  const dispatch = useDispatch();

  return (
    <div className="block">
      <p>Remove All Tags</p>
      <button onClick={() => dispatch(removeTags())}>Remove all Tags</button>
    </div>
  )
}