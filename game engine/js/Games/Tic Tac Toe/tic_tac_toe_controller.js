class tic_tac_toe_controller extends controller{
  constructor(drawer, state) {
    super(drawer, state);
  }

  validate_input() {
    super.validate_input();
    const last = (this.moves)[this.moves.length - 1]
    return this.state[last.i][last.j] === '';
  }

  take_turns(n) {
    super.take_turns(n);
  }

  control() {
    super.control();
    const last = (this.moves)[this.moves.length - 1]
    const cell = document.getElementById('r' + last.i + 'c' + last.j);
    const span = document.createElement('span')
    if(this.validate_input()){
      const content = (this.turn === 1 ? 'x' : 'o')
      this.state[last.i][last.j] = span.textContent = content
      span.classList.add(content)
      span.style.fontSize = '5em'
      span.style.textShadow = '#777 3px 3px 4px'
      this.take_turns(2)
      cell.appendChild(span)

      const winner = this.calculateWinner();
      if (winner !== null) console.log(winner);
    }
  }

  calculateWinner() {
    // Check horizontal lines
    for (let i = 1; i <= 3; i++) {
      if (
        (this.state)[i][1] === (this.state)[i][2] &&
        (this.state)[i][2] === (this.state)[i][3] &&
        (this.state)[i][1] !== ''
      ) {
        document.getElementById('r' + i + 'c' + 1).classList.remove('cyan');
        document.getElementById('r' + i + 'c' + 1).classList.add('green');
        document.getElementById('r' + i + 'c' + 2).classList.remove('cyan');
        document.getElementById('r' + i + 'c' + 2).classList.add('green');
        document.getElementById('r' + i + 'c' + 3).classList.remove('cyan');
        document.getElementById('r' + i + 'c' + 3).classList.add('green');
        return (this.state)[i][1];
      }
    }

    // Check vertical lines
    for (let i = 1; i <= 3; i++) {
      if (
        (this.state)[1][i] === (this.state)[2][i] &&
        (this.state)[2][i] === (this.state)[3][i] &&
        (this.state)[1][i] !== ''
      ) {
        document.getElementById('r' + 1 + 'c' + i).classList.remove('cyan');
        document.getElementById('r' + 1 + 'c' + i).classList.add('green');
        document.getElementById('r' + 2 + 'c' + i).classList.remove('cyan');
        document.getElementById('r' + 2 + 'c' + i).classList.add('green');
        document.getElementById('r' + 3 + 'c' + i).classList.remove('cyan');
        document.getElementById('r' + 3 + 'c' + i).classList.add('green');
        return (this.state)[1][i];
      }
    }

    // Check diagonal lines
    if (
      (this.state)[1][1] === (this.state)[2][2] &&
      (this.state)[2][2] === (this.state)[3][3] &&
      (this.state)[1][1] !== ''
    ) {
      document.getElementById('r' + 1 + 'c' + 1).classList.remove('cyan');
      document.getElementById('r' + 1 + 'c' + 1).classList.add('green');
      document.getElementById('r' + 2 + 'c' + 2).classList.remove('cyan');
      document.getElementById('r' + 2 + 'c' + 2).classList.add('green');
      document.getElementById('r' + 3 + 'c' + 3).classList.remove('cyan');
      document.getElementById('r' + 3 + 'c' + 3).classList.add('green');
      return (this.state)[1][1];
    }

    if (
      (this.state)[1][3] === (this.state)[2][2] &&
      (this.state)[2][2] === (this.state)[3][1] &&
      (this.state)[1][3] !== ''
    ) {
      document.getElementById('r' + 1 + 'c' + 3).classList.remove('cyan');
      document.getElementById('r' + 1 + 'c' + 3).classList.add('green');
      document.getElementById('r' + 2 + 'c' + 2).classList.remove('cyan');
      document.getElementById('r' + 2 + 'c' + 2).classList.add('green');
      document.getElementById('r' + 3 + 'c' + 1).classList.remove('cyan');
      document.getElementById('r' + 3 + 'c' + 1).classList.add('green');
      return (this.state)[1][3];
    }

    // If there is no winner
    return null;
  }
}
