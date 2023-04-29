class tic_tac_toe_controller extends controller{
  constructor(drawer, state) {
    super(drawer, state);
  }

  validate_input() {
    super.validate_input();
  }

  take_turns() {
    super.take_turns();
  }

  control() {
    super.control();
    const last = (this.moves)[this.moves.length - 1]
    if(this.state[last.i][last.j] !== ''){
      return;
    }
    const cell = document.getElementById('r' + last.i + 'c' + last.j);
    const span = document.createElement('span');
    if(this.turn === 1){
      this.state[last.i][last.j] = 'X';
      span.classList.add('x');
      this.turn = 2;
    }
    else{
      this.state[last.i][last.j] = 'O';
      span.classList.add('o');
      this.turn = 1;
    }
    span.textContent = this.state[last.i][last.j];
    span.style.fontSize = '5em';
    cell.appendChild(span);
    const winner = this.calculateWinner(this.state);
    if(winner !== null) {
      console.log(winner);
    }
    console.log(this.turn);
    console.log(this.state);
  }

  calculateWinner(board) {
    // Check horizontal lines
    for (let i = 1; i <= 3; i++) {
      if (
        board[i][1] === board[i][2] &&
        board[i][2] === board[i][3] &&
        board[i][1] !== ''
      ) {
        document.getElementById('r' + i + 'c' + 1).classList.remove('cyan');
        document.getElementById('r' + i + 'c' + 1).classList.add('grey');
        document.getElementById('r' + i + 'c' + 2).classList.remove('cyan');
        document.getElementById('r' + i + 'c' + 2).classList.add('grey');
        document.getElementById('r' + i + 'c' + 3).classList.remove('cyan');
        document.getElementById('r' + i + 'c' + 3).classList.add('grey');
        return board[i][1];
      }
    }

    // Check vertical lines
    for (let i = 1; i <= 3; i++) {
      if (
        board[1][i] === board[2][i] &&
        board[2][i] === board[3][i] &&
        board[1][i] !== ''
      ) {
        document.getElementById('r' + 1 + 'c' + i).classList.remove('cyan');
        document.getElementById('r' + 1 + 'c' + i).classList.add('grey');
        document.getElementById('r' + 2 + 'c' + i).classList.remove('cyan');
        document.getElementById('r' + 2 + 'c' + i).classList.add('grey');
        document.getElementById('r' + 3 + 'c' + i).classList.remove('cyan');
        document.getElementById('r' + 3 + 'c' + i).classList.add('grey');
        return board[1][i];
      }
    }

    // Check diagonal lines
    if (
      board[1][1] === board[2][2] &&
      board[2][2] === board[3][3] &&
      board[1][1] !== ''
    ) {
      document.getElementById('r' + 1 + 'c' + 1).classList.remove('cyan');
      document.getElementById('r' + 1 + 'c' + 1).classList.add('grey');
      document.getElementById('r' + 2 + 'c' + 2).classList.remove('cyan');
      document.getElementById('r' + 2 + 'c' + 2).classList.add('grey');
      document.getElementById('r' + 3 + 'c' + 3).classList.remove('cyan');
      document.getElementById('r' + 3 + 'c' + 3).classList.add('grey');
      return board[1][1];
    }

    if (
      board[1][3] === board[2][2] &&
      board[2][2] === board[3][1] &&
      board[1][3] !== ''
    ) {
      document.getElementById('r' + 1 + 'c' + 3).classList.remove('cyan');
      document.getElementById('r' + 1 + 'c' + 3).classList.add('grey');
      document.getElementById('r' + 2 + 'c' + 2).classList.remove('cyan');
      document.getElementById('r' + 2 + 'c' + 2).classList.add('grey');
      document.getElementById('r' + 3 + 'c' + 1).classList.remove('cyan');
      document.getElementById('r' + 3 + 'c' + 1).classList.add('grey');
      return board[1][3];
    }

    // If there is no winner
    return null;
  }
}
