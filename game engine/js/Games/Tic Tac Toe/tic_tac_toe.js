class tic_tac_toe extends gameEngine{
  constructor() {
    const state = {}
    for (let i = 0; i < 3; i++) {
      state[i] = [];
      for (let j = 0; j < 3; j++) state[i][j] = '';
    }
    state['turn'] = 'x';
    super(state);
  }

  drawer(state) {
    super.drawer(state)
    const board = document.getElementById('board')
    if(board) board.remove()

    const table = document.createElement("div");table.id = 'board'
    const turn = document.createElement('div');turn.id = 'turn'
    turn.textContent = 'Turn: ' + state['turn']
    turn.style.display = 'flex';turn.style.fontSize = '3em'
    turn.style.justifyContent = 'center';turn.style.alignItems = 'center'
    turn.style.textShadow = '#777 3px 3px 4px'
    table.appendChild(turn);
    for (let i = 0; i < 3; i++) {
      const tr = document.createElement('div');
      for (let j = 0; j < 3; j++) {
        const td = document.createElement('button');
        const span = document.createElement('span');
        span.textContent = state[i][j];
        if(state[i][j] === 'x'|| state[i][j] === 'o'){
          span.classList.add(state[i][j])
        }
        span.style.fontSize = '5em'
        span.style.textShadow = '#777 3px 3px 4px'

        td.className = 'cyan'
        td.style.width = td.style.height = '12em'
        // td.style.fontSize = '3em'
        td.style.border = '1px solid #EEE'
        td.appendChild(span)
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
    if(splitted.length !== 2) {
      console.log("Invalid Move!")
      return
    }
    const row = splitted[0] - '1', col = splitted[1] - '1', value = state['turn']
    if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2 || (value !== 'x'  && value !== 'o')) {
      console.log("Invalid Input!")
      return
    }

    if(state[row][col] === ''){
      state['turn'] = (value === 'x' ? 'o' : 'x')
      state[row][col] = value
    }
    else{
      console.log("Invalid move")
    }
  }

}
