const canvas = document.getElementById("parallaxCanvas");
const ctx = canvas.getContext('2d');

const gameSpeedInput = document.getElementById('gameSpeed');


const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = gameSpeedInput.value;

gameSpeedInput.addEventListener('change',(e)=>{
    gameSpeed = e.target.value;
    document.getElementById('speed').innerHTML=gameSpeed;
})

const backgroundlayer1 = new Image();
backgroundlayer1.src = "./assets/layer-1.png";
const backgroundlayer2 = new Image();
backgroundlayer2.src = "./assets/layer-2.png";
const backgroundlayer3 = new Image();
backgroundlayer3.src = "./assets/layer-3.png";
const backgroundlayer4 = new Image();
backgroundlayer4.src = "./assets/layer-4.png";
const backgroundlayer5 = new Image();
backgroundlayer5.src = "./assets/layer-5.png";

window.addEventListener('load', ()=>{
class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    this.speed = gameSpeed * this.speedModifier;

    if (this.x < -2400) this.x = 0;
    this.x -= this.speed;
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

const layer1 = new Layer(backgroundlayer1, 0.2);
const layer2 = new Layer(backgroundlayer2, 0.4);
const layer3 = new Layer(backgroundlayer3, 0.6);
const layer4 = new Layer(backgroundlayer4, 0.8);
const layer5 = new Layer(backgroundlayer5, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.map((object) => {
    object.update();
    object.draw();
  });
  requestAnimationFrame(animate);
}
animate();
})

