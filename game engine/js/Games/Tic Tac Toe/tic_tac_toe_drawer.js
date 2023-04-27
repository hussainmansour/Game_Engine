class tic_tac_toe_drawer extends drawer{
  state
  constructor() {
    super();
    super.draw_board(3, 3)
  }

  draw(n, m) {
    for (let i = 1; i <= n; i++) {
      const tr = document.getElementById('r' + i)
      tr.style.display = 'flex'

      for (let j = 1; j <= m; j++) {
        const td = document.getElementById('r' + i + 'c' + j)
        td.className = 'cyan'
        td.style.width = td.style.height = '12em'
        td.style.border = '1px solid #EEE'
      }
    }
  }

}
