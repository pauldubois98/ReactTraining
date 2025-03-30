export function turn(board) {
    var c = 0;
    for (var i = 0; i < board.length; i++) {
        if (board[i]) {
            c++;
        }
    }
    if (c % 2) {
        return -1;
    } else {
        return 1;
    }
}

export function empty(board) {
    var c = 0;
    for (var i = 0; i < board.length; i++) {
        if (board[i] == 0) {
            c++;
        }
    }
    return c == 0;
}

export function winnerMove(val, board, i, N, M, X) {
    const DIRECTONS = [1, N, N + 1, N - 1];
    console.log(val, i, board, M, N, X);
    for (let d of DIRECTONS) {
        var c = 1;
        var j = i + d;
        while (j < board.length && board[j] == val) {
            j += d;
            c++;
        }
        var j = i - d;
        while (j < board.length && board[j] == val) {
            j -= d;
            c++;
        }
        // console.log(d, c, X);
        if (c >= X) {
            console.log("True");
            return true;
        }
    }
    return false;
}
