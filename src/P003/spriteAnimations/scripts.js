const canvas = document.getElementById("spriteCanvas");
const selectedPlayer = document.getElementById("animations");
let animationType = "idle";
selectedPlayer.addEventListener("click", (e) => {
  animationType = e.target.value;
});

let ctx = canvas.getContext("2d");

let playerImage = new Image();
playerImage.src = "shadow_dog.png";

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteWidth = 575;
const spriteHeight = 523;
const staggerFrames = 5;
let spriteAnimations = [];
let getFrame = 0;
const animationStates = [
  { name: "idle", frames: 7 },
  { name: "jump", frames: 7 },
  { name: "fall", frames: 7 },
  { name: "run", frames: 9 },
  { name: "dizzy", frames: 11 },
  { name: "sit", frames: 5 },
  { name: "roll", frames: 7 },
  { name: "bite", frames: 7 },
  { name: "ko", frames: 12 },
  { name: "gethit", frames: 4 },
];
animationStates.forEach((state, index) => {
  const frame = {
    loc: [],
  };
  for (let i = 0; i < state.frames; i++) {
    const positionX = i * spriteWidth;
    const positionY = index * spriteHeight;
    frame.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frame;
});
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  const position =
    Math.floor(getFrame / staggerFrames) %
    spriteAnimations[animationType].loc.length;
  let frameX = position * spriteWidth;
  let frameY = spriteAnimations[animationType].loc[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  getFrame++;
  requestAnimationFrame(animate);
}

animate();
// drawImage(image, dx, dy);
// drawImage(image, dx, dy, dWidth, dHeight);
// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
