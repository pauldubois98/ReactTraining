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
