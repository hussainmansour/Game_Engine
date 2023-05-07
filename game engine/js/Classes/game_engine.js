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
      if(input == null) break;
      this.controller(this.state,input);
      this.drawer(this.state)
    }


    // const input_button = document.createElement('button')
    // input_button.id = 'input';input_button.textContent = "Give Input"
    // input_button.addEventListener('click',() => {
    //   const input = prompt("Enter input")
    //   if(input) this.controller(this.state, input)
    //   this.drawer(this.state)
    // });
    // document.body.appendChild(input_button)
  }
  drawer(state){}
  controller(state, input){}
}
