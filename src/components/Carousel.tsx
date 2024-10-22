import React, { useState, useEffect, useCallback, useRef, children } from "react";
// import { dataImg } from "../data/data";
import CarouselArrows from "./caruoselArrow";
import { Indicator } from "./Indicator";

// interface CarouselProps {
//   children: React.ReactNode;
//   infiniteLoop?: boolean;
// }

function Carousel({children}) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoverImg, setHoverImg] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<number | null>(null);
  
  const slides = React.Children.toArray(children);
  const autoplayInterval = 3000;
  const totalSlides = slides.length


  const NextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides])

  const PreviousImage = useCallback(() => {
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
  function handleKeyPressed(e: React.KeyboardEvent) {
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
        role="region"
        aria-roledescription="carousel"
      >

        {slides.map((children, index) => {
           return (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}  aria-roledescription="slide">
              
            {children}

          </div>
    ) })}
        
      </div >

      <CarouselArrows
        onNextSlider={NextImage}
        onPreviousSlider={PreviousImage}
      />

      <Indicator
       slides={slides}
        CurrentIndex={currentIndex}
        onClick={(index: number) => setCurrentIndex(index)}
        aria-hidden="false"
      />
    </>
  );
}

export default Carousel;
