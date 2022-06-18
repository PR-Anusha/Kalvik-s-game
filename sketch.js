var a1 , a2 , a3 , a4 , a5 , a6 , a7 , a8 , a9 , a10 , a11 , a12 , a13 , a14 , a15 , a16 , a17 , a18 , bgImg , cakeImg ,cake , doraemon , doraemonImg ;
var score = 0;
var gamestate = "play";
var obstaclesGroup;
var gameOver , gameOverImg , resart , resartImg , bomb , bombImg;

function preload(){
a1 = loadImage("/assets/1.png")
a2 = loadImage("/assets/2.png")
a3 = loadImage("/assets/3.png")
a4 = loadImage("/assets/4.png")
a5 = loadImage("/assets/5.png")
a6 = loadImage("/assets/6.png")
a7 = loadImage("/assets/7.png")
a8 = loadImage("/assets/8.png")
a9 = loadImage("/assets/9.png")
a10 = loadImage("/assets/10.png")
a11 = loadImage("/assets/11.png")
a12 = loadImage("/assets/12.png")
a13 = loadImage("/assets/13.png")
a14 = loadImage("/assets/14.png")
a15 = loadImage("/assets/15.png")
a16 = loadImage("/assets/16.png")
a17 = loadImage("/assets/17.png")
a18 = loadImage("/assets/18.png")
bombImg = loadImage("/assets/Bomb.png")
gameOverImg = loadImage("/assets/gameover.png")
resartImg = loadImage("/assets/restart.png")

bgImg = loadImage("/assets/bg.jpg")
cakeImg = loadImage("/assets/cake.png")
doraemonImg = loadImage("/assets/doraemon.png")
}

function setup() {
  createCanvas(500 , 600)

  obstaclesGroup = new Group();
 



  doraemon = createSprite(220,500, 300 ,560)
  doraemon.x = World.mouseX;
  doraemon.addImage("doraemon",doraemonImg);
  doraemon.setCollider('rectangle',0,0,300,560)
  doraemon.scale = 0.3;
   
  gameOver = createSprite(250,300,80,60)
  gameOver.addImage(gameOverImg)

  resart = createSprite(300,350,80,60)
  resart.addImage(resartImg)

  bomb = createSprite(300,300,10,10)
  bomb.addImage(bombImg)
  bomb.scale = 0.3
  // cake = createSprite(220,10, 300 ,560)
  // cake.addImage("cake",cakeImg);
  // cake.scale = 0.1;

}

function draw() {
  background(bgImg)
  textSize(20);
  fill("black")
  text("Score: "+ score,30,50);
  
  doraemon.debug = true; 
  
  if(gamestate === "play"){

    function movedoraemon(){
      if(keyDown("right_arrow"))
      {
          doraemon.x += 10
      }
  
      if(keyDown("left_arrow"))
      {
          doraemon.x -= 10
      }
    }

    gameOver.visible = false;
    resart.visible = false;

    movedoraemon();
    spawnObstacles();
  
  }

  // if(ObjectsGroup.isTouching(doraemon))
  //   {

  //    gamestate = "end";
     
  //   }


  if(gamestate === "end"){
    gameOver.visible = true;
    resart.visible = true;
    doraemon.velocityY = 0;
  }  

  // if(mousePressedOver(resart)){

  // }
 
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var object = createSprite(250,299,20,10);
    object.scale = 0.1;
    object.lifetime = 300;
    object.setCollider('circle',0,0,250)

    object.y = Math.round(random(6,1));
    object.x = Math.round(random(10,550));
    object.addImage("cake" , cakeImg)
    object.velocityY = 25;

    // object.setCollider('circle',0,0,45)
     object.debug = true

    //  object.setVelocityX(15)

    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: object.addImage(cakeImg);
               break;
      case 2: object.addImage(bombImg);
               break; 
      default: break;
    } 

    obstaclesGroup.add(object);

  }

}
   

