function createSnowflakes() {
    const numberOfSnowflakes = 150;
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.width = `${Math.random() * 10 + 5}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        document.body.appendChild(snowflake);
    }
}
createSnowflakes();

function createBalls() {
    const numberOfBalls = 20;
    for (let i = 0; i < numberOfBalls; i++) {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.width = `${Math.random() * 30 + 20}px`;
        ball.style.height = ball.style.width;
        ball.style.left = `${Math.random() * 100}vw`;
        ball.style.top = `${Math.random() * 100}vh`;
        ball.style.animationDuration = `${Math.random() * 15 + 10}s`;
        ball.style.animationDelay = `${Math.random() * 10}s`;
        document.body.appendChild(ball);
    }
}
createBalls();

document.getElementById('start-button').addEventListener('click', function() {
    // Change background color and hide initial content
    document.body.style.backgroundColor = '#ff0080';
    document.getElementById('content').style.display = 'none';

    // Show Chirana text with animation
    const chiranaContainer = document.getElementById('chirana');
    chiranaContainer.style.display = 'block';
    chiranaContainer.style.opacity = 1;
});
