class drawer{
  constructor() { }
  draw_board(n, m){
    const table = document.createElement("div");
    table.id = 'board'

    for (let i = 1; i <= n; i++) {
      const tr = document.createElement('div');
      tr.id = 'r'+i

      for (let j = 1; j <= m; j++) {
        const td = document.createElement('button');
        td.id = tr.id + 'c' + j
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
    document.body.appendChild(table);


    const exit = document.createElement('button')
    exit.id = 'exit';exit.textContent = 'back to main Menu'
    document.body.appendChild(exit);
  }
}
