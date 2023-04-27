class Queens extends gameEngine{
  QueensDrawer
  QueensController
  constructor() {
    super();
    this.QueensDrawer = new Queens_drawer(this.QueensController)
    this.QueensController = new Queens_controller(this.QueensDrawer)
  }

  init(){
    this.QueensDrawer.draw(8, 8)
  }

}
