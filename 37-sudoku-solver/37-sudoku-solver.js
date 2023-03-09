/**
* @param {character[][]} board
* @return {void} Do not return anything, modify board in-place instead.
*/
var solveSudoku = function(board) {

    let emptySpace = [];

    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (board[y][x] === ".") {
                emptySpace.push({y: y, x: x});
            }
        }
    }

    function recursiva(emptySpaceIndex) {
        if (emptySpaceIndex >= emptySpace.length) {
            return true;
        }

        const {x, y} = emptySpace[emptySpaceIndex];
        for (let num = 1; num <= 9; num++) {
            if (probarNum(num, y, x, board)) {
                board[y][x] = num.toString();
                if (recursiva(emptySpaceIndex + 1)) {
                    return true;
                }
                board[y][x] = ".";
            }
        }

        return false;
    }

    function probarNum(num, y, x, board) {
        for (let i = 0; i < 9; i++) {
            if (board[i][x] == num.toString() || board[y][i] == num.toString() || board[3 * Math.floor(y/3) + Math.floor(i/3)][3 * Math.floor(x/3) + i % 3] == num.toString()) {
                return false;
            }
        }
        return true;
    }

    recursiva(0);
    return board;
};