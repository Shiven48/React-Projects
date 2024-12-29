import { useState } from "react";
import {TabData} from "../TabData";
const Tabs = () => {
    
    const [currentTabIndex,setCurrentTabIndex] = useState(0)
    const [tabContent,setTabContent] = useState("");

    const tabs = TabData.tabs;

    const handleClick = (index,content) => {
        setCurrentTabIndex(index);
        handleContentChange(content);
    };

    const handleContentChange = (content) => {
        setTabContent(content)
    }

    console.log(tabContent)

    return(
        <>
        <div>
            { tabs?.length ? tabs.map((tab) => (
                <div id="tab" key={tab.Id} onClick={() => handleClick(tab.Id,tab.TabContent)}>
                    {tab.TabName}
                </div> )) : null
            }
        </div>
        <div className="tab-content">
            { tabContent ? ( <div> {tabContent} </div> ) 
            : null
            }
            </div>
        </>
    )
}

export default Tabs;