import React from 'react'
import {useState} from "react"
import { useHistory } from "react-router-dom";
import "./Join.css"

function Join() {
    const [room, setRoom] = useState("")
    const [nickname, setNickname] = useState("")
    let history = useHistory();
    const handleSubmit = () => {
        history.push(`/playground?username=${nickname}&room=${room}`);

    }
    return (
        <div>
            <input onChange={(e) => setNickname(e.target.value)} placeholder="Enter Nickname" />
            <input onChange={(e) => setRoom(e.target.value)} placeholder="Enter Room" />
            <button onClick={handleSubmit}>Submit</button>
            
        </div>
    )
}

export default Join
