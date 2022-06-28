import React, { useState } from "react";
import TabComponent from "./TabComponent";
import FilterComponent from "./FilterComponent";
import MatchInfo from './MatchInfo';
import MatchDetails from "./MatchDetails";
import { title, status, types } from "../constants";

const Home = () => {
    const [selectedTab, setSelectedTab] = useState("upcoming");
    const [selectedType, setSelectedType] = useState("ALL");

    const onTabChange = (value) => {
        console.log(value);
        setSelectedTab(value);
    }

    const onFilter = (type) => {
        console.log(type);
        setSelectedType(type)
    }

    return (
        <div>
            <div className="bg-black-1  flex flex-col h-full min-h-screen">
                <div className="font-bold p-4" >{title}</div>
                <TabComponent list={status} value={selectedTab}status={onTabChange}></TabComponent>
                <FilterComponent list={types} value={selectedType} onChange={onFilter} ></FilterComponent>
                <MatchInfo />
                <MatchDetails />
            </div>
        </div>
    )
}

export default Home;
