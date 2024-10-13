import { useState } from "react"
import { dataImg } from "../data/data"
import CarouselArrows from "./caruoselArrow"

function Carousel() {
  const [imgSlider, setImgSlder] = useState(0)

  function NextImage() {
    setImgSlder((prev) => (prev === dataImg.length - 1 ? 0 : prev + 1))
  }


  function PreviousImage() {
    setImgSlder((prev) => (prev === 0 ? dataImg.length - 1 : prev - 1))


  }


  return (
    <>
      <div className="carousel overflow-hidden h-96 w-96 relative">
        {/* {dataImg.map((img ,index) => ( */}
        <img src={dataImg[imgSlider].src} alt={dataImg.alt} key={dataImg[imgSlider].src} className=" w-[100%] h-[100%] object-cover" />
        {/* ))} */}
      </div>
     
    <CarouselArrows onNextSlider={NextImage} onPreviousSlider={PreviousImage}/>
    </>
  )
}
export default Carousel