class connect_four_drawer extends drawer{
  constructor(controller, state) {
    super(controller, state);
    super.draw_board(6, 7)
  }

  draw(n, m) {
    const table = document.getElementById('board')
    table.className = 'blue'
    table.style.padding = '0.7em'

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const td = document.getElementById('r' + i + 'c' + j)
        td.style.width = td.style.height = '5em'
        td.style.borderRadius = '50%'
        td.style.margin = '0.3em'
        td.className = 'cyan'
      }
    }
  }

}
