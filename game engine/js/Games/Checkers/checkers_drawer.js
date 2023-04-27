class checkers_drawer extends drawer{
  state
  constructor() {
    super();
    super.draw_board(8, 8)
    this.initial_state(8, 8)
  }

  initial_state(n, m){
    this.state = {}
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const position = i + '' + j
        if(i <= 3)
          this.state[position] =  i%2 !== j%2 ? {player: 1, color: 'red'}:{player: -1}
        else if(n-i+1 <= 3)
          this.state[position] =  i%2 !== j%2 ? {player: 2, color: 'cyan'}:{player: -1}
        else
          this.state[position] =  {player: -1}
      }
    }
  }
  draw(n, m) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const td = document.getElementById('r'+ i + 'c' +j)
        const position = i + '' + j

        td.className = (i%2 === j%2 ? "white" : "black")
        td.style.width = td.style.height = '1.3em'
        td.style.fontSize = '3em'
        if(this.state[position].player !== -1){
          td.textContent = '\u2689'
          td.style.color = this.state[position].color
        }
      }
      const tr = document.getElementById('r'+ i)
      tr.style.display = 'flex'
    }
  }

}
