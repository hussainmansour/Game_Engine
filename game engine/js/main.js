games = ['chess', 'checkers', 'tic tac toe', 'connect four','8 Queens','sudoku']
gamesIcons = ['chess', 'dot-circle', 'times', 'dice-six','chess-queen','sort-numeric-up-alt']

  // <i className = "fa-solid fa-chess-queen"> </i>
function startGame(name) {
  switch (name){
    case games[0]: new chess();break;
    case games[1]: new checkers();break;
    case games[2]: new tic_tac_toe();break;
    case games[3]: new connect_four();break;
    case games[4]: new Queens();break;
    case games[5]: new sudoku();break;
  }
}

function mainMenuInit(){
  //   draw in new window
  const newWindow = window.open('', '')
  const windowDoc = newWindow.document
  windowDoc.write(`
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../tile.png">
        <title>Game Main Menu</title>
      </head>
      <body>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html,
body{
  width: 100%;height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Righteous', 'Chivo Mono', monospace;
}

i.fas{display: block;transform: translateY(-15px)}

#menu{
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px 10px;
  align-content: center;
}

#menu button{
  border: none;
  border-radius: 15px;
  font-size: 2em;
  color: #333;
  cursor:pointer;
  font-family: 'Chivo Mono', sans-serif;
  box-shadow: 0 0.3em #2e2e2e;
  background: #ededed;
  box-sizing: border-box;
  text-transform: capitalize;
  font-weight: bolder;
  transition: all .1s ease-in-out;
  width: 30%;
  height: 5em;
  margin: 10px 0;
}

#menu button:active{
    box-shadow: 0 0.1em #2e482e;
    transform: translateY(10px);
}

/*#menu:has(> button:active){*/
/*    gap: 40px 10px;*/
/*}*/
/* ----------------------------- Curtain Effect -------------------------- */
section{
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  right: 0;
  transition: 1s ease-in-out;
}

.curtain {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.curtain__wrapper {
  width: 100%;
  height: 100%;
}

input[type=checkbox] {
  position: absolute;
  cursor: pointer;
  width: 99%;
  height: 99%;
  border-radius: 50%;
  z-index: 100;
  opacity: 0;
}

input:not(:checked){
  width: 5%;
}
input:checked ~div.curtain__panel--left{
     transform: translateX(0);
}
input:checked ~div.curtain__panel--right{
     transform: translateX(0);
}

.curtain__panel {
  display: flex;
  align-items: center;
  background: #4ac96b;
  box-sizing: border-box;
  color: #fff;
  float: left;
  position: relative;
  width: 50%;
  height: 100vh;
  transition: all 1s ease-out;
  z-index: 2;
  font-size: 2.5em;
}

.curtain__panel--left {
   justify-content: flex-end;
   padding-right: 1em;
   transform: translateX(-90%);
}

.curtain__panel--right {
   padding-left: 1em;
   justify-content: flex-start;
   transform: translateX(90%);
}

/* -------------------------- Behind the curtains ------------------------- */
.curtain__content {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1108%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(62%2c 153%2c 211%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c387.607C71.987%2c391.811%2c135.397%2c343.792%2c193.463%2c301.035C248.651%2c260.397%2c302.86%2c213.271%2c324.892%2c148.373C346.064%2c86.01%2c319.691%2c20.57%2c310.834%2c-44.691C301.896%2c-110.552%2c313.441%2c-183.78%2c272.69%2c-236.287C231.417%2c-289.467%2c161.921%2c-317.366%2c94.84%2c-322.996C33.101%2c-328.178%2c-19.172%2c-285.09%2c-78.023%2c-265.722C-134.47%2c-247.145%2c-198.614%2c-249.771%2c-244.047%2c-211.468C-292.756%2c-170.403%2c-319.15%2c-109.76%2c-335.92%2c-48.298C-354.361%2c19.285%2c-374.894%2c94.207%2c-344.701%2c157.42C-314.597%2c220.447%2c-237.553%2c240.468%2c-179.467%2c279.257C-120.153%2c318.866%2c-71.203%2c383.449%2c0%2c387.607' fill='%23246d9c'%3e%3c/path%3e%3cpath d='M1440 1104.48C1540.545 1087.647 1572.794 955.152 1657.391 898.2660000000001 1739.251 843.221 1871.524 864.846 1922.216 780.221 1972.4270000000001 696.399 1939.561 583.084 1899.601 493.919 1864.498 415.592 1764.239 391.79200000000003 1716.247 320.63 1657.7930000000001 233.95499999999998 1688.583 81.36399999999998 1592.926 39.18299999999999 1501.26-1.2380000000000564 1411.565 108.84100000000001 1318.174 145.09699999999998 1234.413 177.615 1138.522 180.67200000000003 1072.233 241.32799999999997 1002.202 305.408 939.383 393.661 942.856 488.521 946.268 581.72 1050.591 635.312 1089.754 719.952 1128.621 803.952 1107.863 911.409 1170.189 979.835 1238.28 1054.591 1340.27 1121.1770000000001 1440 1104.48' fill='%2381bce2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1108'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  box-sizing: border-box;
  text-align: center;
}

.curtain__content button{
  border: 1px solid #333;
  background: #333;
  font-size: 2em;
  color: #FFF;
  width: 30%;
  height: 5em;
  margin: 1px;
}

        </style>
        <section>
        <div class='curtain'>
            <div class='curtain__wrapper'>
                <input type='checkbox' checked id='active'>
                <div class='curtain__panel curtain__panel--left'>Let's Start</div>
                <div class='curtain__content'></div>
                <div class='curtain__panel curtain__panel--right'>Click to Play!</div>
            </div>
        </div>
        </section>
<!--        <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>-->
      </body>
    </html>
  `);
  const menu = document.createElement('div');menu.id = 'menu'
  for (let i = 0; i < games.length; i++) {
    const g = document.createElement('button')
    g.name = games[i]
    g.innerHTML = '<i class="fas fa-' + gamesIcons[i] + '"></i>' + games[i]
    g.addEventListener('click', () => {startGame(g.name)})
    menu.appendChild(g)
  }
  const content = windowDoc.querySelector('.curtain__content');
  content.appendChild(menu)
}

mainMenuInit()
