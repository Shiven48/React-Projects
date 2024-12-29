import { useEffect, useState } from "react";

const Model = ({header,body,footer}) => {

    const [headerState,setHeaderState] = useState("")
    const [bodyState,setBodyState] = useState("")
    const [footerState,setFooterState] = useState("")

    useEffect(() => {
        setData(header,body,footer)
    },[header,body,footer])

    function setData(header,body,footer) {
        setHeaderState(header)
        setBodyState(body)
        setFooterState(footer)
    }

 return(
    <>
        <div id="content">
            <div>{headerState}</div>
            <div>{bodyState}</div>
            <div>{footerState}</div>
        </div>
    </>
 )
}

export default Model;