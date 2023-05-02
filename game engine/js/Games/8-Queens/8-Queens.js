class Queens extends gameEngine{
  state
  constructor() {
    super();
    this.initialize_state()
  }

  game(){
    this.drawer(this.state)
    const input_button = document.createElement('button')
    input_button.id = 'input';input_button.textContent = "Give Input"
    input_button.addEventListener('click',() => {
      const input = prompt("Enter queen position i.e. 2 5")
      const input_ = input.split(' ')

      if (input_.length !== 2) console.log("Invalid input!")
      else {
        if (isNaN(input_[0] - '0') || isNaN(input_[1] - '0')) {
          console.log("Invalid input!");
        } else {
          const move = {i: input_[0] - '0', j: input_[1] - '0'}
          this.controller(this.state, move)
          this.drawer(this.state)
        }
      }
    });
    document.body.appendChild(input_button)
  }
  initialize_state(){
    this.state = {}
    for (let i = 1; i <= 8; i++) {
      (this.state)[i] = []
      for (let j = 1; j <= 8; j++) {
        (this.state)[i][j] = 0
      }
    }
  }

  drawer(state){
    const board = document.getElementById('board')
    if(board) board.remove()

    const table = document.createElement("div");
    table.id = 'board'

    for (let i = 1; i <= 8; i++) {
      const tr = document.createElement('div');
      // tr.id = i + ''
      for (let j = 1; j <= 8; j++) {
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
    let queen = true
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        if(state[i][j]) {
          if ((i === input.i || j === input.j || i - j === input.i - input.j ||
              8 - i - j === 8 - input.i - input.j) && state[i][j])
            queen = false
        }
      }
    }

    if(queen){
      // valid move
      state[input.i][input.j] = 1
    }
    else{
      // we can just remove the queen
      // but we won't cause we need to validate move nothing more
      console.log("Invalid move")
    }
  }

}
