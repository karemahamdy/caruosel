import { dataImg } from "../data/data"

function Caruosel() {

  return (
    <>
     <div className="carousel">
    {dataImg.map((img ,index) => (
    <img src={img.src} alt={img.alt} key={index} />
  ))}
    </div>
    </>
  )
}
export default Caruosel