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
}

// Event listeners:
rulesBtn.addEventListener('click', () => {
  rules.classList.add('show'); 
});

closeBtn.addEventListener('click', () => {
  rules.classList.remove('show'); 
});

draw();