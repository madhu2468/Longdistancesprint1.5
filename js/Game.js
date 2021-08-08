class Game {
    constructor(){
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      runner1 = createSprite(100,200);
  //    runner1.addImage("car1",car1_img);
      runner2 = createSprite(300,200);
    //  runner2.addImage("car2",car2_img);
      runner3 = createSprite(500,200);
  //    runner3.addImage("car3",car3_img);
      runner4 = createSprite(700,200);
  //    runner4.addImage("car4",car4_img);
      runners = [runner1,runner2,runner3,runner4];
    }
  
    play(){
      form.hide();
     
      Player.getPlayerInfo();
     
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
       
        //var display_position = 100;
       
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          runners[index-1].x = x;
          runners[index-1].y = y;
  
          if (index === player.index){
            strokeWeight(10);
           fill ("green");
           ellipse(x,y,50)
           runners[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = runners[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=20
        player.update();
      }
  
    //  if(player.distance > 3860){
      //  gameState = 2;
      //}
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }