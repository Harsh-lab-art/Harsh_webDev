const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let car = { x: 175, y: 500, width: 50, height: 80 };
let obstacles = [];
let gameInterval;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && car.x > 0) car.x -= 20;
    if (event.key === "ArrowRight" && car.x < canvas.width - car.width) car.x += 20;
});

function drawCar() {
    ctx.fillStyle = "red";
    ctx.fillRect(car.x, car.y, car.width, car.height);
}

function drawObstacles() {
    ctx.fillStyle = "blue";
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        obstacle.y += 5;
    });
}
function checkCollision() {
    for (let obstacle of obstacles) {
        if (car.x < obstacle.x + obstacle.width &&
            car.x + car.width > obstacle.x &&
            car.y < obstacle.y + obstacle.height &&
            car.y + car.height > obstacle.y) {
            clearInterval(gameInterval);
            alert("Game Over!");
        }
    }
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    drawObstacles();
    checkCollision();
    
    if (Math.random() < 0.02) {
        obstacles.push({ x: Math.random() * 350, y: 0, width: 50, height: 80 });
    }
}

gameInterval = setInterval(updateGame, 50);