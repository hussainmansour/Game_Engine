class checkers_controller extends controller{
  constructor(drawer, state) {
    super(drawer, state);
  }

  validate_input() {
    super.validate_input();
    return true
  }

  take_turns() {
    super.take_turns();
  }

  control() {
    super.control();
    if(this.moves.length === 2){
      const first = (this.moves)[0]
      const second = (this.moves)[1]
      const firstPos = first.i + '' + first.j
      const secondPos = second.i + '' + second.j
      const emptyPiece = {player: -1}
      if(this.validate_input())
        [(this.state)[firstPos], (this.state)[secondPos]] = [emptyPiece, (this.state)[firstPos]]
      console.log(this.state)
      this.drawer.draw(8, 8)
      this.moves = []
    }

    else{
      const oneMove = this.moves[0].i + '' + this.moves[0].j
      if(this.state[oneMove].player === -1){
        console.log("invalid move")
        this.moves = []
      }
    }
  }
}
