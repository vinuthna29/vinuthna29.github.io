document.addEventListener('DOMContentLoaded', function () {
    var background1 = document.getElementById('background1');
    var background2 = document.getElementById('background2');

    function animateBackgrounds() {
        background1.style.animation = 'gradient1 15s ease infinite';
        background2.style.animation = 'gradient2 15s ease infinite';
    }

    setInterval(animateBackgrounds, 15000); // Switch backgrounds every 15 seconds
    animateBackgrounds(); // Initial call to start the animation
});

// // Initialize 2d context
// const canvas = document.getElementById('glCanvas');
// const gl = canvas.getContext('2d');

// // Ball properties
// let ball1 = {
//     x: canvas.width / 3,
//     y: canvas.height / 3,
//     radius: 25,
//     dx: 2,
//     dy: -2,
//     color: 'blue'
// };

// let ball2 = {
//     x: (canvas.width / 3) * 2,
//     y: (canvas.height / 3) * 2,
//     radius: 20,
//     dx: -2,
//     dy: 2,
//     color: 'red'
// };

// // Animation loop
// function draw() {
//     // Clear canvas
//     gl.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw border box
//     gl.strokeStyle = 'black';
//     gl.lineWidth = 2;
//     gl.strokeRect(0, 0, canvas.width, canvas.height);

//     // Draw ball 1
//     gl.beginPath();
//     gl.arc(ball1.x, ball1.y, ball1.radius, 0, Math.PI * 2);
//     gl.fillStyle = ball1.color;
//     gl.fill();
//     gl.closePath();

//     // Draw ball 2
//     gl.beginPath();
//     gl.arc(ball2.x, ball2.y, ball2.radius, 0, Math.PI * 2);
//     gl.fillStyle = ball2.color;
//     gl.fill();
//     gl.closePath();

//     // Update ball 1 position
//     ball1.x += ball1.dx;
//     ball1.y += ball1.dy;

//     // Update ball 2 position
//     ball2.x += ball2.dx;
//     ball2.y += ball2.dy;

//     // Handle collisions with walls for ball 1
//     if (ball1.x + ball1.dx > canvas.width - ball1.radius || ball1.x + ball1.dx < ball1.radius) {
//         ball1.dx = -ball1.dx;
//     }
//     if (ball1.y + ball1.dy > canvas.height - ball1.radius || ball1.y + ball1.dy < ball1.radius) {
//         ball1.dy = -ball1.dy;
//     }

//     // Handle collisions with walls for ball 2
//     if (ball2.x + ball2.dx > canvas.width - ball2.radius || ball2.x + ball2.dx < ball2.radius) {
//         ball2.dx = -ball2.dx;
//     }
//     if (ball2.y + ball2.dy > canvas.height - ball2.radius || ball2.y + ball2.dy < ball2.radius) {
//         ball2.dy = -ball2.dy;
//     }

//     // Check for collisions between the balls
//     let dx = ball1.x - ball2.x;
//     let dy = ball1.y - ball2.y;
//     let distance = Math.sqrt(dx * dx + dy * dy);
//     if (distance < ball1.radius + ball2.radius) {
//         // Balls are colliding, reverse their velocities
//         let tempDx = ball1.dx;
//         let tempDy = ball1.dy;
//         ball1.dx = ball2.dx;
//         ball1.dy = ball2.dy;
//         ball2.dx = tempDx;
//         ball2.dy = tempDy;
//     }

//     // Request next frame
//     requestAnimationFrame(draw);
// }

// // Start animation
// draw();
