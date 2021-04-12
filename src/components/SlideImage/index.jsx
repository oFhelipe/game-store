import './styles.scss'

function SlideImage({img}) {
  return(
    <div className="slideshow-componente">
      <div className="slideshow-container">
        <div className="slideshow-dots">
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>
    </div>
  );
}


export default SlideImage;