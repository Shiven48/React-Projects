import { useState } from "react"
import Button from "./Button.jsx"

function Grid() {
    const [grid,setGrid] = useState(Array(9).fill(''))
    const [isXTurn,setIsXTurn] = useState(true)
    
    const handleClick = (index) => {
        console.log(index)
    }

    return(
      <div className="place-items-center mt-52 justify-items-center">
        <div id="row" className="flex">
            <Button onclick={() => handleClick(0)}/>
            <Button onclick={() => handleClick(1)}/>
            <Button onclick={() => handleClick(2)}/>
        </div>
        <div id="row" className="flex">
            <Button onclick={() => handleClick(3)}/>
            <Button onclick={() => handleClick(4)}/>
            <Button onclick={() => handleClick(5)}/>
        </div>
        <div id="row" className="flex">
            <Button onclick={() => handleClick(6)}/>
            <Button onclick={() => handleClick(7)}/>
            <Button onclick={() => handleClick(8)}/>
        </div>
      </div>
    )
  }
  
export default Grid
  