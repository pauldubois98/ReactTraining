import React from "react";
import "./Grid.css";
import { turn, winnerMove } from "./utils.js";
const SIDE = 5;

function Row(props) {
    const N = props.N;
    const M = props.M;
    const r = props.r;
    const i = props.i;
    const board = props.board;
    const row = board.slice(i * N, (i + 1) * N);

    return (
        <g>
            {Array.from(row).map((cell, j) => (
                <g key={`${i}-${j}`}>
                    <circle
                        cx={50 + (j - (N - 1) / 2) * (2 * r)}
                        cy={-SIDE / 2 + 100 - (i + 0.5) * (2 * r)}
                        r={r * 0.95}
                        fill="#1a1a1a"
                    />
                    {cell != 0 ? (
                        <circle
                            cx={50 + (j - (N - 1) / 2) * (2 * r)}
                            cy={-SIDE / 2 + 100 - (i + 0.5) * (2 * r)}
                            r={r * 0.85}
                            fill={cell == 1 ? "#c83737" : "#d4aa00"}
                        />
                    ) : null}
                </g>
            ))}
        </g>
    );
}

function Grid(props) {
    const N = props.N;
    const M = props.M;
    const X = props.X;
    const r = ((1 - SIDE / 100) * 50) / Math.max(N, M);
    const board = props.board;
    const setBoard = props.setBoard;
    const winner = props.winner;
    const setWinner = props.setWinner;
    function handleClick(e) {
        if (winner != 0) {
            return;
        }
        // get column index from mouse click
        var rect = document.getElementById("grid").getBoundingClientRect();
        var x = (100 * (e.clientX - rect.left)) / rect.width;
        var i = Math.round((x - 50) / (2 * r) + (N - 1) / 2);
        // check if column is full
        while (i < board.length && board[i] != 0) {
            i += N;
        }
        if (i >= board.length) {
            return;
        }
        const player = turn(board);
        // check for winner
        if (winnerMove(player, board, i, N, M, X)) {
            setWinner(player);
        }
        // update board
        var new_board = [...board];
        new_board[i] = player;
        setBoard(new_board);
    }
    return (
        <React.Fragment>
            <div id="grid" onClick={handleClick}>
                <svg
                    id="gridSVG"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        width: "40em",
                        height: "40em",
                        backgroundColor: "#4d4d4d",
                    }}>
                    {Array.from(Array(M).keys()).map(function (i) {
                        return (
                            <Row
                                N={N}
                                M={M}
                                r={r}
                                board={board}
                                setBoard={setBoard}
                                i={i}
                                key={"row" + i}
                            />
                        );
                    })}
                </svg>
            </div>
        </React.Fragment>
    );
}

export default Grid;
