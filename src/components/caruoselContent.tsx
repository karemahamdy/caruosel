import React, { useState } from 'react'
import { dataImg } from "../data/data";

function caruoselContent() {
    const [imgSlider, setImgSlider] = useState<number>(0);
  return (
    <div>
       <img
          src={dataImg[imgSlider].src}
          alt={dataImg[imgSlider].alt}
          key={dataImg[imgSlider].src}
          className="animate-fadeIn w-[100%] h-[100%] object-cover"
        />
    </div>
  )
}

export default caruoselContent
