import React from 'react'
import "./Playground.css"
import Board from "./../Board/Board"

function Playground() {
    return (
        <div className="container">
            <div className="color-picker-container">
                <input type="color" />
            </div>

            <div className="board-container">
                <Board></Board>
            </div>
        </div>
    )
}

export default Playground
