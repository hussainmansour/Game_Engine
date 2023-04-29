class Queens_controller extends controller {
  constructor(drawer, state) {
    super(drawer, state);
  }

  validate_input() {
    super.validate_input();
    const last = (this.moves)[this.moves.length - 1]
    // find any queen on forbidden position according to the last queen inserted
    // but not the new queen
    return this.state.findIndex(el =>
      (el.i === last.i || el.j === last.j ||
      el.i - el.j === last.i - last.j ||
      8 - el.i - el.j === 8 - last.i - last.j))
  }

  take_turns(n) {
    super.take_turns(n);
  }

  control() {
    super.control();
    const last = (this.moves)[this.moves.length - 1]
    const cell = document.getElementById('r' + last.i + 'c' + last.j)

    if(cell.textContent !== '') {
      cell.textContent = ''
      const removed_position = this.state.findIndex(el => el.i === last.i && el.j === last.j)
      this.state.splice(removed_position, 1)
    }
    else{
      const threat_queen_pos = this.validate_input()
      if(threat_queen_pos === -1) {
        cell.textContent = '\u265B'
        this.state.push(last)
      }
      else {
        this.moves.splice(this.moves.length - 1, 1)
        const threat = this.state[threat_queen_pos]
        const threat_queen = document.getElementById('r' + threat.i + 'c' + threat.j)
        threat_queen.classList.add('invalid_cell')
        setTimeout(() => {threat_queen.classList.remove('invalid_cell');}, 1000);
      }
    }
  }
}
