import React from "react";

const MatchInfo = ({seriesName,leauge}) => {
    return (
        <div className="w-95 h-12  m-2 mb-0 bg-card-bg rounded flex p-4 justify-between items-center">
            <div className="flex w-[90%]">     
            <div className="bg-red-500 w-12 h-5  rounded text-center ">{leauge==="International"?"INT":"DOM"}</div>
            <div className="mx-2 whitespace-nowrap overflow-hidden text-ellipsis">{seriesName}</div>
            </div> 
            <div className="text-green-500"> > </div>
        </div>
    )
}

export default MatchInfo;