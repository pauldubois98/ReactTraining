import React from "react";
import "./Winner.css";

import { empty } from "./utils.js";

function Winner(props) {
    const winner = props.winner;
    const board = props.board;
    const restart = props.restart;
    return (
        <React.Fragment>
            {winner != 0 || empty(board) ? (
                <div className="result">
                    {winner != 0 ? <h2>Player {winner} won!</h2> : null}
                    {empty(board) ? <h2>No winner</h2> : null}
                    <button onClick={restart}>New Game</button>
                </div>
            ) : null}
        </React.Fragment>
    );
}

export default Winner;
