import './App.css'
import Carousel from "./components/Carousel.js"

function App() {
  return (
    <>
  <Carousel
  >
    <div className="bg-red-500">slide 1</div>
    <div className="bg-gray-500">slide 2</div>
    <div className="bg-yellow-500">slide 3</div>
    <div className="bg-blue-500">slide 4</div>
    <div className="bg-green-500">slide 5</div>
    <div className="bg-orange-500">slide 6</div>
    </Carousel>
    </>
  )
}

export default App
