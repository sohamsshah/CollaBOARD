import React from 'react'
import "./Playground.css"
import Board from "./../Board/Board"
import io from 'socket.io-client';
import {useLocation} from "react-router-dom"

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function Playground() {
    const socket = io.connect('http://localhost:5000', {transports: ['websocket']});
    let query = useQuery();
    console.log(query.get("username"), query.get("room"))
    return (
        <div className="container">
            <div className="color-picker-container">
                <input type="color" />
            </div>

            <div className="board-container">
                <Board socket={socket}></Board>
            </div>
        </div>
    )
}

export default Playground
