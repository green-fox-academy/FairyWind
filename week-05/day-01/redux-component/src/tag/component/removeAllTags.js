import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTags, removeTag } from '../actionCreators'

export default function RemoveAllTags() {
  const whatever = useSelector(state => state.tag);
  const dispatch = useDispatch();

  return (
    <div className="block">
      <p>Remove All Tags</p>
      <button onClick={()=>dispatch(removeTags())}>Remove all Tags</button>
    </div>
  )
}