import './styles.scss'
import React, { useEffect, useState } from "react";

function SlideImage({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const previous = () => {
    selectedIndex !== 0 ? setSelectedIndex(index => index - 1) : setSelectedIndex(index => images.length - 1)
  }

  const changeSelectedDotOnCLick = (index) => {
    setSelectedIndex(index);
  }

  const next = () => {
    selectedIndex !== images.length - 1 ? setSelectedIndex(index => index + 1) : setSelectedIndex(index => 0)
  }
  
  const renderDots = (indexArray, selectedIndex, onClickDot) => {
    return (
      <div onClick={()=>{onClickDot(indexArray)}} className={`dot ${indexArray === selectedIndex ? 'active-dot' : ''}`} key={indexArray}></div>
    )
  }
  

  return(
    <div className="slideshow-componente">
      <div className="slideshow-container">
        <div className="SlideImage">
          {images[selectedIndex].indexOf('youtube.com') > 0 ? 
          <iframe src="https://www.youtube.com/embed/9axpikOIHEo">
          </iframe>
          : 
            < img src={images[selectedIndex]} alt=""/>
          }
        </div>
        
        <span className="prev" onClick={previous}>&#10094;</span>
        <span className="next" onClick={next}>&#10095;</span>
      </div>
      <div className="slideshow-dots">
        {images.map((image, index) => renderDots(index, selectedIndex, changeSelectedDotOnCLick))}
      </div>
    </div>
  );
}


export default SlideImage;