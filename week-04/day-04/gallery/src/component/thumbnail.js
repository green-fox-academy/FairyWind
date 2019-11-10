import React from 'react';

export default function Thumbnail({ picture, updateIndex }) {
  return (
    <React.Fragment>
      {picture.map((element, index) =>
        <button className="thumbButton" onClick={() => updateIndex(index)}>
          <img className="thumbnail" key={index} src={element.src} alt={element.name} />
        </button>
      )}
    </React.Fragment>
  )
}