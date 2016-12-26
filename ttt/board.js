class Board {
  constructor () {
    this.grid = Board.makeGrid();
  }

  isEmpty (pos) {
    if (this.grid[pos[0]][pos[1]] === null) {
      return true;
    } else return false;
  }

  placeMark (pos, mark) {
    if (this.isEmpty(pos)) {
      this.grid[pos[0]][pos[1]] = mark;
      return true;
    } return false;
  }

  isWon () {
    return (this.checkHorizontal(this.grid) !== ""
      || this.checkVertical() !== ""
      || this.checkDiagonal() !== "");
  }

  winner () {
    return this.isWon();
  }

  checkHorizontal (grid) {
    for(let i = 0; i < grid.length; i++) {
      const mark = grid[i][0];
      if (
        grid[i].every(pos => pos === mark && mark !== null)
      ){
        return mark;
      }
    }
    return "";
  }

  checkVertical () {
    const vertGrid = this.grid[0].map(function(col, i) {
      return this.grid.map(function(row) {
        return row[i];
      });
    }.bind(this));
    return this.checkHorizontal(vertGrid);
  }

  checkDiagonal () {
    const diag1 = Board._diag1();
    const diag2 = Board._diag2();
    const mark1 = this.grid[0][0];
    const mark2 = this.grid[0][2];
    if (diag1.every(pos => this.grid[pos[0]][pos[1]] === mark1 && mark1 !== null)) {
      return mark1;
    } else if (diag2.every(pos => this.grid[pos[0]][pos[1]] === mark2 && mark2 !== null)) {
      return mark2;
    } else return "";
  }

  isCatsGame () {
    const flattenGrid = this.grid.reduce( function (a, b) {
      return a.concat(b);
    }, []);
    return flattenGrid.join("").length === 9;
  }

  print () {
    console.log(JSON.stringify(this.grid[0]));
    console.log(JSON.stringify(this.grid[1]));
    console.log(JSON.stringify(this.grid[2]));
  }
  
  static _diag1 () {
    return [[0,0], [1,1], [2,2]];
  }

  static _diag2 () {
    return [[0,2], [1,1], [2, 0]];
  }

  static makeGrid() {
    const grid = [];

    for (let i = 0; i < 3; i++) {
      grid.push([]);
      for (let j = 0; j < 3; j++) {
        grid[i].push(null);
      }
    }

    return grid;
  }
}

module.exports = Board;
