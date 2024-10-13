 function CarouselArrows({ onPreviousSlider, onNextSlider }) {
return (
  <>
  <div className="">
  <button className="absolute flex justify-between gap-4  top-[50%] left-[0]" onClick={onPreviousSlider}> <svg class="h-12 w-20 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="9" y2="16" />  <line x1="5" y1="12" x2="9" y2="8" /></svg></button>
  <button className="absolute flex justify-between gap-4  top-[50%] right-[0]" onClick={onNextSlider}><svg class="h-12 w-20 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg></button>
  </div>
  </>
)

}
export default CarouselArrows