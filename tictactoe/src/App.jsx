import React from "react";
import { useState } from "react";
import "./App.css";
import Grid from "./Grid.jsx";
import { testFinished, testWin } from "./utils";

function App() {
    const [grid, setGrid] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);
    const [random, setRandom] = useState(Math.random());

    function reset() {
        setGrid([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
        setRandom(Math.random());
    }
    return (
        <React.Fragment>
            <Grid grid={grid} random={random} setGrid={setGrid} />
            {testFinished(grid) ? (
                <div id="result">
                    {testWin(grid) == -1 ? <h2 className="tic">Tic toes!</h2> : null}
                    {testWin(grid) == 1 ? <h2 className="tac">Tac toes!</h2> : null}
                    {testWin(grid) == 0 ? <h2 className="toe">No toes!</h2> : null}
                    <button onClick={reset}>Play Again</button>
                </div>
            ) : null}
        </React.Fragment>
    );
}

export default App;
