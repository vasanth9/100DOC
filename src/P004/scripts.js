const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const scl = 20;
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 800);
let x=0;
function animate() {
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  ctx.fillStyle = "black";
  ctx.fillRect(x,0,10,10);
  x=(x+1)%CANVAS_WIDTH;
  requestAnimationFrame(animate);
}
animate();
