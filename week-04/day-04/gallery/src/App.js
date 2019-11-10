import React, { useState } from 'react';
import './App.css';
import picture from './data/pictureData'
import LeftArrow from './component/leftArrow';
import RightArrow from './component/rightArrow';
import Stage from './component/stage';
import Thumbnail from './component/thumbnail';


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function updateIndex(currentIndex) {
    if (currentIndex < 0 || currentIndex >= picture.length){
      return;
    }
    setCurrentIndex(currentIndex);
 }

  return (
    <div className="container">
      <main>
        <LeftArrow currentIndex={currentIndex} updateIndex={updateIndex} />
        <Stage picture={picture} currentIndex={currentIndex} />
        <RightArrow currentIndex={currentIndex} updateIndex={updateIndex} />
      </main>
      <footer>
        <Thumbnail picture={picture} updateIndex={updateIndex} />
      </footer>

    </div>
  );
}

export default App;
