import { useState } from "react";
import {FaStar} from 'react-icons/fa';

export default function Stars({totalStars=5}){
    const[starSelected,setStarSelected] = useState(0)
    const[hover,setHover] = useState(0)

    const handleOnClick = (index) => {
        setStarSelected(index)
    }

    const handleOnMouseMove = (index) => {
        setHover(index)
    }

    const handleOnMouseLeave = () => {
        setHover(starSelected)
    }

    return(
        <>
            <div id="rating" className="flex justify-center">
                {
                    [...Array(totalStars)].map((_,index) => {
                        index += 1
                        return( 
                        <FaStar
                        key={index}
                        className={index <= (starSelected || hover) ? "text-yellow-300":"text-black"}
                        onClick={() => handleOnClick(index)}
                        onMouseMove={() => handleOnMouseMove(index)}
                        onMouseLeave={() => handleOnMouseLeave()}
                        size={40}
                        />
                        )
                    })
                }
            </div>
        </>
    )
}
