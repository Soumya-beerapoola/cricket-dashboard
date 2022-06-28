
import { useEffect, useState } from "react";

const FilterComponent = ({ list,onChange, value }) => {
    const [selectedTab, setSelectedTab] = useState(value);

    const handle = (tab) => {
        setSelectedTab(tab);
        onChange(tab);
    }

    return (
        <div>
            <div className="w-95 h-12 rounded-3xl bg-card-bg m-2 flex">
                {list.map((tab, i) => 
                    <div key={i} className={`h-12 p-2 grow flex items-center justify-center text-center cursor-pointer ${selectedTab === tab ? "border-2 rounded-3xl border-solid border-green-500 " : ""}`} onClick={() => handle(tab)}>{tab}</div>
                )}
            </div>
        </div>
    )
}

export default FilterComponent;