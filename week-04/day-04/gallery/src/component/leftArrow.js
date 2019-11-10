import React from 'react';
import arrow from '../component/arrow.svg';

export default function LeftArrow({currentIndex, updateIndex}) {
  
  return (
    <button className="arrow" onClick={()=>updateIndex(currentIndex-1)}>
      <img src={arrow} alt='left' style={{ height: "20px" }} />
    </button>

  )
}