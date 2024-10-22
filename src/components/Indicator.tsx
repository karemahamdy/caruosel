
import React from 'react';
import { dataImg } from "../data/data";

interface IndicatorProps {
  CurrentIndex: number;
  onClick: (index: number) => void;
}

export const Indicator: React.FC<IndicatorProps> = ({ CurrentIndex, onClick }) => {
  return (
    <div className="flex justify-center">
      {dataImg.map((_, index) => {
        const isActive = CurrentIndex === index;
        return (
          <button key={index} onClick={() => onClick(index)}>
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