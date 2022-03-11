var bow, arrow,redB, pinkB, greenB, blueB,birdImage,bird;
var bowImage, arrowImage, greenbImage, redbImage, pinkbImage, bluebImage, backgroundImage;


function preload() {

    // backgroundImage = loadImage("background0.png");
    // arrowImage = loadImage("arrow0.png");
    // bowImage = loadImage("bow0.png");
    // redbImage = loadImage("red_balloon0.png");
    // greenbImage = loadImage("green_balloon0.png");
    // pinkbImage = loadImage("pink_balloon0.png");
    // bluebImage = loadImage("blue_balloon0.png");
    birdImage = loadAnimation("images/bird1.png","images/bird2.png","images/bird3.png")
}

function setup() {
    createCanvas(1900, 900);
    bird = createSprite(190, 270, 10, 100);
    bird.addAnimation("birdfly", birdImage);
    bird.mirrorX(-1)    //for flipping the image
}
function draw() {
  background("black")
   drawSprites()
}