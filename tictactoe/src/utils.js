export function testFinished(grid) {
    if (testWin(grid) != 0) {
        return true;
    } else {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] == 0) {
                    return false;
                }
            }
        }
        return true;
    }
}
export function testWin(grid) {
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] + grid[i][1] + grid[i][2] == 3) {
            return 1;
        }
        if (grid[i][0] + grid[i][1] + grid[i][2] == -3) {
            return -1;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (grid[0][j] + grid[1][j] + grid[2][j] == 3) {
            return 1;
        }
        if (grid[0][j] + grid[1][j] + grid[2][j] == -3) {
            return -1;
        }
    }
    if (grid[0][0] + grid[1][1] + grid[2][2] == 3) {
        return 1;
    }
    if (grid[0][0] + grid[1][1] + grid[2][2] == -3) {
        return -1;
    }
    if (grid[0][2] + grid[1][1] + grid[2][0] == 3) {
        return 1;
    }
    if (grid[0][2] + grid[1][1] + grid[2][0] == -3) {
        return -1;
    }
    return 0;
}
