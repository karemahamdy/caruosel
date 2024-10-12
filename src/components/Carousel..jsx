import { dataImg } from "../data/data"

function Carousel() {

  return (
    <>
     <div className="carousel">
    {dataImg.map((img ,index) => (
    <img src={img.src} alt={img.alt} key={index} className=" w-[100%]"/>
  ))}
    </div>
    </>
  )
}
export default Carousel