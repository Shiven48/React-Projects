import { useContext } from "react"
import QR from "./QR.jsx"
import Tabs from "./Tabs.jsx"
import Theme from "./Theme.jsx"
import { featureFlagsGlobalContext } from "./Context/index.jsx"

function FeatureFlag(){

    const {loading, enabledFlags} = useContext(featureFlagsGlobalContext)
    const componentsToRender = [
        {
            key: "QR",
            component: <QR/>
        },
        {
            key: "Tabs",
            component: <Tabs/>
        },
        {
            key: "Theme",
            component: <Theme/>
        } 
    ]

    if(loading){
        <h1>Loading data! Please Wait.</h1>
    }


    function getEnabledFlags(key){
        return enabledFlags[key]
    }

    return(
        <div>
            <div className="text-center font-semibold">Feature Flag</div>
            {
                componentsToRender.map( item => 
                    getEnabledFlags(item.key) ? 
                    item.component 
                    : null
                )
            }
        </div>
    )
}

export default FeatureFlag;

