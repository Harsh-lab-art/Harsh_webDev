const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
let snake = [{ x: 200, y: 200 }];
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
let direction = "RIGHT";
let game;

document.addEventListener("keydown", changeDirection);
function changeDirection(event) {
    const key = event.keyCode;
    if (key == 37 && direction !== "RIGHT") direction = "LEFT";
    else if (key == 38 && direction !== "DOWN") direction = "UP";
    else if (key == 39 && direction !== "LEFT") direction = "RIGHT";
    else if (key == 40 && direction !== "UP") direction = "DOWN";
}
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);
    ctx.fillStyle = "lime";
    snake.forEach(segment => ctx.fillRect(segment.x, segment.y, box, box));
    let head = { ...snake[0] };
    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;
    if (head.x === food.x && head.y === food.y) {
        food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    } else {
        snake.pop();
    }
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || 
        snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        clearInterval(game);
        alert("Game Over!");
        return;
    }
    snake.unshift(head);
}
game = setInterval(draw, 100);