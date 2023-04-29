class chess_controller extends controller{
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
      const firstPos = String.fromCharCode('a'.charCodeAt(0) + first.j - 1) + first.i
      const secondPos = String.fromCharCode('a'.charCodeAt(0) + second.j - 1) + second.i
      if(this.validate_input())
        [(this.state)[firstPos], (this.state)[secondPos]] = [(this.state)[secondPos], (this.state)[firstPos]]

      this.drawer.draw(8, 8)
      this.moves = []
    }
  }
}
