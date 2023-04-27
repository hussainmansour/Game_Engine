class Queens_drawer extends drawer {
  state;
  constructor() {
  super();
  super.draw_board(8, 8)
  this.state = {
    'a1': {name: '', color: '', symbol: ''}, 'b1': {name: '', color: '', symbol: ''},
    'c1': {name: '', color: '', symbol: ''}, 'd1': {name: '', color: '', symbol: ''},
    'e1': {name: '', color: '', symbol: ''}, 'f1': {name: '', color: '', symbol: ''},
    'g1': {name: '', color: '', symbol: ''}, 'h1': {name: '', color: '', symbol: ''},

    'a2': {name: '', color: '', symbol: ''}, 'b2': {name: '', color: '', symbol: ''},
    'c2': {name: '', color: '', symbol: ''}, 'd2': {name: '', color: '', symbol: ''},
    'e2': {name: '', color: '', symbol: ''}, 'f2': {name: '', color: '', symbol: ''},
    'g2': {name: '', color: '', symbol: ''}, 'h2': {name: '', color: '', symbol: ''},

    'a3': {name: '', color: '', symbol: ''}, 'b3': {name: '', color: '', symbol: ''},
    'c3': {name: '', color: '', symbol: ''}, 'd3': {name: '', color: '', symbol: ''},
    'e3': {name: '', color: '', symbol: ''}, 'f3': {name: '', color: '', symbol: ''},
    'g3': {name: '', color: '', symbol: ''}, 'h3': {name: '', color: '', symbol: ''},

    'a4': {name: '', color: '', symbol: ''}, 'b4': {name: '', color: '', symbol: ''},
    'c4': {name: '', color: '', symbol: ''}, 'd4': {name: '', color: '', symbol: ''},
    'e4': {name: '', color: '', symbol: ''}, 'f4': {name: '', color: '', symbol: ''},
    'g4': {name: '', color: '', symbol: ''}, 'h4': {name: '', color: '', symbol: ''},

    'a5': {name: '', color: '', symbol: ''}, 'b5': {name: '', color: '', symbol: ''},
    'c5': {name: '', color: '', symbol: ''}, 'd5': {name: '', color: '', symbol: ''},
    'e5': {name: '', color: '', symbol: ''}, 'f5': {name: '', color: '', symbol: ''},
    'g5': {name: '', color: '', symbol: ''}, 'h5': {name: '', color: '', symbol: ''},

    'a6': {name: '', color: '', symbol: ''}, 'b6': {name: '', color: '', symbol: ''},
    'c6': {name: '', color: '', symbol: ''}, 'd6': {name: '', color: '', symbol: ''},
    'e6': {name: '', color: '', symbol: ''}, 'f6': {name: '', color: '', symbol: ''},
    'g6': {name: '', color: '', symbol: ''}, 'h6': {name: '', color: '', symbol: ''},

    'a7': {name: '', color: '', symbol: ''}, 'b7': {name: '', color: '', symbol: ''},
    'c7': {name: '', color: '', symbol: ''}, 'd7': {name: '', color: '', symbol: ''},
    'e7': {name: '', color: '', symbol: ''}, 'f7': {name: '', color: '', symbol: ''},
    'g7': {name: '', color: '', symbol: ''}, 'h7': {name: '', color: '', symbol: ''},

    'a8': {name: '', color: '', symbol: ''}, 'b8': {name: '', color: '', symbol: ''},
    'c8': {name: '', color: '', symbol: ''}, 'd8': {name: '', color: '', symbol: ''},
    'e8': {name: '', color: '', symbol: ''}, 'f8': {name: '', color: '', symbol: ''},
    'g8': {name: '', color: '', symbol: ''}, 'h8': {name: '', color: '', symbol: ''},

  };
}

  draw(n, m) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const td = document.getElementById('r'+ i + 'c' +j)
        td.className = (i%2 === j%2 ? "white" : "grey")
        td.style.width = td.style.height = '1.3em'
        td.style.fontSize = '3em'
      }
      const tr = document.getElementById('r'+ i)
      tr.style.display = 'flex'
    }
  }


}
