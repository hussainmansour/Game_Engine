class Queens extends gameEngine{
  QueensDrawer
  QueensController
  constructor() {
    super();
    this.QueensDrawer = new Queens_drawer()
    this.QueensController = new Queens_controller()
  }

  init(){
    this.QueensDrawer.draw(8, 8)
  }

}
