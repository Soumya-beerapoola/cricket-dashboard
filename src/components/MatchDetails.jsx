const MatchDetails = ({matchType, matchStatus, homeTeam, awayTeam, matchDate, venue, matchNumber}) => {
    return (
        <div className="w-95  m-2 p-4 rounded  bg-card-bg flex flex-col min-w-[330px]">
            <div className="flex ">
                <div className="text-txt-gray">{matchNumber}</div>
                <div className="rounded-xl ml-2 mb-2 border-2 border-solid border-blue-1 text-blue-1 w-25 h-6 text-center flex p-2 justify-between items-center">
                {matchStatus.toUpperCase()}
                </div>
            </div>
            <div className="text-txt-gray">{venue}</div>
            <div className="flex my-2 py-3 justify-evenly bg-card-bg2 rounded">
                <div>{homeTeam}</div>
                <div className="border-2 text-green-500 px-2 rounded-3xl border-solid border-green-500">
                {matchType}
                </div>
                <div>{awayTeam}</div>
            </div>
            <div className="my-2 py-1 bg-card-bg2 rounded text-center">{matchDate}</div>
        </div>
    )
}

export default MatchDetails;