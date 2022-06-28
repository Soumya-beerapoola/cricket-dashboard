const MatchDetails = () => {
    return (
        <div className="w-95  m-2 p-4 rounded  bg-card-bg flex flex-col min-w-[330px]">
            <div className="flex ">
                <div className="text-txt-gray">1st T20I</div>
                <div className="rounded-xl ml-2 mb-2 border-2 border-solid border-blue-1 text-blue-1 w-25 h-6 text-center flex p-2 justify-between items-center">
                    UPCOMING
                </div>
            </div>
            <div className="text-txt-gray">Delhi</div>
            <div className="flex my-2 py-3 justify-evenly bg-card-bg2 rounded">
                <div>IND</div>
                <div className="border-2 text-green-500 px-2 rounded-3xl border-solid border-green-500">
                    T20
                </div>
                <div>SA</div>
            </div>
            <div className="my-2 py-1 bg-card-bg2 rounded text-center">June 30, 2022</div>
        </div>
    )
}

export default MatchDetails;