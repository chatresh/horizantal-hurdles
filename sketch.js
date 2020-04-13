var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var runner1Img,runner2Img,runner3Img,runner4Img;
var runners, runner1,runner2, runner3, runner4;
var groundimg , trackimg;
function preload(){
  runner1Img = loadImage("images/runner1.jpg");
  runner2Img = loadImage("images/runner2.jpg");
  runner3Img = loadImage("images/runner3.jpg");
  runner4Img = loadImage("images/runner4.jpg");
  groundimg= loadImage("images/ground.png");
  hurdleImg  = loadImage("images/hurdle.jpg")
  trackimg = loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
