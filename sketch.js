let img;
let battlecry;

let xPos = 25;
let direction = 1;


function preLoad(){
  img =loadImage("/images/charmander.png");
  battlecry = loadSound("/sounds/battlecry.mp3")
}


function setup() {
  createCanvas(500, 500);
  background(0);
imageMode(CENTER);
  
}



function draw() {
  background(0);
  fill(0, 255, 0);
  ellipse(xPos, 250, 50, 50);

img(img, xPos, 250, 50, 50)
 
  xPos += 3 * direction;
  if (xPos > 475 || xPos < 25) {
    direction *= -1;
  }
}
