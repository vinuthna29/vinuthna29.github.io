// Initialize 2d context
const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('2d');

// // Ball properties
let balls = [
    { x: canvas.width / 4, y: canvas.height / 4, radius: 10, dx: 2, dy: -2, color: 'violet' },
    { x: (canvas.width / 4) * 3, y: (canvas.height / 4), radius: 10, dx: -2, dy: 2, color: 'indigo' },
    { x: canvas.width / 2, y: canvas.height / 2, radius: 20, dx: 1, dy: 1, color: 'blue' },
    { x: canvas.width / 4, y: (canvas.height / 4) * 3, radius: 20, dx: -1, dy: -1, color: 'green' },
    { x: (canvas.width / 4) * 3, y: (canvas.height / 4) * 3, radius: 10, dx: 1, dy: -1, color: 'yellow' },
    { x: 50, y: (canvas.height / 4) * 3, radius: 10, dx: 1, dy: -1, color: 'orange' },
    { x: canvas.width / 2, y: 50, radius: 20, dx: 1, dy: -1, color: 'red' },
    { x: canvas.width / 2 - 50 , y: (canvas.height / 4) + 50, radius: 10, dx: 1, dy: -1, color: 'white' },
    { x: 50, y: 50, radius: 10, dx: 1, dy: -1, color: 'black' }
];

// Animation loop
function draw() {
    // Clear canvas
    gl.clearRect(0, 0, canvas.width, canvas.height);

    // Draw border box
    gl.strokeStyle = 'black';
    gl.lineWidth = 2;
    gl.strokeRect(0, 0, canvas.width, canvas.height);

    // Draw balls
    balls.forEach(ball => {
        gl.beginPath();
        gl.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        gl.fillStyle = ball.color;
        gl.fill();
        gl.closePath();

        // Update ball position
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Handle collisions with walls
        if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
            ball.dx = -ball.dx;
        }
        if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
            ball.dy = -ball.dy;
        }
    });

    // Check for collisions between the balls
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            let dx = balls[i].x - balls[j].x;
            let dy = balls[i].y - balls[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < balls[i].radius + balls[j].radius) {
                // Balls are colliding, reverse their velocities
                let tempDx = balls[i].dx;
                let tempDy = balls[i].dy;
                balls[i].dx = balls[j].dx;
                balls[i].dy = balls[j].dy;
                balls[j].dx = tempDx;
                balls[j].dy = tempDy;
            }
        }
    }

    // Request next frame
    requestAnimationFrame(draw);
}

// Start animation
draw();
