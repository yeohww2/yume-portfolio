const musicNotesContainer = document.querySelector('.music-notes');

function createNote() {
    const note = document.createElement('div');
    note.classList.add('note');
    note.textContent = ['♪', '♫', '♬', '♩'][Math.floor(Math.random() * 4)]; // Random note
    note.style.setProperty('--random-x', Math.random()); // Random horizontal position
    note.style.fontSize = `${Math.random() * 20 + 20}px`; // Random size
    musicNotesContainer.appendChild(note);

    setTimeout(() => note.remove(), 8000); // Remove note after animation
}

// Create notes at regular intervals
setInterval(createNote, 1000);




const fallingSymbolsContainer = document.querySelector('.falling-symbols');

function createSymbol() {
    const symbol = document.createElement('div');
    symbol.classList.add('symbol');
    symbol.textContent = '✦'; // The ✦ symbol
    symbol.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    symbol.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay
    symbol.style.fontSize = `${Math.random() * 20 + 15}px`; // Random font size
    fallingSymbolsContainer.appendChild(symbol);

    // Remove the symbol after animation completes
    setTimeout(() => symbol.remove(), 6000);
}

// Generate a new symbol every 500ms
setInterval(createSymbol, 500);

