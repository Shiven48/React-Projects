import { useCallback } from "react"
import { useState } from "react"

function App() {
    // For false rgb enabled
    const[hexEnabled,setHexEnabled] = useState(false)
    const[rgbValue,setRgbValue] = useState("rgb(00,00,00)")
    const[hexValue,setHexValue] = useState("#000000")
    const[type,setType] = useState("rgb")

    const generateRandomColor = useCallback( () => {
      const nums = "0123456789ABCDEF"

      if(hexEnabled) {
        let hex = "#"
        for(let idx = 0 ;idx < 6;idx++){
          const NumsIndex = Math.floor(Math.random() * nums.length)
          hex += nums.charAt(NumsIndex)
        }
        setHexValue(hex)
      }

      if(!hexEnabled) {
        const r = Math.floor(Math.random() * 256) 
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        setRgbValue(`rgb(${r},${g},${b})`)
      }
    },[rgbValue])
    
    const changeToRGB = () => {
      if(hexEnabled){ 
        setHexEnabled((prev) => !prev)
      }
      setType("rgb")
      generateRandomColor()
    }

    const changeToHex = () => {
      if(!hexEnabled){ 
        setHexEnabled((prev) => !prev)
      }
        setType("hex")
        generateRandomColor()
    }

  return (
    <>
      <body className="bg-slate-800 h-screen">
        <div className="justify-items-center">
          <div className="text-center text-2xl text-yellow-400 py-8">
          Color Generator Project
          </div>
          <div id="buttons_header">
            <button 
            className="bg-black text-white w-36 rounded-xl mx-4 text-center"
            onClick={changeToHex}
            >
              For hex
            </button>
            <button 
            className="bg-black text-white w-36 rounded-xl mx-4 text-center"
            onClick={changeToRGB}
            >
              For rgb
            </button>
            <button 
            className="bg-black text-white w-36 rounded-xl mx-4 text-center"
            onClick={generateRandomColor}
            >
              Generate color
            </button>
          </div>
          <div className="w-96 h-96 my-16 rounded-2xl" style={!hexEnabled ? 
            {backgroundColor:rgbValue} : 
            {backgroundColor:hexValue}}>
          <h3 className="text-white py-80 text-center text-3xl">
            {type} : {hexEnabled ? hexValue : rgbValue} 
            </h3>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
