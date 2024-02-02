function setup() {
  // put setup code here
  // in p5, you always need a canvas! Make these parameters whatever you want your game size to be.
  createCanvas(600, 600)
}

function draw() {
  // put drawing code here
    //an empty canvas isn't much to look at, so lets make a background
    background(600, 600);
    //in p5, you set a colour before you draw your shapes. think of it like setting an active colour.
    fill(219, 77, 205);
    //let's draw a circle in the centre! in order, these numbers are x position, y position, width and height
    ellipse(300, 300, 150, 100);
    //now lets change the colour for our next shape!
    fill(66, 135, 245);
    rect(100, 100, 60, 30);
}