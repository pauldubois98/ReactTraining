import "./Form.css";

function Form(props) {
    const N = props.N;
    const setN = props.setN;
    const M = props.M;
    const setM = props.setM;
    const X = props.X;
    const setX = props.setX;
    const setBoard = props.setBoard;
    function handleN(e) {
        const nb = Number(e.target.value);
        if (nb >= 1 && nb <= 20) {
            setN(nb);
            setBoard(new Array(nb * M).fill(0));
        }
    }
    function handleM(e) {
        const nb = Number(e.target.value);
        if (nb >= 1 && nb <= 20) {
            setM(nb);
            setBoard(new Array(N * nb).fill(0));
        }
    }
    function handleX(e) {
        const nb = Number(e.target.value);
        if (nb >= 1 && nb <= Math.max(N, M)) {
            setX(nb);
            // setBoard(new Array(N * M).fill(0));
        }
    }
    return (
        <form>
            <input
                type="number"
                placeholder="Columns"
                value={N}
                onChange={handleN}></input>
            <input
                type="number"
                placeholder="Rows"
                value={M}
                onChange={handleM}></input>
            <input
                type="number"
                placeholder="Rows"
                value={X}
                onChange={handleX}></input>
        </form>
    );
}

export default Form;
