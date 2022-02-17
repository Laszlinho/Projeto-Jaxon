var rua, ruaImg;
var jaxon, jaxonImg;
var esquerda;
var direita;

function preload(){
  //imagens pré-carregadas
  ruaImg = loadImage("path.png");

  jaxonImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  rua = createSprite(200, 200);
  rua.addImage(ruaImg);

  jaxon = createSprite(180, 340, 30, 30);
  jaxon.addAnimation("imagemJaxon", jaxonImg);
  jaxon.scale = 0.08;

  esquerda = createSprite(0, 0, 100, 800);
  esquerda.visible = false;

  direita = createSprite (410, 0, 100, 800);
  direita.visible = false;
}

function draw() {
  background(0);

  rua.velocityY = 4;

  jaxon.x = World.mouseX;
  jaxon.collide(esquerda);
  jaxon.collide(direita);
  if (rua.y > 400){
    rua.y = height/2;
  }

  drawSprites();
}
