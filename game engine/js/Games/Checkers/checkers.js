class checkers extends gameEngine{
  CheckersDrawer
  CheckersController
  state
  constructor() {
    super();
    this.initial_state(8, 8)
    this.CheckersController = new checkers_controller(this.CheckersDrawer, this.state)
    this.CheckersDrawer = new checkers_drawer(this.CheckersController, this.state)
  }
  initial_state(n, m){
    this.state = {}
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const position = i + '' + j
        if(i <= 3)
          this.state[position] =  i%2 !== j%2 ? {player: 1, color: 'red'}:{player: -1}
        else if(n-i+1 <= 3)
          this.state[position] =  i%2 !== j%2 ? {player: 2, color: 'cyan'}:{player: -1}
        else
          this.state[position] =  {player: -1}
      }
    }
  }

  init(){
    this.CheckersDrawer.draw(8, 8)
  }

}
