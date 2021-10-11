var deku,dabi,crystal,ua;
var dekuImg,dabiImg,crystalImg,uaImg;
var crystalG,dabiG;
var treasureCollection = 0;

var PLAY=1;
var END=0;
var gameState=1;

var song

function preload(){

    dekuImg = loadAnimation("deku1.jpg");

    dabiImg = loadImage("dabi.png");

    crystalImg = loadImage("Dofa.png");

    uaImg = loadImage("ua.png");

    song = loadSound("man.mp3");

}

function setup() {
    createCanvas(600,600);

    song.play();

    //ua = createSprite(300,300);
    //ua.addImage("ua",uaImg);
   //ua.scale = 0.5

  deku = createSprite(540,510);
  deku.addAnimation("deku",dekuImg);  
  deku.scale = 0.25;


  crystalG=new Group();

  dabiG=new Group();
 
}

function draw() {
background(uaImg);
createEdgeSprites();

if(gameState===PLAY){
  background(uaImg);
  deku.x = World.mouseX;

  edges= createEdgeSprites();
  deku.collide(edges);

  

  }
  
  createDabi();
  createDofa();

  if (crystalG.isTouching(deku)) {
    crystalG.destroyEach();
    treasureCollection=treasureCollection+50;
  }else{
    if(dabiG.isTouching(deku)) {
      gameState=END;

      crystalG.destroyEach();
        dabiG.destroyEach();

        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);

    }

    }
    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: "+ treasureCollection,150,30);
 
}

function createDofa() {
  if (World.frameCount % 200 == 0) {
  var crystal = createSprite(Math.round(random(50, width-50),40, 10, 10));
  crystal.addImage(crystalImg);
  crystal.scale=0.12;
  crystal.velocityY = 3;
  crystal.lifetime = 200;
  crystalG.add(crystal);
  }
}

function createDabi(){
  if (World.frameCount % 300 == 0) {
  var dabi = createSprite(Math.round(random(50, width-50),40, 10, 10));
  dabi.addImage(dabiImg);
  dabi.scale=0.12;
  dabi.velocityY = 3;
  dabi.lifetime = 200;
  dabiG.add(dabi);
  }
}