class sudoku_drawer extends drawer {
  constructor(controller, state) {
    super(controller, state);
    super.draw_board(9, 9);
  }

  draw(grid, n, m) {
    for (let i = 1; i <=n ; i++) {
      for (let j = 1; j <=m ; j++) {
        const td = document.getElementById('r'+ i + 'c' +j)
        if ((grid)[i][j] !== 0) {
          td.textContent = grid[i][j];
          td.classList.add('tile-start');
        }
        if(i===3 || i===6){
          td.classList.add('horizontal-line');

        }
        if(j===3 || j===6){
          td.classList.add('vertical-line');
        }
        td.classList.add('tile');
        td.style.width = td.style.height = '1.3em'
        td.style.fontSize = '3em'
      }
      const tr = document.getElementById('r'+ i)
      tr.style.display = 'flex'
      }
    }


}
