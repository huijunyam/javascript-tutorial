const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor (stacks) {
    this.stacks = stacks;
  }

  run (completionCallback) {
    this.promptMove(completionCallback);
  }

  promptMove (completionCallback) {
    const that = this;

    reader.question("Move disc from: ", function (ans) {
      reader.question("Move disc to: ", function (ans2) {
        const start = parseInt(ans);
        const end = parseInt(ans2);

        if (!that.move(start, end)) {
          console.log("Invalid move...");
        }
        that.print();

        if (!that.isWon()) {
          that.run(completionCallback);
        } else {
          console.log("You won!");
          reader.close();
          completionCallback();
        }
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx){
    if (this.stacks[endTowerIdx].length === 0) {
      return true;
    } else if (this.stacks[startTowerIdx][this.stacks[startTowerIdx].length - 1]
      < this.stacks[endTowerIdx][this.stacks[endTowerIdx].length - 1]) {
      return true;
    } else {
      return false;
    }
  }

  move(startTowerIdx, endTowerIdx){
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      return true;
    }
    return false;
  }

  print () {
    console.log(JSON.stringify(this.stacks));
  }

  isWon () {
    return this.stacks[1].length === 3 || this.stacks[2].length === 3;
  }

}
module.exports = Game; 
