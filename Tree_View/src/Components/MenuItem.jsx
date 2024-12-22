import { useState } from "react";
import MenuList from "./MenuList";
import {FaPlus,FaMinus} from "react-icons/fa" 

export default function MenuItem({ item }) {

    const[displayCurrentChildren,setDisplayCurrentChildren] = useState({})

    function handleToggle(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
    })
    }

    console.log(displayCurrentChildren)

    return (
        <li className="">
        <div className="flex gap-5 items-center cursor-pointer">
            <p className="mt-8 px-6 text-lg text-white">{item.label}</p>
            {
                item?.children?.length ?
                <span onClick={() => handleToggle(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? 
                        <FaMinus className="text-[#fff] mt-10" size={25}/> 
                        : <FaPlus className="text-[#fff] mt-10"/>
                    }
                </span>
                :null
            }
        </div>
            {
            (item?.children?.length > 0 && displayCurrentChildren[item.label]) ?
                <MenuList list={item.children} />
            : null
            }
        </li>
    )
}