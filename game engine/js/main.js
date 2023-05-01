games = ['chess', 'checkers', 'tic tac toe', 'connect four','8 Queens','sudoku']

function startGame(name) {
  const body = document.getElementById('body')
  body.style.right = '99%'
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
  const body = document.createElement('section')
  body.id = 'body'
  body.innerHTML =
    "<div class='curtain'>" +
    "  <div class='curtain__wrapper'>" +
    "    <input type='checkbox' checked id='active'>" +
    "    <div class='curtain__panel curtain__panel--left'>" +
    "      Let's Start" +
    "    </div> "+

    "    <div class='curtain__content'>" +
    "    </div> " +

    "    <div class='curtain__panel curtain__panel--right'>" +
    "      Click to Play!" +
    "    </div>" +

    "  </div>" +
    "</div>"
  document.body.appendChild(body)

  const menu = document.createElement('div')
  menu.id = 'menu'
  for (let i = 0; i < games.length; i++) {
    const g = document.createElement('button')
    g.name = games[i]
    g.textContent = games[i]
    g.addEventListener('click', () => {startGame(g.name)})
    menu.appendChild(g)
  }
  const content = document.querySelector('.curtain__content');
  content.appendChild(menu)
}
function mainMenu(){
  const board = document.getElementById('board')
  if(board) {
    board.remove()
    const body = document.getElementById('body')
    body.style.right = '0'
  }
  else mainMenuInit()
}

mainMenu()
