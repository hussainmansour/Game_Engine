class sudoku extends gameEngine{
  sudokuDrawer
  sudokuController
  grid=[];
  constructor() {
    super();
    this.sudokuDrawer = new sudoku_drawer(this.sudokuController)
    this.sudokuController = new sudoku_controller(this.sudokuDrawer)
    for (let i = 1; i <= 9; i++) {
      (this.grid)[i] = [];
      for (let j = 1; j <= 9; j++) {
        (this.grid)[i][j] = 0;
      }
    }
    this.grid=this.generateSudoku();
  }

  init(){
    this.sudokuDrawer.draw(this.grid,9, 9)
  }


  generateSudoku() {
    // Fill the grid with random numbers
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        if (Math.random() < 0.5) {
          // Fill the cell with a random number between 1 and 9
          let randomNumber = Math.floor(Math.random() * 9) + 1;
          if (this.sudokuController.validate_input(this.grid, i, j, randomNumber)) {
            (this.grid)[i][j] = randomNumber;
          }
        }
      }
    }

    return this.grid;
  }


}
