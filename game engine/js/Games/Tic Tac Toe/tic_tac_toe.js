class tic_tac_toe extends gameEngine{
  ticTacToeDrawer
  ticTacToeController
  constructor() {
    super();
    this.ticTacToeDrawer = new checkers_drawer()
    this.ticTacToeController = new checkers_controller()
  }

  init(){
    this.ticTacToeDrawer.draw(3, 3)
  }

}
