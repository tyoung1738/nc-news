import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'


export default function TopicDropdown({topicSelection, setTopicSelection}){
    const navigate = useNavigate()

    function handleTopicSelection(e){
        setTopicSelection(e.target.value)
        if(e.target.value !== 'Select a topic'){
            navigate(`/articles/topics/${e.target.value}`)
        }
    }
    
    return (
        <select onChange={handleTopicSelection} className="dropdown">
            <option >Select a topic</option>
            <option value="football">Football</option>
            <option value="coding">Coding</option>
            <option value="cooking">Cooking</option>
        </select>)
}