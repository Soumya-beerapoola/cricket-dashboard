import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import TabComponent from "./TabComponent";
import FilterComponent from "./FilterComponent";
import MatchInfo from './MatchInfo';
import MatchDetails from "./MatchDetails";
import { title, status, types } from "../constants";
import ScheduleQuery from '../queries'

const Home = () => {
    const [selectedTab, setSelectedTab] = useState("upcoming");
    const [selectedType, setSelectedType] = useState("ALL");

    const { loading, error, data } = useQuery(ScheduleQuery, {
        variables: {
            status: selectedTab,
            type: selectedType.toLocaleLowerCase()
        }
    });


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const onTabChange = (value) => {
        console.log(value);
        setSelectedTab(value);
    }

    const onFilter = (type) => {
        console.log(type);
        setSelectedType(type)
    }

    const getMatches = (schedule) => {
        return schedule.matches.map((match) => 
        <MatchDetails />
            //  <Schedule matchType={schedule.matchType} matchStatus={selectedTab} homeTeam={match.homeTeamName} awayTeam={match.awayTeamName} matchDate={match.matchdate} venue={match.venue} matchNumber={match.matchNumber}></Schedule>
         )
     }

    return (
        <div>
            <div className="bg-black-1  flex flex-col h-full min-h-screen">
                <div className="font-bold p-4" >{title}</div>
                <TabComponent list={status} value={selectedTab}status={onTabChange}></TabComponent>
                <FilterComponent list={types} value={selectedType} onChange={onFilter} ></FilterComponent>
                {data.newSchedule.map((match, i) => {
                    return (
                        <div key={i} className="mt-2">
                            <MatchInfo />
                            {/* <MatchInfo seriesName={match.seriesName} leauge={match.league}></MatchInfo> */}
                            <div className="flex overflow-auto max-w-full">
                            {getMatches(match)} 
                            </div>                  
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
