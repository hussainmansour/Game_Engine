class sudoku_controller extends controller {
  constructor(drawer, state) {
    super(drawer, state);
    console.log('sudoku_controller');
    console.log(this.state);
  }

  validate_input(grid, row, col, value,first=true) {
    super.validate_input();
    // Check row
    let invalid=true;
    for (let j = 1; j <= 9; j++) {
      if (grid[row][j] === value) {
        if (!first) {
          const cell = document.getElementById('r' + row + 'c' + j);
          cell.classList.add('invalid_cell');
          setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
        }
        invalid=false;
      }
    }

    // Check column
    for (let i = 1; i <= 9; i++) {
      if (grid[i][col] === value) {
        if (!first) {
          const cell = document.getElementById('r' + i + 'c' + col);
          cell.classList.add('invalid_cell');
          setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
        }
        invalid=false;
      }
    }

    // Check box
    let boxRow = Math.floor((row - 1) / 3) * 3 + 1;
    let boxCol = Math.floor((col - 1) / 3) * 3 + 1;
    for (let i = boxRow; i <= boxRow + 2; i++) {
      for (let j = boxCol; j <= boxCol + 2; j++) {
        if (grid[i][j] === value) {
          if (!first) {
            const cell = document.getElementById('r' + i + 'c' + j);
            cell.classList.add('invalid_cell');
            setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
          }
          invalid=false;
        }
      }
    }

    return invalid;
  }

  take_turns() {
    super.take_turns();
    this.drawer.draw(this.state, 9, 9);
  }

  control() {
    super.control();
    const last = (this.moves)[this.moves.length - 1]
    const cell = document.getElementById('r' + last.i + 'c' + last.j);
    const x=parseInt(prompt("Enter the value"));
    if(x>9 || x<1||isNaN(x)){
        return;
    }
    if (this.validate_input(this.state, last.i, last.j, x,false)) {
      console.log('valid');
      (this.state)[last.i][last.j] = x;
      cell.textContent = x.toString();
      cell.classList.add('tile-start');
      } else {
        console.log('invalid');
        this.moves.splice(this.moves.length - 1, 1);
      }
    console.log(last);
    console.log(this.state);
  }
}
