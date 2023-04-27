class checkers extends gameEngine{
  CheckersDrawer
  CheckersController
  constructor() {
    super();
    this.CheckersDrawer = new checkers_drawer()
    this.CheckersController = new checkers_controller()
  }

  init(){
    this.CheckersDrawer.draw(8, 8)
  }

}
