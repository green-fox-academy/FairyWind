import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchVotes } from '../redux/actions'

function Result() {
  const dispatch = useDispatch();
  dispatch(fetchVotes());

  const options = useSelector(state => state.options);

  function getWidth(param) {
    return `${param * 10}px`;
  }

  return (
    <div>
      <button onClick={() => dispatch(fetchVotes())}>show Result</button>
      {options.map((element, index) =>
        <span key={index}>
          <p>{element.name}: {element.votes} votes</p>
          <div style={{ width: getWidth(element.votes) }}></div>
        </span>
      )}
    </div>
  );
}

export default Result;