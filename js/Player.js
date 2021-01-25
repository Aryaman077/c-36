class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  /*update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }*/

update(){

  var playerIndex = "Players/player" + this.index;
  database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance


  })
}

getPlayerInfo(){

  var playerInforef = database.ref("players");
  playerInforef.on("value",(data)=> {
  
    allPlayers = data.val();
  } )
}

}



