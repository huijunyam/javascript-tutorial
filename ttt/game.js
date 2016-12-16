const Board = require('./board.js');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor (board){
    this.board = board;
    this.player1 = "X";
    this.player2 = "O";
    this.currentPlayer = "X";
  }

  play() {
    if (this.board.isWon() || this.board.isCatsGame()) {
      console.log("game over");
      reader.close();
      // completionCallback();
    } else {
      this.board.print();
      this.promptMove();
    }
  }

  promptMove () {
    const that = this;
    reader.question(`${this.currentPlayer} give me a move(e.g; 1,1): `, function(pos) {
      const parsed = that.parseMove(pos);
      if (that.board.placeMark(parsed, that.currentPlayer)) {
        that.currentPlayer = that.currentPlayer === "X" ? "O" : "X";
      }
      that.play();
    });
  }

  parseMove (pos) {
    return pos.split(",").map(coord => parseInt(coord));
  }
}

const board = new Board();
const game = new Game(board);
game.play();

module.exports = Game;
