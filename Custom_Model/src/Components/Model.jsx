import { useEffect, useState } from "react";

const Model = ({header,body,footer,onClose}) => {

    const [headerState,setHeaderState] = useState("")
    const [bodyState,setBodyState] = useState("")
    const [footerState,setFooterState] = useState("")

    useEffect(() => {
        setData(header,body,footer)
    },[header,body,footer])

    function setData(header="Header",body,footer="Footer") {
        setHeaderState(header)
        setBodyState(body)
        setFooterState(footer)
    }

 return(
    <div className="fixed z-10 pt-16 left-0 top-0 h-screen w-screen overflow-auto bg-[#172d5a] duration-1000">
        <div id="content" className="relative m-auto p-0 w-3/4 bg-white justify-items-center border-white border">
            <div className="w-full h-full">
                <span id="close-model-icon" onClick={onClose} className="cursor-pointer font-bold text-4xl float-right text-red-600">&times;</span>
                <h2 className="font-bold pl-1 pt-4 bg-[#070c15] text-white pb-4">{headerState}</h2>
            </div>
            <div className="mt-4 w-full h-full pt-6 pb-6">
                {bodyState}
            </div>
            <div className="w-full h-full">
                <h2 className="font-bold pr-3 pt-4 bg-[#070c15] text-white text-center pb-4">{footerState}</h2>
            </div>
        </div>
    </div>
 )
}

export default Model;