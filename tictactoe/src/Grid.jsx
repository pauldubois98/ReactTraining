import "./Grid.css";
import React from "react";
import circle from "./assets/circle.svg";
import circle1 from "./assets/circle1.svg";
import circle2 from "./assets/circle2.svg";
import circle3 from "./assets/circle3.svg";
import circle4 from "./assets/circle4.svg";

import cross from "./assets/cross.svg";
import cross1 from "./assets/cross1.svg";
import cross2 from "./assets/cross2.svg";
import cross3 from "./assets/cross3.svg";
import cross4 from "./assets/cross4.svg";
import cross5 from "./assets/cross5.svg";

import { testWin } from "./utils";

function CircleRandom(props) {
    const r = props.random;
    var circle_image = [circle, circle1, circle2, circle3, circle4][
        Math.floor(r * 5)
    ];
    const style = { transform: "rotate(" + r * 360 + "deg)" };
    return <img src={circle_image} alt="circle" style={style} />;
}
function CrossRandom(props) {
    var r = props.random;
    var cross_image = [cross, cross1, cross2, cross3, cross4, cross5][
        Math.floor(r * 6)
    ];
    var transfo = "";
    if (r < 0.25) {
        transfo += "scaleX(-1)";
    } else if (r < 0.5) {
        transfo += "scaleY(-1)";
    } else if (r < 0.75) {
        transfo += "scaleX(-1) " + "scaleY(-1)";
    }
    r += 0.125;
    r %= 1;
    if (r < 0.25) {
        transfo += "rotate(90deg)";
    } else if (r < 0.5) {
        transfo += "rotate(180deg)";
    } else if (r < 0.75) {
        transfo += "rotate(270deg)";
    }
    const style = { transform: transfo };
    return <img src={cross_image} alt="cross" style={style} />;
}

function Box(props) {
    const v = props.value;
    const rowIndex = props.rowIndex;
    const columnIndex = props.columnIndex;
    const random = (props.random/2) + (3 * columnIndex + rowIndex) / 18;
    const grid = props.grid;
    const setGrid = props.setGrid;

    function handleClick() {
        if ((v == 0) & (testWin(grid) == 0)) {
            const s =
                (grid[0][0] == 0) +
                (grid[0][1] == 0) +
                (grid[0][2] == 0) +
                (grid[1][0] == 0) +
                (grid[1][1] == 0) +
                (grid[1][2] == 0) +
                (grid[2][0] == 0) +
                (grid[2][1] == 0) +
                (grid[2][2] == 0);
            var new_grid = [...grid];
            if (s % 2 == 0) {
                new_grid[rowIndex][columnIndex] = 1;
            } else {
                new_grid[rowIndex][columnIndex] = -1;
            }
            setGrid(new_grid);
        }
    }
    return (
        <div className="box" onClick={handleClick}>
            {v == 1 ? <CircleRandom random={random} /> : null}
            {v == -1 ? <CrossRandom random={random} /> : null}
        </div>
    );
}

function Row(props) {
    const random = props.random;
    const row = props.row;
    const grid = props.grid;
    const setGrid = props.setGrid;
    const rowIndex = props.rowIndex;
    const v0 = row[0];
    const v1 = row[1];
    const v2 = row[2];
    return (
        // just because I'm too lazy to add a key property...
        <div className="row">
            <Box
                value={v0}
                grid={grid}
                setGrid={setGrid}
                rowIndex={rowIndex}
                columnIndex={0}
                random={random}
            />
            <Box
                value={v1}
                grid={grid}
                setGrid={setGrid}
                rowIndex={rowIndex}
                columnIndex={1}
                random={random}
            />
            <Box
                value={v2}
                grid={grid}
                setGrid={setGrid}
                rowIndex={rowIndex}
                columnIndex={2}
                random={random}
            />
        </div>
    );
}

function Grid(props) {
    const random = props.random;
    const grid = props.grid;
    const setGrid = props.setGrid;
    const r0 = grid[0];
    const r1 = grid[1];
    const r2 = grid[2];
    return (
        // just because I'm too lazy to add a key property... (again)
        <div>
            <Row
                row={r0}
                random={random}
                grid={grid}
                setGrid={setGrid}
                rowIndex={0}
            />
            <Row
                row={r1}
                grid={grid}
                setGrid={setGrid}
                rowIndex={1}
                random={random}
            />
            <Row
                row={r2}
                grid={grid}
                setGrid={setGrid}
                rowIndex={2}
                random={random}
            />
        </div>
    );
}

export default Grid;
