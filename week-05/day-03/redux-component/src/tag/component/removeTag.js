import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTag } from '../actionCreators'

export default function Tags() {
  const whatever = useSelector(state => state.tag);
  const dispatch = useDispatch();

  return (
    <div className="block">
      <p>Tags</p>
      <ul>
        {whatever.map((element, index) =>
          <li
            className="remove"
            key={index}
            onClick={() => dispatch(removeTag(element))}>{element}</li>
        )}
      </ul>
    </div>
  )
}