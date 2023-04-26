class tic_tac_toe_drawer extends drawer{
  state
  constructor() {
    super();
  }

  draw(n, m) {
    const table = document.createElement("div");
    for (let i = 1; i <= n; i++) {
      const tr = document.createElement('div');
      for (let j = 1; j <= m; j++) {
        const td = document.createElement('button');
        td.className = 'cyan'
        td.style.width = td.style.height = '12em'
        td.style.border = '1px solid #EEE'
        tr.appendChild(td);
      }
      tr.style.lineHeight = 0
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }

}
