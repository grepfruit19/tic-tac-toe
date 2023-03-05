class Board {

    /*
        1. What's the initial state? --  DONE
        2. Check row/column/diagonal win condition
        3. How to represent X vs O -- DONE
        4. Who's turn is it? -- DONE
        5. How to reset to initial state? -- TODO
        6. How to add an X or O to the board? Where is it gonna be etc -- DONE
    */
    constructor() {
        this.board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        this.turn = 1;
        this.gameOver = false;
    }

    // // X = !, O = 2
    // addXToBoard(x, y) {
    //     if (this.gameOver) {
    //         throw new Error('The game is over!');
    //     }
    //     this.board[x][y] = 1;
    //     this.checkRow();
    //     this.checkColumn();
    //     this.checkDiagonal();
    //     this.turn = 2;
    // }

    // addOToBoard(x, y) {
    //     if (this.gameOver) {
    //         throw new Error('The game is over!');
    //     }
    //     this.board[x][y] = 2;
    //     this.checkRow();
    //     this.checkColumn();
    //     this.checkDiagonal();
    //     this.turn = 1;
    // }

    addGamePieceToBoard(x, y) {
        if (this.gameOver) {
            throw new Error('The game is over!');
        }

        // Here, this.turn will be 1 or 2
        this.board[x][y] = this.turn;
        if (this.turn === 1) this.turn = 2;
        else { this.turn = 1 }

        this.checkRow();
        this.checkColumn();
        this.checkDiagonal();
    }

    reset() {

    }

    checkRow() {
        for (let i = 0; i < this.board.length; i++) {
            let currentRow = this.board[i];
            if (currentRow[0] === currentRow[1]) {
                if (currentRow[1] === currentRow[2]) {
                    this.gameOver = true;
                }
            }
        }
    }

    checkColumn() {

    }

    checkDiagonal() {

    }
}
