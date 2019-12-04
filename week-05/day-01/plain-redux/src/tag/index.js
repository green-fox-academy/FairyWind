import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTag, removeTag, removeTags } from './actionCreators'

export default function Tag() {
  const whatever = useSelector(state => state.tag);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>tag</p>
      <span>{whatever}</span>
      <button onClick={() => dispatch(addTag('blue'))}>add blue</button>
      <button onClick={() => dispatch(addTag('bold'))}>add bold</button>
      <button onClick={() => dispatch(addTag('hipster'))}>add hipster</button>
      <button onClick={() => dispatch(removeTag('blue'))}>remove blue</button>
      <button onClick={() => dispatch(removeTags())}>remove all tag</button>
    </div>
  )
}