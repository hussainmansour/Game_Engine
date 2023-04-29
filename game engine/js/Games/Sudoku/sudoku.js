class sudoku extends gameEngine{
  sudokuDrawer
  sudokuController
  state
  constructor() {
    super();
    this.state = {}
    this.sudokuController = new sudoku_controller(this.sudokuDrawer, this.state)
    this.sudokuDrawer = new sudoku_drawer(this.sudokuController, this.state)
    console.log(typeof this.state);
    for (let i = 1; i <= 9; i++) {
      (this.state)[i] = [];
      for (let j = 1; j <= 9; j++) {
        (this.state)[i][j] = 0;
      }
    }
    this.state = this.generateSudoku();
    console.log(this.state);
  }

  init(){
    this.sudokuDrawer.draw(this.state, 9, 9)
  }

  generateSudoku() {
    // Fill the state with random numbers
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        if (Math.random() < 0.5) {
          // Fill the cell with a random number between 1 and 9
          let randomNumber = Math.floor(Math.random() * 9) + 1;
          if (this.sudokuController.validate_input(this.state, i, j, randomNumber)) {
            (this.state)[i][j] = randomNumber;
          }
        }
      }
    }
    return this.state;
  }


}
