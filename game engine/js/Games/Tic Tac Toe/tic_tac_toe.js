class tic_tac_toe extends gameEngine{
  ticTacToeDrawer
  ticTacToeController
  state
  constructor() {
    super();
    this.ticTacToeController = new tic_tac_toe_controller(this.ticTacToeDrawer, this.state)
    this.ticTacToeDrawer = new tic_tac_toe_drawer(this.ticTacToeController, this.state)
  }

  init(){
    this.ticTacToeDrawer.draw(3, 3)
  }

}
