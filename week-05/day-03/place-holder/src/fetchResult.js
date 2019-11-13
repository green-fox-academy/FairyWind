import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage } from './action';


export function FetchResult() {
  const image = useSelector(state => state.image);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();

  return (
      <div>
        <button onClick={() => dispatch(fetchImage())}>fetch</button>
        <p>{status}</p>
        {image.map((element, index) =>
          <img src={element.thumbnailUrl} alt={element.title} key={index}></img>
        )}
      </div>
  )
}
