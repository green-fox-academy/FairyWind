import React from 'react';
import { useSelector } from 'react-redux';

export default function Tags() {
  const whatever = useSelector(state => state.tag);
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