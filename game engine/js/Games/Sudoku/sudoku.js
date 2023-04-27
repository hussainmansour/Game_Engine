class sudoku extends gameEngine{
  sudokuDrawer
  sudokuController
  constructor() {
    super();
    this.sudokuDrawer = new sudoku_drawer()
    this.sudokuController = new sudoku_controller()
  }

  init(){
    this.sudokuDrawer.draw(9, 9)
  }
}
