import { useState } from "react";
import Model from "./Components/Model";

function App() {
    const [toggleState, setToggleState] = useState(false);

    const toggleModelState = () => {
        setToggleState((prev) => !prev);
    };

    function Close(){
        setToggleState(false)
    }

    console.log(toggleState);

    return (
        <div className="justify-items-center items-center text-center">
            <button onClick={toggleModelState} className=" rounded-md bg-slate-800 text-white mt-5 border-red-600 border-2">Change Model</button>
            {toggleState ? (
                <Model 
                    header={<div>Customized Header</div>}
                    body={<p className="font-serif font-semibold">This is the body</p>} 
                    footer={<div>Customized Footer</div>}
                    onClose={Close}
                />
            ) : null}
        </div>
    );
}

export default App;