class Queens extends gameEngine{
  constructor() {
    const state = {}
    for (let i = 0; i < 8; i++) {
      state[i] = []
      for (let j = 1; j <= 8; j++) {
        state[i][j] = 0
      }
    }
    super(state);
  }

  drawer(state){
    super.drawer(state)
    const board = document.getElementById('board')
    if(board) board.remove()

    const table = document.createElement("div");table.id = 'board'
    for (let i = 0; i < 8; i++) {
      const tr = document.createElement('div');
      // tr.id = i + ''
      for (let j = 0; j < 8; j++) {
        const td = document.createElement('button');
        if(state[i][j]) td.textContent = '\u265B'

        // td.id = tr.id + '' + j
        td.className = (i%2 === j%2 ? "white" : "grey")
        td.style.width = td.style.height = '1.3em'
        td.style.fontSize = '3em'
        tr.appendChild(td);
      }
      tr.style.display = 'flex'
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }

  controller(state, input){
    super.controller(state, input)
    const splitted = input.split(" ")
    if(splitted.length !== 2) {
      console.log("Invalid Input!")
      return
    }
    let row = splitted[0] - '1', col = splitted[1] - '1'
    if (isNaN(row) || isNaN(col) || row < 0 || row > 7 || col < 0 || col > 7) {
      console.log("Invalid Input!")
      return
    }

    let queen = true
    for (let i = 0; i < 8; i++)
      for (let j = 0; j < 8; j++)
        if(state[i][j])
          if ((i === row || j === col || i - j === row - col ||
              7 - i - j === 7 - row - col) && state[i][j])
            queen = false

    if(queen){
      state[row][col] = 1
    }
    else{
      console.log("Invalid Move")
    }
  }

}
