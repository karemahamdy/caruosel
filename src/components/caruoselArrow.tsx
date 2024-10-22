
import React from 'react';

interface CarouselArrowsProps {
  onPreviousSlider: () => void;
  onNextSlider: () => void;
}

const CarouselArrows: React.FC<CarouselArrowsProps> = ({ onPreviousSlider, onNextSlider }) => {
  return (
    <div className="">
      <button
        className="absolute flex justify-between gap-4 top-[50%] left-[30%]"
         aria-label="Previous slide"
        onClick={onPreviousSlider}
      >
        <svg
          className="h-12 w-20 text-black-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="9" y2="16" />
          <line x1="5" y1="12" x2="9" y2="8" />
        </svg>
      </button>
      <button
        className="absolute flex justify-between gap-4 top-[50%] right-[30%]"
         aria-label="Next slide"
        onClick={onNextSlider}
      >
        <svg
          className="h-12 w-20 text-black-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselArrows;


