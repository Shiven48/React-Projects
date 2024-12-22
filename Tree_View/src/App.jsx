import menus from "./Components/data.js" 
import MenuList from "./Components/MenuList.jsx"

function App() {

  return (
    <>
    <div className="min-h-screen w-80 bg-[rgb(0,71,110)]">
    <MenuList list={menus}/>
    </div>
    </>
  )
}

export default App
