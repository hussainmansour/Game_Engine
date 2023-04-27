class chess extends gameEngine{
  chessDrawer
  chessController
  constructor() {
    super();
    this.chessDrawer = new chess_drawer(this.chessController)
    this.chessController = new chess_controller(this.chessDrawer)
  }

  init(){
    this.chessDrawer.draw(8, 8)
  }

}
