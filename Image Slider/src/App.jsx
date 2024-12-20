import ImageSlider from "./Components/Image_Slider"

function App() {

  return (
    <>
      <div id='container'>
        <ImageSlider url="https://picsum.photos/v2/list" pages={"1"} limit={"5"} />
      </div>
    </>
  )
}

export default App
