const Game = require("./game.js");
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback () {
  reader.question(" Do you want to play again? ", function (ans) {
    if (ans === 'yes'){
      let newGame = new Game();
      newGame.play(reader, completionCallback);
    } else {
      console.log("Goodbye");
      reader.close();
    }
  });
}

let game = new Game();
game.play(reader, completionCallback);
