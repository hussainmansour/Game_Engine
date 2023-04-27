class tic_tac_toe extends gameEngine{
  ticTacToeDrawer
  ticTacToeController
  constructor() {
    super();
    this.ticTacToeDrawer = new tic_tac_toe_drawer()
    this.ticTacToeController = new tic_tac_toe_controller()
  }

  init(){
    this.ticTacToeDrawer.draw(3, 3)
  }

}
