import  { useState, useEffect, useCallback, useRef } from "react";
import { dataImg } from "../data/data";
import CarouselArrows from "./caruoselArrow";
import { Indicator } from "./Indicator";

// interface CarouselProps {
//   children: React.ReactNode;
//   infiniteLoop?: boolean;
// }

function Carousel() {
  const [imgSlider, setImgSlider] = useState<number>(0);
  const [hoverImg, setHoverImg] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const NextImage = useCallback(() =>  {
    setImgSlider((prev) => (prev === dataImg.length - 1 ? 0 : prev + 1));
  }, [])

  const PreviousImage =   useCallback(() => {
    setImgSlider((prev) => (prev === 0 ? dataImg.length - 1 : prev - 1));
  }, [])

  // useEffect(() => {
  //   let intervalId: number ;
  //   if (!hoverImg) {
  //     intervalId = setInterval(NextImage, 1000);
  //   }
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [hoverImg,NextImage,PreviousImage ]);

   function handleKeyPressed (e: React.KeyboardEvent) {
       if (e.key === 'ArrowLeft') {
        PreviousImage()
      }
    else if (e.key === 'ArrowRight') {
      NextImage()
      }
      
  }


  return (
    <>
      <div
        className="carousel overflow- h-96 w-full relative p-4"
        ref={carouselRef}
        onMouseEnter={() => setHoverImg(true)}
        onMouseLeave={() => setHoverImg(false)}
        onKeyDown={handleKeyPressed}
        tabIndex={0} 
      >
        <img
          src={dataImg[imgSlider].src}
          alt={dataImg[imgSlider].alt}
          key={dataImg[imgSlider].src}
          className="animate-fadeIn w-[100%] h-[100%] object-cover"
        />
      </div>
      <CarouselArrows
        onNextSlider={NextImage}
        onPreviousSlider={PreviousImage}
        aria-hidden="false"
      />
      <Indicator
        imgSlider={imgSlider}
        onClick={(index: number) => setImgSlider(index)}
        aria-hidden="false"
      />
    </>
  );
}

export default Carousel;
