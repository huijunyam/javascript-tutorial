const Board = require('./board.js');

class Game {
  constructor (){
    this.board = new Board();
    this.player1 = "X";
    this.player2 = "O";
    this.currentPlayer = "X";
  }

  play(reader, completionCallback) {
    this.board.print();
    this.promptMove(reader, completionCallback);
  }

  promptMove (reader,completionCallback) {
    const that = this;
    console.log(`${this.currentPlayer} turn`);
    reader.question("give me a move(e.g; 1,1): ", function(pos){
      const parsed = that.parseMove(pos);
      if (that.board.placeMark(parsed, that.currentPlayer)){
        that.currentPlayer === "X" ? that.currentPlayer = "O" : that.currentPlayer = "X";
      } else {
        console.log("invalid position");
      }
      if (that.board.isWon()){
        let winner = that.currentPlayer;
        winner === "X" ? winner = "O" : winner = "X";
        console.log(`${winner}, you won`);
        completionCallback();
      } else if (that.board.isCatsGame()){
        console.log("It is tied");
        completionCallback();
      } else {
        that.play(reader, completionCallback);
      }
    });
  }

  parseMove (pos) {
    return pos.split(",").map(coord => parseInt(coord));
  }
}

module.exports = Game;
