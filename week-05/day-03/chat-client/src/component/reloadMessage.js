import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { reloadMessage } from '../action';

export function ReloadMessage() {
  const dispatch = useDispatch();
  const newMessage = useSelector(state => state.newMessage)

  return (
    <div>
      <button onClick={() => dispatch(reloadMessage(newMessage))}>reload</button>
    </div>
  )
}