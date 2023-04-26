class connect_four extends gameEngine{
  connectFourDrawer
  connectFourController
  constructor() {
    super();
    this.connectFourDrawer = new connect_four_drawer()
    this.connectFourController = new connect_four_controller()
  }

  init(){
    this.connectFourDrawer.draw(6, 7)
  }

}
