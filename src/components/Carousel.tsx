import  { useState, useEffect, useCallback } from "react";
import { dataImg } from "../data/data";
import CarouselArrows from "./caruoselArrow";
import { Indicator } from "./Indicator";

interface dataImg {
  src: string;
  alt: string;
}

function Carousel() {
  const [imgSlider, setImgSlider] = useState<number>(0);
  const [hoverImg, setHoverImg] = useState<boolean>(false);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const NextImage = useCallback(() =>  {
    setImgSlider((prev) => (prev === dataImg.length - 1 ? 0 : prev + 1));
  }, [])

  const PreviousImage =   useCallback(() => {
    setImgSlider((prev) => (prev === 0 ? dataImg.length - 1 : prev - 1));
  }, [])

  useEffect(() => {
    let intervalId: number ;
    if (!hoverImg) {
      intervalId = setInterval(NextImage, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [hoverImg,NextImage,PreviousImage ]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      NextImage();
    }

    if (diff < -5) {
      PreviousImage();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div
        className="carousel overflow-hidden h-96 w-96 relative p-4"
        onMouseEnter={() => setHoverImg(true)}
        onMouseLeave={() => setHoverImg(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
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