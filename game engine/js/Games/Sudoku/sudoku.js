class sudoku extends gameEngine{
  state
  constructor() {
    super();
    this.initialize_state()
  }

  game() {
    super.game();
    this.drawer(this.state)
    const input_button = document.createElement('button')
    input_button.id = 'input';input_button.textContent = "Give Input"
    input_button.addEventListener('click',() => {
      const input = prompt("Enter queen position i.e. 2 5 4")
      const input_ = input.split(' ')

      if (input_.length !== 3) console.log("Invalid input!")
      else {
        if (isNaN(input_[0] - '0') || isNaN(input_[1] - '0') || isNaN(input_[2] - '0')) {
          console.log("Invalid input!");
        } else {
          const move = {i: input_[0] - '0', j: input_[1] - '0', value: input_[2] - '0'}
          this.controller(this.state, move)
          this.drawer(this.state)
        }
      }
    });
    document.body.appendChild(input_button)
  }

  controller(state, input) {
    super.controller(state, input);
    if(this.validate_input(state, input.i, input.j, input.value))
      state[input.i][input.j] = input.value
    else
      console.log("Invalid Move")
  }
  initialize_state() {
    this.state = {}
    for (let i = 1; i <= 9; i++) {
      (this.state)[i] = [];
      for (let j = 1; j <= 9; j++) {
        (this.state)[i][j] = 0;
      }
    }

    // Fill the state with random numbers
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        if (Math.random() < 0.5) {
          // Fill the cell with a random number between 1 and 9
          let randomNumber = Math.floor(Math.random() * 9) + 1;
          if (this.validate_input(this.state, i, j, randomNumber)) {
            (this.state)[i][j] = randomNumber;
          }
        }
      }
    }
  }

  validate_input(state, row, col, value,first=true) {
    if(value > 9 || value < 1 || isNaN(value)) return false;

    // Check row
    let invalid = true;
    for (let j = 1; j <= 9; j++) {
      if (state[row][j] === value) {
        if (!first) {
          const cell = document.getElementById('r' + row + 'c' + j);
          cell.classList.add('invalid_cell');
          setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
        }
        invalid = false;
      }
    }

    // Check column
    for (let i = 1; i <= 9; i++) {
      if (state[i][col] === value) {
        if (!first) {
          const cell = document.getElementById('r' + i + 'c' + col);
          cell.classList.add('invalid_cell');
          setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
        }
        invalid = false;
      }
    }

    // Check box
    let boxRow = Math.floor((row - 1) / 3) * 3 + 1;
    let boxCol = Math.floor((col - 1) / 3) * 3 + 1;
    for (let i = boxRow; i <= boxRow + 2; i++) {
      for (let j = boxCol; j <= boxCol + 2; j++) {
        if (state[i][j] === value) {
          if (!first) {
            const cell = document.getElementById('r' + i + 'c' + j);
            cell.classList.add('invalid_cell');
            setTimeout(() => {cell.classList.remove('invalid_cell');}, 1000);
          }
          invalid = false;
        }
      }
    }
    return invalid;
  }


  drawer(state) {
    super.drawer(state);
    const board = document.getElementById('board')
    if(board) board.remove()

    const table = document.createElement("div");table.id = 'board'
    for (let i = 1; i <= 9; i++) {
      const tr = document.createElement('div');
      for (let j = 1; j <= 9; j++) {
        const td = document.createElement('button');
        if (state[i][j] !== 0) {
          td.textContent = (this.state)[i][j];
          td.classList.add('tile-start');
        }
        if(i===3 || i===6){td.classList.add('horizontal-line');}
        if(j===3 || j===6){td.classList.add('vertical-line');}
        td.classList.add('tile');
        td.style.width = td.style.height = '1.3em'
        td.style.fontSize = '3em'
        tr.appendChild(td);
      }
      tr.style.display = 'flex'
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }

}
