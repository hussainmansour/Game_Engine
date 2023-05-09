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
    while (true) {
      const board = document.getElementById('board')
      if (board) board.remove()
      else break;
    }

    const table = document.createElement("div");table.id = 'board'
    for (let i = 0; i < 8; i++) {
      const tr = document.createElement('div');
      // tr.id = i + ''
      for (let j = 0; j < 8; j++) {
        const td = document.createElement('button');
        if(state[i][j]) td.textContent = '\u265B'
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
    if(input.length !== 2) {
      console.log("Invalid Input!")
      return
    }

    const col = input[0].charAt(0).charCodeAt(0) - 'a'.charCodeAt(0)
    const row = input[1] - '1'
    if (isNaN(row) || isNaN(col) || row < 0 || row >= 8 || col < 0 || col >= 8) {
      console.log("Invalid Input!")
      return
    }

    let queen = true
    for (let i = 0; i < 8; i++)
      for (let j = 0; j < 8; j++)
        if(state[i][j])
          if (i === row || j === col || Math.abs(i - j) === Math.abs(row - col) || i + j === row + col)
            queen = false

    if(queen){
      state[row][col] = 1
    }
    else{
      console.log("Invalid Move")
    }
  }

}
