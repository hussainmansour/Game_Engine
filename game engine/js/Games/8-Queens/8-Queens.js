class Queens extends gameEngine{
  QueensDrawer
  QueensController
  state
  constructor() {
    super();
    this.state = []
    this.QueensController = new Queens_controller(this.QueensDrawer, this.state)
    this.QueensDrawer = new Queens_drawer(this.QueensController, this.state)
  }

  init(){
    this.QueensDrawer.draw(8, 8)
  }

}
