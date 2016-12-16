const Game = require("./game.js");
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback () {
  reader.question(" Do you want to play again? ", function (ans) {
    if (ans === 'yes'){
      const newGame = new Game([[3,2,1], [], []]);
      newGame.run(completionCallback, reader);
    } else {
      console.log("Goodbye");
      reader.close();
    }
  });
}

const game = new Game([[3,2,1], [], []]);
game.run(completionCallback, reader);
