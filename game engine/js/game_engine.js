class gameEngine{
  state
  constructor(state) {
    this.state = state
    this.game()
  }

  async game(){
    console.log("Game started")
    console.log(this.state)

    while(true){
      this.drawer(this.state);
      let p = new Promise((resolve)=>{
        setTimeout(()=>{
          let input = prompt("Enter input or click cancel to exit");
          resolve(input);
        },2000)
      });
      let input = await p;
      console.log(input);
      if(!input) break;
      this.controller(this.state,input);
      this.drawer(this.state)
    }
  }
  drawer(state){}
  controller(state, input){}
}