import React from "react";
import { useState } from "react";
import "./App.css";
import Grid from "./Grid";
import Form from "./Form";
import Winner from "./Winner";

function App() {
    const [N, setN] = useState(7);
    const [M, setM] = useState(6);
    const [X, setX] = useState(4);
    const [board, setBoard] = useState(new Array(N * M).fill(0));
    const [winner, setWinner] = useState(0);
    // player 1 type
    // player 2 type
    // max thinking time
    function restart(e) {
        setBoard(new Array(N * M).fill(0));
        setWinner(0);
    }
    return (
        <React.Fragment>
            <Form
                N={N}
                setN={setN}
                M={M}
                setM={setM}
                X={X}
                setX={setX}
                board={board}
                setBoard={setBoard}
            />
            <Grid
                N={N}
                M={M}
                X={X}
                board={board}
                setBoard={setBoard}
                winner={winner}
                setWinner={setWinner}
            />
            <Winner winner={winner} board={board} restart={restart} />
        </React.Fragment>
    );
}

export default App;
