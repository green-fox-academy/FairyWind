import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../action';


export function FetchResult() {
  const message = useSelector(state => state.message);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchMessage())}>fetch</button>
      <p>{status}</p>
      {message.map((element, index) =>
        <div key={index} className="message" style={element.style}>
          <p>{element.user}</p>
          <p>{element.text}</p>
          <p>{element.createdAt}</p>
        </div>
      )}
    </div>
  )
}
