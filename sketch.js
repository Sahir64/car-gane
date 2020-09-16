var database;
var position;
var backgroundImg;
var form, player, game;
var gameState, playerCount;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game()
  game.getState()
  game.Start()
}

function draw(){
  background("white");
  
   
    drawSprites();
  
}
