class chess extends gameEngine{
  chessDrawer
  chessController
  constructor() {
    super();
    this.chessDrawer = new chess_drawer()
    this.chessController = new chess_controller()
  }

  init(){
    this.chessDrawer.draw(8, 8)
  }

}
