class tic_tac_toe extends gameEngine{
  constructor() {
    const state = {}
    for (let i = 0; i < 3; i++) {
      state[i] = [];
      for (let j = 0; j < 3; j++) state[i][j] = '';
    }
    super(state);
  }

  drawer(state) {
    super.drawer(state)
    const board = document.getElementById('board')
    if(board) board.remove()

    const table = document.createElement("div");table.id = 'board'
    for (let i = 0; i < 3; i++) {
      const tr = document.createElement('div');
      for (let j = 0; j < 3; j++) {
        const td = document.createElement('button');
        td.textContent = state[i][j]
        td.className = 'cyan'
        td.style.width = td.style.height = '12em'
        // td.style.fontSize = '3em'
        td.style.border = '1px solid #EEE'
        tr.appendChild(td);
      }
      tr.style.display = 'flex'
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }

  controller(state, input) {
    super.controller(state, input);
    const splitted = input.split(" ")
    if(splitted.length !== 3) {
      console.log("Invalid Move!")
      return
    }
    const row = splitted[0] - '1', col = splitted[1] - '1', value = splitted[2].toLowerCase()
    if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2 || (value !== 'x'  && value !== 'o')) {
      console.log("Invalid Input!")
      return
    }

    if(state[row][col] === ''){
      // TODO switch turns
      state[row][col] = value
    }
    else{
      console.log("Invalid move")
    }
  }

}
