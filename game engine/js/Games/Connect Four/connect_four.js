class connect_four extends gameEngine{
  connectFourDrawer
  connectFourController
  state
  constructor() {
    super();
    this.connectFourDrawer = new connect_four_drawer(this.connectFourController)
    this.connectFourController = new connect_four_controller(this.connectFourDrawer)
  }

  init(){
    this.connectFourDrawer.draw(6, 7)
  }

}
