import { useState } from "react"
import { dataImg } from "../data/data"
import CarouselArrows from "./caruoselArrow"
import {Indicator} from "./Indicator"

function Carousel() {
  const [imgSlider, setImgSlider] = useState(0)
  

  function NextImage() {
    setImgSlider((prev) => (prev === dataImg.length - 1 ? 0 : prev + 1))
  }

  function PreviousImage() {
    setImgSlider((prev) => (prev === 0 ? dataImg.length - 1 : prev - 1))
  }

  return (
    <>
      <div className="carousel overflow-hidden h-96 w-96 relative p-" aria-hidden>  
        <img src={dataImg[imgSlider].src} alt={dataImg.alt} key={dataImg[imgSlider].src} className="animate-fadeIn w-[100%] h-[100%] object-cover" />
      </div>
     
    <CarouselArrows onNextSlider={NextImage} onPreviousSlider={PreviousImage}  aria-hidden/>
    
  <Indicator  imgSlider={imgSlider}  onClick={(index) => setImgSlider(index)}  aria-hidden/>

    
    </>
  )
}
export default Carousel