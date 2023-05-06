class chess extends gameEngine{
  constructor() {
    const state = {}
    for (let i = 0; i < 8; i++) {
      state[i] = [];
      for (let j = 0; j < 8; j++)
        state[i][j] = '';
    }
    const namePieces = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    const blackPieces = ['\u265C', '\u265E', '\u265D', '\u265B', '\u265A', '\u265D', '\u265E', '\u265C'];
    const whitePieces = ['\u2656', '\u2658', '\u2657', '\u2655', '\u2654', '\u2657', '\u2658', '\u2656'];

    for (let i = 0; i < 8; i++) {
      state[0][i] = {name: namePieces[i], color: 'white', symbol: whitePieces[i]};
      state[1][i] = {name: 'pawn', color: 'white', symbol: '\u2659'};
      state[6][i] = {name: 'pawn', color: 'black', symbol: '\u265F'};
      state[7][i] = {name: namePieces[i], color: 'black', symbol: blackPieces[i]};
    }
    state['turn'] = 'white'
    super(state);
  }

  drawer(state) {
    super.drawer(state)
    const board = document.getElementById('board')
    if(board) board.remove()

    const table = document.createElement("div");table.id = 'board'
    for (let i = 0; i < 8; i++) {
      const tr = document.createElement('div');
      for (let j = 0; j < 8; j++) {
        const td = document.createElement('button');
        td.className = (i%2 === j%2 ? "white" : "grey")
        td.style.width = td.style.height = '1.3em'
        td.style.fontSize = '3em'
        td.textContent = state[i][j].symbol
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

    const from = splitted[0], to = splitted[1]
    const rowFrom = from[0], rowTo = to[0]
    const colFrom = from[1], colTo = to[1]


    console.log("Nice move")
  }

}
