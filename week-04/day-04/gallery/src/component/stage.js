import React from 'react';

export default function Stage({ picture, currentIndex }) {
  return (
    <React.Fragment>
      <img className="mainPic" src={picture[currentIndex].src} alt={picture[currentIndex].name}></img>
    </React.Fragment>
  )
}