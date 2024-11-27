// Select all audio players
const audioPlayers = document.querySelectorAll("audio");

// Check if audio players exist
if (audioPlayers.length === 0) {
    console.error("No audio players found on the page!");
}

// Add event listeners to display a popup when a song starts playing
audioPlayers.forEach((audio) => {
    audio.addEventListener("play", () => {
        showPopup(`Now Playing: ${audio.closest(".song-card").querySelector("p").textContent}`);
    });

    audio.addEventListener("pause", () => {
        hidePopup();
    });
});

// Function to show a popup with the song title
function showPopup(message) {
    const existingPopup = document.getElementById("song-popup");
    if (existingPopup) existingPopup.remove(); // Remove existing popup before showing a new one

    const popup = document.createElement("div");
    popup.id = "song-popup";
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.background = "#ff69b4";
    popup.style.color = "#fff";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    // Automatically hide the popup after 3 seconds
    setTimeout(() => {
        hidePopup();
    }, 3000);
}

// Function to hide the popup
function hidePopup() {
    const popup = document.getElementById("song-popup");
    if (popup) {
        popup.remove();
    }
}

// Play All Songs Sequentially
function playAllSongs() {
    if (audioPlayers.length === 0) {
        console.error("No audio players to play!");
        return;
    }

    let currentIndex = 0;

    const playNext = () => {
        if (currentIndex < audioPlayers.length) {
            const audio = audioPlayers[currentIndex];
            audio.play();
            audio.addEventListener("ended", () => {
                currentIndex++;
                playNext();
            }, { once: true }); // Ensure the event listener is removed after it's called
        }
    };

    playNext();
}

// Pause All Songs
function pauseAllSongs() {
    if (audioPlayers.length === 0) {
        console.error("No audio players to pause!");
        return;
    }

    audioPlayers.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0; // Reset the current time to the beginning
    });
}

// Add event listeners to buttons
const playAllButton = document.getElementById("play-all");
const pauseAllButton = document.getElementById("pause-all");

if (playAllButton) {
    playAllButton.addEventListener("click", playAllSongs);
} else {
    console.error("Play All button not found!");
}

if (pauseAllButton) {
    pauseAllButton.addEventListener("click", pauseAllSongs);
} else {
    console.error("Pause All button not found!");
}
