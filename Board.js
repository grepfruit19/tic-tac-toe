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

  addGamePieceToBoard(x, y) {
    if (this.gameOver) {
      throw new Error("The game is over!");
    }

    // Here, this.turn will be 1 or 2
    this.board[x][y] = this.turn;
    if (this.turn === 1) this.turn = 2;
    else {
      this.turn = 1;
    }

    this.checkRow();
    this.checkColumn();
    this.checkDiagonal();
  }

  reset() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.turn = 1;
    this.gameOver = false;
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
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] === 0) return;
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        this.gameOver = true;
      }
    }
  }

  checkDiagonal() {
    if (this.board[1][1] === 0) return;
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[2][2] === this.board[1][1]
    ) {
      this.gameOver = true;
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[2][0] === this.board[1][1]
    ) {
      this.gameOver = true;
    }
  }
}
