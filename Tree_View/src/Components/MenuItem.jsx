import { useState } from "react";
import MenuList from "./MenuList";

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
        <li>
        <div className="flex gap-5">
            <p>{item.label}</p>
            {
                item?.children?.length ?
                <span onClick={() => handleToggle(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? '-' : '+'
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