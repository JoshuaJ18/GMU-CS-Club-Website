import './../pages_css/photos.css'; 
import { photosData } from "./photosDataList.js";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Photos() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === photosData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? photosData.length - 1 : slide - 1);
  };

  return (
    <div className="photo-container">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      <div className="photos">
        <>
          <div className="photo_1">
            <img src={photosData[(slide) % (photosData.length)]} alt="1" />
          </div>
          <div className="photo_2">
            <img src={photosData[(slide+1) % (photosData.length)]} alt="2" />
          </div>
          <div className="photo_3">
            <img src={photosData[(slide+2) % (photosData.length)]} alt="3" />
          </div>
        </>
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      </div>
    </div>
  );
}

export default Photos;