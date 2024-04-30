import React from "react";
import timelinedata from "../data/timelinedata";
import TimelineItem from "./TimelineItem";
import Titles from "./Titles";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Titles>Timeline</Titles>
                {timelinedata.map(item => (
                    <TimelineItem
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details_first={item.details_first}
                        details_second={item.details_second}
                    />
                ))}
            </div>
        </div>   
    )
}

export default Timeline;