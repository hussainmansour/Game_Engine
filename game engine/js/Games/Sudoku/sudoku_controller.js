class sudoku_controller extends controller {
  constructor(drawer, state) {
    super(drawer, state);
  }

  validate_input(row, col, value,first=true) {
    super.validate_input();
    if(value > 9 || value < 1 || isNaN(value)) return false;

    // Check row
    let invalid = true;
    for (let j = 1; j <= 9; j++) {
      if (this.state[row][j] === value) {
        if (!first) {
          const cell = document.getElementById('r' + row + 'c' + j);
          cell.classList.add('invalid_cell');
          setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
        }
        invalid = false;
      }
    }

    // Check column
    for (let i = 1; i <= 9; i++) {
      if (this.state[i][col] === value) {
        if (!first) {
          const cell = document.getElementById('r' + i + 'c' + col);
          cell.classList.add('invalid_cell');
          setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
        }
        invalid = false;
      }
    }

    // Check box
    let boxRow = Math.floor((row - 1) / 3) * 3 + 1;
    let boxCol = Math.floor((col - 1) / 3) * 3 + 1;
    for (let i = boxRow; i <= boxRow + 2; i++) {
      for (let j = boxCol; j <= boxCol + 2; j++) {
        if (this.state[i][j] === value) {
          if (!first) {
            const cell = document.getElementById('r' + i + 'c' + j);
            cell.classList.add('invalid_cell');
            setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
          }
          invalid = false;
        }
      }
    }

    return invalid;
  }

  take_turns(n) {
    super.take_turns(n);
    this.drawer.draw(9, 9);
  }

  control() {
    super.control();
    const last = (this.moves)[this.moves.length - 1]
    const x= parseInt(prompt("Enter the value"));

    if (this.validate_input(last.i, last.j, x,false)) {
      console.log('valid');
      (this.state)[last.i][last.j] = x;
      this.take_turns(1)
    } else {
        console.log('invalid');
        this.moves.splice(this.moves.length - 1, 1);
      }
  }
}
