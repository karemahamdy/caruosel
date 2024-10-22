
import React from 'react';


interface IndicatorProps {
  CurrentIndex: number;
  onClick: (index: number) => void;
  slides: React.ReactNode[]
}

export const Indicator: React.FC<IndicatorProps> = ({ CurrentIndex, onClick, slides }) => {
  return (
    <div className="flex justify-center">
      {slides.map((_, index) => {
        const isActive = CurrentIndex === index;
        return (
          <button
          aria-label={`slide ${index + 1}`}
           key={index} onClick={() => onClick(index)}>
            <span>
              <svg
                className={`h-8 text-black-500 ${
                  isActive ? "fill-black-500" : "fill-none"
                }`}
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
              </svg>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Indicator;