const Game = require("./game.js");
const Board = require("./board.js");
const readline = require('readline');


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback () {
  reader.question(" Do you want to play again? ", function (ans) {
    if (ans === 'yes'){
      const newboard = new Board();
      const newGame = new Game(board);
      newGame.play(completionCallback, reader);
    } else {
      console.log("Goodbye");
      reader.close();
    }
  });
}

const board = new Board();
const game = new Game(board);
game.play(completionCallback, reader);
