class connect_four extends gameEngine{
  connectFourDrawer
  connectFourController
  state
  constructor() {
    super();
    this.connectFourController = new connect_four_controller(this.connectFourDrawer, this.state)
    this.connectFourDrawer = new connect_four_drawer(this.connectFourController, this.state)
  }

  init(){
    this.connectFourDrawer.draw(6, 7)
  }

}
