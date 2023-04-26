class connect_four_drawer extends drawer{
  state
  constructor() {
    super();
  }

  draw(n, m) {
    const table = document.createElement("div");
    table.className = 'blue'
    table.style.padding = '0.7em'
    for (let i = 1; i <= n; i++) {
      const tr = document.createElement('div');
      for (let j = 1; j <= m; j++) {
        const td = document.createElement('button');
        td.style.width = td.style.height = '5em'
        td.style.borderRadius = '50%'
        td.style.margin = '0.3em'
        td.className = 'cyan'
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }

}
