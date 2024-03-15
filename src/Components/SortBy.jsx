import { TbSortDescending2, TbSortAscending2 } from "react-icons/tb";
import { TbStairsDown } from "react-icons/tb";
import { TbStairsUp } from "react-icons/tb";

import { useState } from "react";

export default function SortBy({searchParams, setSearchParams}){
    

    const setSortOrder = (direction) =>{
        const newParams = new URLSearchParams(searchParams)
        newParams.set('order', direction)
        setSearchParams(newParams)
    }

    const handleSelectNew = (e)=>{
        const sortByDictionary = {
            Date: "created_at",
            Comments: "comment_count",
            Votes: "votes"
        }

        const newParams = new URLSearchParams(searchParams)
        newParams.set('sort_by', sortByDictionary[e.target.value])
        setSearchParams(newParams)
        //BE unable to sort by comment_count currently!
    }

    return (
    <div className='sortby'>
    <select className="dropdown" onChange={handleSelectNew}>
        <option>Sort by</option>
        <option>Date</option>
        <option>Comments</option>
        <option>Votes</option>
    </select>
    <button onClick={()=>setSortOrder('desc')}><TbStairsDown id="desc-icon" /></button>
    <button onClick={()=>setSortOrder('asc')}><TbStairsUp id="asc-icon"/></button>
    </div>)
}