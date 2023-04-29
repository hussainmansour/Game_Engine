class checkers_drawer extends drawer{
  constructor(controller, state) {
    super(controller, state);
    super.draw_board(8, 8)
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
        else td.textContent = ''
      }
      const tr = document.getElementById('r'+ i)
      tr.style.display = 'flex'
    }
  }

}
