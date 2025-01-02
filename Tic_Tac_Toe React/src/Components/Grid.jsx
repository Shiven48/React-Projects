import { useEffect, useState } from "react"
import Button from "./Button.jsx"

function Grid() {
    const [grid,setGrid] = useState(Array(9).fill(''))
    const [isXTurn,setIsXTurn] = useState(true)
    const [status,setStatus] = useState('')
    
    useEffect(() => {
        if(!getWinner(grid) && grid.every(square => square !== '')){
            setStatus("This is a Draw! Please Restart.");
        } else if(getWinner(grid)) {
            setStatus(`Winner is ${getWinner(grid)}`);
        } else {
            setStatus(`Next Player is ${isXTurn ? 'X' : 'O'}`);
        }
    },[grid,isXTurn])

    const handleClick = (index) => {
        let cpyArr = [...grid];
        if(getWinner(grid) || cpyArr[index]) return
        cpyArr[index] = isXTurn ? 'X' : 'O'
        setIsXTurn(!isXTurn)
        setGrid(cpyArr)
    }

    const getWinner = (grid) => { 
        const WinningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,7]
        ];

        for(let i = 0;i < WinningPatterns.length; i++){
            const [x,y,z] = WinningPatterns[i];
            if(grid[x] && 
               grid[x] == grid[y] &&
               grid[x] == grid[z]
            ){
                return grid[x]
            }
        }
        return null;
    }

    const handleRestart = () => {
        setGrid(Array(9).fill(''));
        setIsXTurn(true)
    }

    return(
      <div className="place-items-center mt-40 justify-items-center">
        <h1 className="font-bold">Tic Tac Toe</h1>
        <div id="row" className="flex pt-6">
            <Button value={grid[0]} onclick={() => handleClick(0)}/>
            <Button value={grid[1]} onclick={() => handleClick(1)}/>
            <Button value={grid[2]} onclick={() => handleClick(2)}/>
        </div>
        <div id="row" className="flex">
            <Button value={grid[3]} onclick={() => handleClick(3)}/>
            <Button value={grid[4]} onclick={() => handleClick(4)}/>
            <Button value={grid[5]} onclick={() => handleClick(5)}/>
        </div>
        <div id="row" className="flex">
            <Button value={grid[6]} onclick={() => handleClick(6)}/>
            <Button value={grid[7]} onclick={() => handleClick(7)}/>
            <Button value={grid[8]} onclick={() => handleClick(8)}/>
        </div>

        <h2 className="mt-4 mb-4">{status}</h2>

        <button onClick={handleRestart}>Restart</button>
      </div>
    )
  }
  
export default Grid
  