import React from "react";
import "./filter.css";
import Filteritem from "./filteritem";

const Filters = ({filterlist}) => {
    return(
        <div className="filters">
            {filterlist && 
            filterlist.map(
                (filter)=>{
                    return <Filteritem filter={filter} key={filter.id}/>
            })}
        </div>
    );
}

export default Filters ;