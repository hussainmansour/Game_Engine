class checkers extends gameEngine{
  CheckersDrawer
  CheckersController
  constructor() {
    super();
    this.CheckersDrawer = new checkers_drawer(this.CheckersController)
    this.CheckersController = new checkers_controller(this.CheckersDrawer)
  }

  init(){
    this.CheckersDrawer.draw(8, 8)
  }

}
