class Form {
  constructor() {
   this.input = createInput("Name");
   this.button = createButton('Play');
   this.title = createElement('h2')
   this.greeting = createElement('h3');
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    }


  display(){
   // var title = createElement('h2')
    this.title.html("Car Racing Game");
    this.title.position(130, 0);
    
   // var input = createInput("Name");
  //var button = createButton('Play');
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(() => {
      //input.hide();
      //button.hide();

      var name = input.value();
      
      playerCount+=1;
      playerIndex = playerCount;
      player.update()
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
