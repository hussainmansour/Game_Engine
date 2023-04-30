class connect_four extends gameEngine{
  connectFourDrawer
  connectFourController
  state
  constructor() {
    super();
    this.state = {}
    for (let i = 1; i <= 6; i++) {
      (this.state)[i] = [];
      for (let j = 1; j <= 7; j++) {
        (this.state)[i][j] = '';
      }
    }
    this.connectFourController = new connect_four_controller(this.connectFourDrawer, this.state)
    this.connectFourDrawer = new connect_four_drawer(this.connectFourController, this.state)
    this.connectFourController.drawer = this.connectFourDrawer
  }

  init(){
    this.connectFourDrawer.draw(6, 7)
  }

}
