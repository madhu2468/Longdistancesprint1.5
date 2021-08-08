const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;


var runners;
var runner1;
var runner2;
var runner3;
var runner4;
var track;
var playerCount;
var allPlayers;
var form;
var game;
var player;
var engine;
var world;
var gameState = 0;



function setup() {
createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();
 
  game = new Game();
  game.getState();
  game.start();
 
}

function draw() {
 
  Engine.update(engine);

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
}

}