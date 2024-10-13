import { useState, useEffect} from "react"
import { dataImg } from "../data/data"
import CarouselArrows from "./caruoselArrow"
import {Indicator} from "./Indicator"

function Carousel() {
  const [imgSlider, setImgSlider] = useState(0)
  const [hoverImg, setHoverImg] = useState(false);

  function NextImage() {
    setImgSlider((prev) => (prev === dataImg.length - 1 ? 0 : prev + 1))
  }

  function PreviousImage() {
    setImgSlider((prev) => (prev === 0 ? dataImg.length - 1 : prev - 1))
  }

  useEffect(() => {
    let intervalId;
    if (!hoverImg) {
      intervalId = setInterval(NextImage, 1000);
    }
    return () => {
      clearInterval(intervalId); 
    };
  }, [hoverImg]);

  return (
    <>

      <div className="carousel overflow-hidden h-96 w-96 relative p-4" 
        onMouseEnter={() => setHoverImg(true)} 
        onMouseLeave={() => setHoverImg(false)}>  
        <img src={dataImg[imgSlider].src} alt={dataImg.alt} key={dataImg[imgSlider].src} className="animate-fadeIn w-[100%] h-[100%] object-cover" />
      </div>
     
    <CarouselArrows onNextSlider={NextImage} onPreviousSlider={PreviousImage}  aria-hidden="false"/>
    <Indicator  imgSlider={imgSlider}  onClick={(index) => setImgSlider(index)}  aria-hidden="false"/>

    
    </>
  )
}
export default Carousel