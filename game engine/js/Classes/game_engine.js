class gameEngine{
  state
  constructor(state) {
    this.state = state
    this.game()
  }

  game(){
    console.log("Game started")
    console.log(this.state)

    this.drawer(this.state)
    const input_button = document.createElement('button')
    input_button.id = 'input';input_button.textContent = "Give Input"
    input_button.addEventListener('click',() => {
      const input = prompt("Enter input")
      if(input) this.controller(this.state, input)
      this.drawer(this.state)
    });
    document.body.appendChild(input_button)
  }
  drawer(state){}
  controller(state, input){}
}
