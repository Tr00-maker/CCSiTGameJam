/*
When in doubt, check the reference: 
https://p5js.org/reference/

It'll tell you how every built-in function in P5 works, with examples!
*/

//Test commit by Mitch

//preload does what it sounds like! runs before everything and keeps it in memory. good for images/sounds/etc
function preload() {

}
// Initialize player variables
let locationX, locationY;
let player;
let movementSpeed;

// Initialize enemy variables
let enemy;
let allEnemies;

class Player{
  constructor(locationX, locationY, height, width, health){
    // keep store of the players X and Y location
    this.locationX = locationX
    this.locationY = locationY
    // keep store of the players height and width (makes collision easier)
    this.height = height;
    this.width = width;
    this.health = health;
  }
  
}

class Enemy{
  
  constructor(locationArray, defaultHealth){
    this.locationX = locationArray[0]
    this.locationY = locationArray[1]
    this.health = defaultHealth;
  }
}


//setup runs once, when the page loads. this is good for initially setting things like variables 
function setup() {
  // put setup code here
  // in p5, you always need a canvas! Make these parameters whatever you want your game size to be.
  createCanvas(800, 800)

  // set player default location at center of canvas
  locationX = 400; 
  locationY = 400;

  // set up array storing location data for enemies, each value in this array will be an array of 2 objects (x, y)
  allEnemies = [];

  // create player object at locationX, locationY (default values), give player height of 25,25, give player 100 health to start
  player = new Player(locationX, locationY, 25, 25, 100);
  movementSpeed = 2.5;

}

function draw() {
  
  background(125);

  // Player code

  // Movement handling

  // if the up arrow is pressed and the down arrow is not, move player up
  // also check if player is going out of bounds (applies to all sides up down left right)
  if(keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW) && (player.locationY - player.height/2)>0 ){ // check players Y - their height/2 is > 0 so they dont go out of bounds
    player.locationY-= movementSpeed;
  }

  // if the down arrow is pressed and the up arrow is not, move player down
  if(keyIsDown(DOWN_ARROW) && !keyIsDown(UP_ARROW) && (player.locationY + player.height/2)<800 ){// 800 bc canvas size
    player.locationY+=movementSpeed;
  }

  // if the right arrow is pressed and the down arrow is not, move player right
  if(keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && (player.locationX + player.width/2)<800){
    player.locationX+=movementSpeed;
  }

  // if the left arrow is pressed and the down arrow is not, move player left
  if(keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && (player.locationX - player.width/2)>0 ){
    player.locationX-=movementSpeed;
  }

  // draw player
  rectMode(CENTER);
  fill(0, 255, 255);
  rect(player.locationX, player.locationY, player.height, player.width);

  // Enemy code (currently just spawns the enemies at their random location and assigns a base health amount of 100)

  // define the amount of enemies (will be controlled by a variable later)
  let enemyCount = 2;

  // if there are not as many enemies as enemyCount variable, initialize enemies until at enemyCount
  if(allEnemies.length < enemyCount){
    for (let i = 0; i < enemyCount; i++){
      // range of the enemies height and width / 2 so enemies dont spawn out of bounds
      let randomX = Math.random() * (25, canvas.width - 25) // using 50 bc it works as a base value, not sure why
      let randomY = Math.random() * (25, canvas.height - 25)
      // add a new enemy to the array by passing it the randomX and randomY, default health
      allEnemies.push(enemy = new Enemy([randomX, randomY], 100))
    }
  }

  // for all the enemies in the array, draw them
  for (let i = 0; i < allEnemies.length; i++){
    // set rectMode, fill colour, then draw rectangle accessing the enemies locationX and locationY
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(allEnemies[i].locationX, allEnemies[i].locationY, 25, 25);
  }
}
