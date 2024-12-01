const musicStarsContainer = document.querySelector('.music-stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random star type
    star.textContent = ['★', '☆', '✦', '✩'][Math.floor(Math.random() * 4)];

    // Position the star randomly across the viewport width
    star.style.left = `${Math.random() * 100}vw`;

    // Random animation duration (5-10 seconds for slower float effect)
    star.style.animationDuration = `${Math.random() * 5 + 5}s`;

    // Random delay for smooth, non-repetitive effect
    star.style.animationDelay = `${Math.random() * 3}s`;

    // Random size (20px to 50px)
    star.style.fontSize = `${Math.random() * 30 + 20}px`;

    musicStarsContainer.appendChild(star);

    // Remove the star after it completes the animation
    setTimeout(() => star.remove(), 10000); // Matches animation duration
}

// Create stars every 800 milliseconds
setInterval(createStar, 800);
