import { useState } from "react";
import {TabData} from "../TabData";
const Tabs = () => {
    
    const [currentTabIndex,setCurrentTabIndex] = useState(0)
    const [tabContent,setTabContent] = useState("");

    const tabs = TabData.tabs;

    const handleClick = (index,content) => {

        // if index is not equal to current Index then change the index state
        currentTabIndex != index ?
        setCurrentTabIndex(index)
        : setCurrentTabIndex((prev) => prev)

        handleContentChange(content);
    };

    const handleContentChange = (content) => {
        // setting the content of that tab based on the index
        setTabContent(content)
    }

    console.log(tabContent)

    return(
        <div className="bg-[#242424] min-h-screen justify-items-center">
        <div className="flex gap-3">
            { tabs?.length ? tabs.map((tab) => (
                <div id="tab" key={tab.Id} onClick={() => handleClick(tab.Id,tab.TabContent)}
                className="h-6 w-10 rounded-md mt-14 bg-yellow-300 items-center text-center cursor-pointer">
                    <p className="items-center text-gray-800"> {tab.TabName} </p>
                </div> )) : null
            }
        </div>
        <div id="tab-Content" className="">
            { tabContent ? 
                <div className="text-white mt-24"> {tabContent} </div>  
            : null
            }
            </div>
        </div>
    )
}

export default Tabs;