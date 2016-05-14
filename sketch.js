var foodSprites;
var player;
var ghost;
var ghostImg;

// function preload() {
//   ghostImg = loadImage('ghost.png'); //<-- preload the image
// }

function setup() {
  createCanvas(400, 400);
  player = createSprite(width/2, height - 50, 40, 40);
  ghost = createSprite(width/2, height/2);
  player.shapeColor = color(0,0,255);

  foodSprites = new Group();
  var timer = setInterval(createFood, 1000);
  function createFood(){
    for(var i = 0;i<30;i++){
    var food = createSprite(random(0,width), random(-height,0), 20, 20);
    food.shapeColor = color(0,0,255);
    food.setVelocity(0,6);
    food.life = 300;
    foodSprites.add(food);
    ghost.addImage(ghostImg);
    food.draw = function() {
  //leaf
    fill("LawnGreen");
    ellipse(-8,8,20,20);
    ellipse(8,-8,20,20);
    ellipse(8,8,20,20);
    ellipse(-8,-8,20,20);
  }
  }
}
}

function eat(spriteA, spriteB) {  //<-- spriteA is the player, spriteB is the food
  spriteB.remove(); //<-- this deletes the food
}


function draw() {
  background(50);
  drawSprites();
  player.overlap(foodSprites, eat);
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW){
      player.setVelocity(-5,0); //<-- move left by subtracting from x
    }
    if(keyCode == RIGHT_ARROW){
      player.setVelocity(5,0); //<-- move right by adding to x
    }
  } else{
    player.setVelocity(0,0); //<-- if no key is pressed stop moving
  }

}
