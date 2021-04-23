var ground,moon,moon1,moon2,moon3,moon4,moon5;
var moonImg,backImg,mcImg,background1;
var trex,i=15,j=0;
var wall1,wall2,wall3,roof;
var gameState=0,s;
var highScore=0, score=0;
var explosion;

function preload(){
  moonImg = loadImage("images/bomb.png");
  backImg = loadImage("images/back1.jpg");
  mcImg = loadImage("images/spaceship.jpg");
  background1 = loadImage("images/background.jpg"); 
  explosion = loadImage("images/explosion.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  //moon = createSprite(1000, 100, 50, 50);
  //moon.addImage("moon",moonImg);
  roof = createSprite(displayWidth/2,displayHeight/9-displayHeight/10,displayWidth,10);
  roof.visible = true;
  ground = createSprite(displayWidth/2,displayHeight-displayHeight/60,displayWidth,10);  
  ground.visible = true;
  trex = createSprite(displayWidth/3,displayHeight/2,25,55);
  trex.addImage(mcImg);
  trex.scale = 0.2;
  //trex.debug = true;
  trex.setCollider('circle',0,0,150);
  wall1 = createSprite(10,400,10,800);
  wall1.visible = false;
  wall3 = createSprite(displayWidth/2,10,displayWidth,10);
  wall3.visible = false;
  wall2 = createSprite(displayWidth-10,displayHeight/2,10,displayHeight);
  wall2.visible = false;
  moon = createSprite(1200,0,0,0);  
  moon.visible = false;  
  moon1 = createSprite(0,0,0,0);  
  moon1.visible = false;
  moon2 = createSprite(200,0,0,0);  
  moon2.visible = false;
  moon3 = createSprite(400,0,0,0);  
  moon3.visible = false;
  moon4 = createSprite(800,0,0,0);  
  moon4.visible = false;
  moon5 = createSprite(0,200,0,0);  
  moon5.visible = false;
}

function draw() {
  background(background1)

  if(frameCount%2===0)
  {
    fill(random(0,255),random(0,255),random(0,255));
  }

  //pregame
  if (gameState===0)
  {
    trex.visible = true;
    trex.x=displayWidth/2-50;
    trex.y=displayHeight-200;

    textSize(50);
    text("Welcome to the Game", displayWidth/4,displayHeight/4);

    textSize(30);
    text("press space to start the Game", displayWidth/4+50,displayHeight/2);

    text("Highest Score: "+highScore, displayWidth-300,50);

    if (keyDown("space"))
    {
      gameState=1;
    }
  }

  console.log(gameState);

  //gameState=1
  if(gameState===1)
  {
    //score
    score++;
    textSize(30);    
    text("Score: "+score,displayWidth-300,50);

      if(keyDown("d") || keyDown(RIGHT_ARROW))
    {
      trex.x+=20;
    }

    if(keyDown("a") || keyDown(LEFT_ARROW))
    {
      trex.x-=20;
    }

    if(keyDown("w")|| keyDown(UP_ARROW))
    {
      trex.y-=20;
    }

    if(keyDown("s")|| keyDown(DOWN_ARROW))
    {
      trex.y+=20;
    }
    s = Math.round(random(1,2));
    //console.log(s);

    //horizontal moons
    if(frameCount%139===0)
    {
      i++;
      
      if(s===1)
      {
        moon = createSprite(0,random(0,displayHeight/4),10,10);
        moon.addImage(moonImg);
        moon.scale=0.25;
        moon.lifetime = 75; 
        moon.velocityX=i;
        //moon.debug = true;
        moon.setCollider('circle',0,0,200);
        
        moon2 = createSprite(0,random(displayHeight/4,displayHeight/2),10,10);
        moon2.addImage(moonImg);
        moon2.scale=0.25;
        moon2.lifetime = 75; 
        moon2.velocityX=i;  
       // moon2.debug = true;
        moon2.setCollider('circle',0,0,200);

        moon4 = createSprite(0,random(displayHeight/2,displayHeight),10,10);
        moon4.addImage(moonImg);
        moon4.scale=0.25;
        moon4.lifetime = 75; 
        moon4.velocityX=i;  
        //moon4.debug = true;
        moon4.setCollider('circle',0,0,200);
        
        //moon.velocityX+=20;
      }
      else
      {
        moon = createSprite(displayWidth+50,random(50,displayHeight/4),10,10);
        moon.addImage(moonImg);
        moon.scale=0.25;
        moon.lifetime = 75;
        moon.velocityX=-i;   
        //moon.debug = true;  
        moon.setCollider('circle',0,0,200);   

        moon2 = createSprite(displayWidth+50,random(displayHeight/4,displayHeight/2),10,10);
        moon2.addImage(moonImg);
        moon2.scale=0.25;
        moon2.lifetime = 75; 
        moon2.velocityX=-i;  
        //moon2.debug = true;
        moon2.setCollider('circle',0,0,200);

        moon4 = createSprite(displayWidth+50,random(displayHeight/2,displayHeight),10,10);
        moon4.addImage(moonImg);
        moon4.scale=0.25;
        moon4.lifetime = 75; 
        moon4.velocityX=-i; 
       //moon4.debug = true;
        moon4.setCollider('circle',0,0,200);
        //moon.velocityX-=20;
      }     
      
    }

    //vertical moons
    if(frameCount%200===0)
    {      
      
      if(s===1)
      {
        moon1 = createSprite(random(25,displayWidth/4),0,10,10);
        moon1.addImage(moonImg);
        moon1.scale=0.25;
        moon1.lifetime = 99; 
        moon1.velocityY=i;
        //moon1.debug = true; 
        moon1.setCollider('circle',0,0,200);

        moon3 = createSprite(random(displayWidth/4,displayWidth/2),0,10,10);
        moon3.addImage(moonImg);
        moon3.scale=0.25;
        moon3.lifetime = 99; 
        moon3.velocityY=i;
       // moon3.debug = true;
        moon3.setCollider('circle',0,0,200);

        moon5 = createSprite(random(displayWidth/2,displayWidth),0,10,10);
        moon5.addImage(moonImg);
        moon5.scale=0.25;
        moon5.lifetime = 99; 
        moon5.velocityY=i;
        //moon5.debug = true;
        moon5.setCollider('circle',0,0,200);
        //moon.velocityX+=20;
      }
      else
      {
        moon1 = createSprite(random(25,displayWidth/4),displayHeight+50,10,10);
        moon1.addImage(moonImg);
        moon1.scale=0.25;
        moon1.lifetime = 99; 
        moon1.velocityY=-i;
        //moon1.debug = true; 
        moon1.setCollider('circle',0,0,200);

        moon3 = createSprite(random(displayWidth/4,displayWidth/2),displayHeight+50,10,10);
        moon3.addImage(moonImg);
        moon3.scale=0.25;
        moon3.lifetime = 99; 
        moon3.velocityY=-i;
        //moon3.debug = true;
        moon3.setCollider('circle',0,0,200);

        moon5 = createSprite(random(displayWidth/2,displayWidth),displayHeight+50,10,10);
        moon5.addImage(moonImg);
        moon5.scale=0.25;
        moon5.lifetime = 99; 
        moon5.velocityY=-i;
       // moon5.debug = true;
       moon5.setCollider('circle',0,0,200);
        //moon.velocityX-=20;
      }     
      
    }    

    trex.collide(wall1);
    trex.collide(wall2);
    trex.collide(roof);
    trex.collide(ground);
    
  }

  if(trex.isTouching(moon))
  {
    gameState=2;
  }    

  if(trex.isTouching(moon1))
  {
    gameState=2;
  }

  if(trex.isTouching(moon2))
  {
    gameState=2;
  }

  if(trex.isTouching(moon3))
  {
    gameState=2;
  }

  if(trex.isTouching(moon4))
  {
    gameState=2;
  }

  if(trex.isTouching(moon5))
  {
    gameState=2;
  }

  //endgame
  if(gameState===2)
  {
    textSize(50);
    text("GAME OVER",displayWidth/3+50,displayHeight/4+50);
    textSize(30);
    text("Press r to restart",displayWidth/3+75,displayHeight/2);
    text("Score: "+score,displayWidth/3+110,displayHeight/2+100);
    trex.scale = 1.5;
    trex.addImage(explosion);

    if(score>highScore)
    {
      highScore = score;
    }
  }

  if(gameState===2 && highScore===score)
  {    
    text("Congratulations! you have defeated the highest score", displayWidth/4-50,displayHeight-200);
  }

  if (gameState===2)
  {
    //trex.visible=false;

    if(keyDown("r"))
    {
      gameState=0;
      score = 0;
      i=15;
      trex.addImage(mcImg);
      trex.scale = 0.2;
    }
  }
  
  drawSprites();
}