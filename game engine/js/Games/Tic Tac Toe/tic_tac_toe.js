class tic_tac_toe extends gameEngine{
  ticTacToeDrawer
  ticTacToeController
  state
  constructor() {
    super();
    this.state = {}
    for (let i = 1; i <= 3; i++) {
      (this.state)[i] = [];
      for (let j = 1; j <= 3; j++) {
        (this.state)[i][j] = '';
      }
    }
    this.ticTacToeController = new tic_tac_toe_controller(this.ticTacToeDrawer, this.state)
    this.ticTacToeDrawer = new tic_tac_toe_drawer(this.ticTacToeController, this.state)
    this.ticTacToeController.drawer = this.ticTacToeDrawer
  }

  init(){
    this.ticTacToeDrawer.draw(3, 3)
  }

}
