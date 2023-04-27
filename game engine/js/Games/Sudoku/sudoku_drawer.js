class sudoku_drawer extends drawer {
  grid=[];

  constructor() {
    super();
    super.draw_board(9, 9);
    this.controller= new sudoku_controller();
    for (let i = 1; i <= 9; i++) {
      (this.grid)[i] = [];
      for (let j = 1; j <= 9; j++) {
        (this.grid)[i][j] = 0;
      }
    }
    this.grid=this.generateSudoku();
  }

  draw(n,m) {
    for (let i = 1; i <=n ; i++) {
      for (let j = 1; j <=m ; j++) {
        const td = document.getElementById('r'+ i + 'c' +j)
        if ((this.grid)[i][j] !== 0) {
          td.textContent = (this.grid)[i][j];
          td.classList.add('tile-start');
        }
        if(i===3 || i===6){
          td.classList.add('horizontal-line');

        }
        if(j===3 || j===6){
          td.classList.add('vertical-line');
        }
        td.classList.add('tile');
        td.style.width = td.style.height = '1.3em'
        td.style.fontSize = '3em'
      }
      const tr = document.getElementById('r'+ i)
      tr.style.display = 'flex'
      }
    }
  generateSudoku() {
    // Fill the grid with random numbers
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        if (Math.random() < 0.5) {
          // Fill the cell with a random number between 1 and 9
          let randomNumber = Math.floor(Math.random() * 9) + 1;
          if (this.isValidMove(this.grid, i, j, randomNumber)) {
            (this.grid)[i][j] = randomNumber;
          }
        }
      }
    }

    return this.grid;
  }

  isValidMove(grid,row, col, value) {
    // Check row
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

}
