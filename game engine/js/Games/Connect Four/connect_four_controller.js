class connect_four_controller extends controller{
  constructor(drawer, state) {
    super(drawer, state);
  }

  validate_input(col) {
    super.validate_input();
    for (let i = 6; i >= 1; i--){
      if (this.state[i][col] === '') {
        return i;
      }
    }
    return null;
  }

  take_turns(n) {
    super.take_turns(n);
  }

  control() {
    super.control();
    const last=this.moves[this.moves.length-1];
    const col=last.j;
    const row=this.validate_input(col);
    if(row===null){
      console.log('invalid move');
      this.moves.splice(this.moves.length - 1, 1);
      return;
    }
    this.state[row][col]=(this.turn === 1 ? 'r' : 'y');
    const cell = document.getElementById('r' + row + 'c' + col);
    cell.classList.add(this.state[row][col]);
    this.moves[this.moves.length-1].i=row;
    this.take_turns(2);
  }
}
