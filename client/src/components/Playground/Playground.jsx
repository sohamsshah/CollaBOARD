import React from 'react'
import "./Playground.css"
import Board from "./../Board/Board"
import io from 'socket.io-client';

function Playground() {
    const socket = io.connect('http://localhost:5000', {transports: ['websocket']});
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
