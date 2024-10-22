import  { useState, useEffect, useCallback, useRef } from "react";
import { dataImg } from "../data/data";
import CarouselArrows from "./caruoselArrow";
import { Indicator } from "./Indicator";

// interface CarouselProps {
//   children: React.ReactNode;
//   infiniteLoop?: boolean;
// }

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoverImg, setHoverImg] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef =  useRef<number | null>(null); 

  const autoplayInterval = 3000;
  const  totalSlides = dataImg.length


  const NextImage = useCallback(() =>  {
    setCurrentIndex((prev) => (prev === totalSlides- 1 ? 0 : prev + 1));
  }, [totalSlides])

  const PreviousImage =   useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides])

  
  // auto play
  const startAutoplay = useCallback(() => {
    if (autoplayInterval > 0 && totalSlides > 1 && autoplayTimerRef.current === null) {
      autoplayTimerRef.current = setInterval(NextImage, autoplayInterval);
    }
  }, [autoplayInterval, NextImage, totalSlides]);

  const endAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null; 
    }
  }, []);

  // stop autoPlay on hover
  useEffect(() => {
    if (!hoverImg) {
      startAutoplay();
    } else {
      endAutoplay();
    }
    return () => endAutoplay();
  }, [hoverImg, startAutoplay, endAutoplay]);

  // key
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
          src={dataImg[currentIndex].src}
          alt={dataImg[currentIndex].alt}
          key={dataImg[currentIndex].src}
          className="animate-fadeIn w-[100%] h-[100%] object-cover"
        />
      </div>
      <CarouselArrows
        onNextSlider={NextImage}
        onPreviousSlider={PreviousImage}
        aria-hidden="false"
      />
      <Indicator
        CurrentIndex={currentIndex}
        onClick={(index: number) => setCurrentIndex(index)}
        aria-hidden="false"
      />
    </>
  );
}

export default Carousel;
