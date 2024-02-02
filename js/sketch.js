/*
When in doubt, check the reference: 
https://p5js.org/reference/

It'll tell you how every built-in function in P5 works, with examples!
*/

//preload does what it sounds like! runs before everything and keeps it in memory. good for images/sounds/etc
function preload() {

}

//setup runs once, when the page loads. this is good for initially setting things like variables 
function setup() {
  // put setup code here
  // in p5, you always need a canvas! Make these parameters whatever you want your game size to be.
  
  createCanvas(800, 800)
  
}

function draw() {
  // put drawing code here
  //an empty canvas isn't much to look at, so lets make a background
  background(125); // this is the colour code for the background. can also be 3 numbers for rgb
    
  //lets draw a shape  
  rectMode(CENTER); //change rectangle drawing mode to draw the square from it's centrepoints 
  fill(50,50,50) //set the colour before drawing the shape 
  rect(400, 400, 100, 100) //these 4 numbers are parameters. in order: x position, y position, width, height. try changing them and see!
            
}