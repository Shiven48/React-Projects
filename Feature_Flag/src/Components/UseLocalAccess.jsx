import { useEffect, useState } from "react";

function UseLocalAccess(key,defaultValue){
    const [value,setValue] = useState( () => {
        let current = ""
        try{
            current = JSON.parse(localStorage.getItem("key") || String(defaultValue));
        }catch(error){
            console.log("Error : "+error)
            current = defaultValue;
        }
        return current;
    } )

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])

    return [value,setValue]
}

export default UseLocalAccess;