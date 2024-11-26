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

        const offset = 120; // Height of the navbar
        const elementPosition = targetElement.getBoundingClientRect().top; // Section position
        const offsetPosition = elementPosition + window.scrollY - offset;

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
