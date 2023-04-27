class chess_drawer extends drawer{
  state
  constructor(controller) {
    super();
    super.draw_board(8, 8)
    this.controller = controller;
    this.state = {
      'a1': {name: 'rook', color: 'white', symbol: '\u2656'},
      'b1': {name: 'knight', color: 'white', symbol: '\u2658'},
      'c1': {name: 'bishop', color: 'white', symbol: '\u2657'},
      'd1': {name: 'queen', color: 'white', symbol: '\u2655'},
      'e1': {name: 'king', color: 'white', symbol: '\u2654'},
      'f1': {name: 'bishop', color: 'white', symbol: '\u2657'},
      'g1': {name: 'knight', color: 'white', symbol: '\u2658'},
      'h1': {name: 'rook', color: 'white', symbol: '\u2656'},

      'a2': {name: 'pawn', color: 'white', symbol: '\u2659'},
      'b2': {name: 'pawn', color: 'white', symbol: '\u2659'},
      'c2': {name: 'pawn', color: 'white', symbol: '\u2659'},
      'd2': {name: 'pawn', color: 'white', symbol: '\u2659'},
      'e2': {name: 'pawn', color: 'white', symbol: '\u2659'},
      'f2': {name: 'pawn', color: 'white', symbol: '\u2659'},
      'g2': {name: 'pawn', color: 'white', symbol: '\u2659'},
      'h2': {name: 'pawn', color: 'white', symbol: '\u2659'},

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


      'a7': {name: 'pawn', color: 'black', symbol: '\u265F'},
      'b7': {name: 'pawn', color: 'black', symbol: '\u265F'},
      'c7': {name: 'pawn', color: 'black', symbol: '\u265F'},
      'd7': {name: 'pawn', color: 'black', symbol: '\u265F'},
      'e7': {name: 'pawn', color: 'black', symbol: '\u265F'},
      'f7': {name: 'pawn', color: 'black', symbol: '\u265F'},
      'g7': {name: 'pawn', color: 'black', symbol: '\u265F'},
      'h7': {name: 'pawn', color: 'black', symbol: '\u265F'},

      'a8': {name: 'rook', color: 'black', symbol: '\u265C'},
      'b8': {name: 'knight', color: 'black', symbol: '\u265E'},
      'c8': {name: 'bishop', color: 'black', symbol: '\u265D'},
      'd8': {name: 'queen', color: 'black', symbol: '\u265B'},
      'e8': {name: 'king', color: 'black', symbol: '\u265A'},
      'f8': {name: 'bishop', color: 'black', symbol: '\u265D'},
      'g8': {name: 'knight', color: 'black', symbol: '\u265E'},
      'h8': {name: 'rook', color: 'black', symbol: '\u265C'},
    };
  }

  draw(n, m) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const td = document.getElementById('r'+ i + 'c' +j)
        const position = String.fromCharCode('a'.charCodeAt(0) + j - 1) + i
        td.className = (i%2 === j%2 ? "white" : "grey")
        td.style.width = td.style.height = '1.3em'
        td.style.fontSize = '3em'
        td.textContent = this.state[position].symbol
      }
      const tr = document.getElementById('r'+ i)
      tr.style.display = 'flex'
    }
  }


}
