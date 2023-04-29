class sudoku_controller extends controller {
  constructor(drawer, state) {
    super(drawer, state);
  }

  validate_input(grid, row, col, value) {
    super.validate_input();
    for (let j = 1; j <= 9; j++) {
      if (grid[row][j] === value) {
        return false;
      }
    }

    // Check column
    for (let i = 1; i <= 9; i++) {
      if (grid[i][col] === value) {
        return false;
      }
    }

    // Check box
    let boxRow = Math.floor((row - 1) / 3) * 3 + 1;
    let boxCol = Math.floor((col - 1) / 3) * 3 + 1;
    for (let i = boxRow; i <= boxRow + 2; i++) {
      for (let j = boxCol; j <= boxCol + 2; j++) {
        if (grid[i][j] === value) {
          return false;
        }
      }
    }

    return true;
  }

  take_turns() {
    super.take_turns();
    this.drawer.draw(this.state, 9, 9);
  }

  control() {
    super.control();
    const last = (this.moves)[this.moves.length - 1]
    console.log(last)
  }
}
