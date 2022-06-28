
import React, { useState } from "react";

const TabComponent = ({ list, status ,value}) => {
    const [selectTab, setTab] = useState(value);
    

    const handle = (tab) => {
        setTab(tab.value);
        status(tab.value);
    }

    return (
        <div>
            <div className="w-95 h-12 border-b-2 border-solid border-slate-800 m-2 flex text-txt-gray">
                {list.map((tab, i) => {
                    return <div key={i} className={`h-12 grow text-center  cursor-pointer ${selectTab === tab.value ? "border-b-2 border-solid border-blue-1  text-blue-1" : ""}`} onClick={() => handle(tab)}>{tab.matchStatus}</div>
                })}
            </div>
        </div>

    )
}

export default TabComponent;