games = ['chess', 'checkers', 'tic_tac_toe', 'connect_four','8-Queens','sudoku']

function startGame(name) {
  const menu = document.getElementById('menu')
  menu.remove()
  switch (name){
    case games[0]: game = new chess();break;
    case games[1]: game = new checkers();break;
    case games[2]: game = new tic_tac_toe();break;
    case games[3]: game = new connect_four();break;
    case games[4]: game = new Queens();break;
    case games[5]: game = new sudoku();break;
  }
  game.init()
  const ex = document.getElementById('exit')
  ex.addEventListener('click', () => {mainMenu();ex.remove()})
}

function mainMenuInit(){
  const menu = document.createElement('div')
  menu.id = 'menu'
  for (let i = 0; i < games.length; i++) {
    const g = document.createElement('button')
    g.name = games[i]
    g.textContent = games[i]
    g.addEventListener('click', () => {startGame(g.name)})
    menu.appendChild(g)
  }
  document.body.appendChild(menu)
}
function mainMenu(){
  const board = document.getElementById('board')
  if(board) board.remove()
  mainMenuInit()
}

mainMenu()
