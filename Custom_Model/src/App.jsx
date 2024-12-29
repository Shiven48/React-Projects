import { useState } from "react";
import Model from "./Components/Model";

function App() {
    const [toggleState, setToggleState] = useState(false);

    const toggleModelState = () => {
        setToggleState((prev) => !prev);
    };

    console.log(toggleState);

    return (
        <>
            <button onClick={toggleModelState}>Change Model</button>
            {toggleState ? (
                <Model 
                    header={<h2>Ayo, this is the header</h2>} 
                    body={<p>This is the body</p>} 
                    footer={<h2>This is the footer</h2>}
                />
            ) : null}
        </>
    );
}

export default App;