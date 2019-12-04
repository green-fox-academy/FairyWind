import React from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../action';

let input = '';
export function SendMessage() {
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(e) => input = e.target.value}></input>
      <button onClick={() => dispatch(sendMessage(input))}>send</button>
    </div>
  )
}
