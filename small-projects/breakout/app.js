// GLOBAL VARS:
// Canvas:
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Buttons and animations:
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');

// Ball variables:
const ball = {
  x: canvas.width/2,
  y: canvas.height/2,
  radius: 10,
  speed: 4,
  dx: 4,
  dy: -4
}

// Paddle variables:
const paddle = {
  x: canvas.width/2 - 40,
  y: canvas.height - 20,
  width: 80,
  height: 10,
  speed: 8,
  dx: 0
}

let score = 0;

// Bricks:
const brickRowCount = 9;
const brickColCount = 5;

// Create brick variables:
const brickInfo = {
  width: 70,
  height: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true
};


// Create bricks:
const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColCount; j++) {
    let x = i * (brickInfo.width + brickInfo.padding) + brickInfo.offsetX;
    let y = j * (brickInfo.height + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}

// Draw bricks on canvas
function drawBricks() {
  bricks.forEach(column => {
    column.forEach(brick => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.width, brick.height);
      ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
}

// Draw paddle on canvas:
const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

// Draw ball on canvas:
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, true);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

// Draw score:
const drawScore = () => {
  ctx.font = '20px Arial'
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30)
}

const draw = () => {
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

// Event listeners:
rulesBtn.addEventListener('click', () => {
  rules.classList.add('show'); 
});

closeBtn.addEventListener('click', () => {
  rules.classList.remove('show'); 
});

draw();