import React from 'react';

export default function Stage({ picture, currentIndex }) {
  return (
    <div className="stage">
      <img className="mainPic" src={picture[currentIndex].src} alt={picture[currentIndex].name}></img>
      <p>{picture[currentIndex].description}</p>
    </div>
  )
}