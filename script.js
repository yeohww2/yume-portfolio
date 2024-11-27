let navbarVisible = true; // Track navbar state

function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const toggleButton = document.querySelector('.nav-toggle-btn');

    if (navbarVisible) {
        navbar.classList.add('hidden'); // Hide navbar
        toggleButton.innerHTML = '<span class="material-icons">menu</span>';
    } else {
        navbar.classList.remove('hidden'); // Show navbar
        toggleButton.innerHTML = '<span class="material-icons">close</span>';
    }

    navbarVisible = !navbarVisible; // Toggle state
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        // Calculate navbar height dynamically
        const navbarHeight = document.querySelector('header').offsetHeight;

        // Get the section position relative to the document
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

function openModal(gameId) {
    // Get the modal by ID
    var modal = document.getElementById(gameId);
    modal.style.display = "block";  // Show the modal
}

function closeModal(gameId) {
    // Get the modal by ID and hide it
    var modal = document.getElementById(gameId);
    modal.style.display = "none";  // Hide the modal
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    var modals = document.querySelectorAll(".game-modal");
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Function to create random sparkles
function createSparkles() {
    const sparkleContainer = document.getElementById('sparkles-container');
    const sparkleCount = 30; // Number of sparkles to generate

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Random position on the screen
        const leftPosition = Math.random() * 100; // 0% to 100%
        const topPosition = Math.random() * 100; // 0% to 100%

        // Random animation duration and delay
        const animationDuration = Math.random() * 2 + 1; // 1s to 3s
        const animationDelay = Math.random() * 3; // 0s to 3s

        // Apply random positions and animation properties
        sparkle.style.left = `${leftPosition}vw`;
        sparkle.style.top = `${topPosition}vh`;
        sparkle.style.animationDuration = `${animationDuration}s`;
        sparkle.style.animationDelay = `${animationDelay}s`;

        // Append to the sparkle container
        sparkleContainer.appendChild(sparkle);
    }
}

// Generate sparkles when the page loads
window.onload = createSparkles;

// Optional: Regenerate sparkles every 10 seconds
setInterval(createSparkles, 10000);
