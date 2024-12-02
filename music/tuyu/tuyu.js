const raindropsContainer = document.querySelector('.raindrops');

// Function to create a single raindrop
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    // Randomize position and animation delay
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDelay = `${Math.random() * 2}s`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`;

    raindropsContainer.appendChild(raindrop);

    // Remove raindrop after it falls off the screen
    setTimeout(() => raindrop.remove(), 5000);
}

// Function to continuously create raindrops
function generateRaindrops() {
    setInterval(createRaindrop, 150); // Create a new raindrop every 150ms
}

generateRaindrops();
