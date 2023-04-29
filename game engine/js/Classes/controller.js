class controller{
  drawer
  state
  moves
  turn;
  constructor(drawer, state) {
    this.drawer = drawer
    this.state = state
    this.moves = []
    this.turn = 1
  }
  validate_input(){}
  take_turns(n){
    this.turn = (this.turn + 1) % n;
  }
  control(){}
}
