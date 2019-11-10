import React from 'react';
import arrow from '../component/arrow.svg';

export default function RightArrow({currentIndex, updateIndex}) {

  return (
    <button className="arrow" onClick={()=>updateIndex(currentIndex+1)}>
      <img src={arrow} alt='left' style={{ height: "20px", transform:"rotate(180deg)"}}>
      </img>
    </button>

  )
}