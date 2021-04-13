import './styles.scss'
import React, { useState } from "react";

function SlideImage({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const previous = () => {
    selectedIndex !== 0 ? setSelectedIndex(index => index - 1) : setSelectedIndex(index => images.length - 1)
  }

  const next = () => {
    selectedIndex !== images.length - 1 ? setSelectedIndex(index => index + 1) : setSelectedIndex(index => 0)
  }

  return(
    <div className="slideshow-componente">
      <div className="slideshow-container">
        <div className="SlideImage">
          <img src={images[selectedIndex]} alt=""/>
        </div>
        
        
        <span className="prev" onClick={previous}>&#10094;</span>
        <span className="next" onClick={next}>&#10095;</span>
      </div>
      <div className="slideshow-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}


export default SlideImage;