import { dataImg } from "../data/data";

export function Indicator({ imgSlider, onClick }) {
  return (
    <div className="flex justify-center">
      {dataImg.map((_, index) => {
        const isActive = imgSlider === index; 
        return (
          <button key={index} onClick={() => onClick(index)}>
            <span>
              <svg
                className={`h-8 text-black-500 ${isActive ? "fill-black-500" : "fill-none"}`}
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
}
