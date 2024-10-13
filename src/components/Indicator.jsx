import { dataImg } from "../data/data"

export function Indicator({onClick}) {
  return (
    <>
      <div className="flex justify-center">
        {dataImg.map((_, index) => (
          <button key={index} onClick={() => onClick(index)}>
            <span>
              <svg
                className="h-8 text-red-500"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </>
  )
}

