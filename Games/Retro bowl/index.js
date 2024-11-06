// Play Now button functionality
document.getElementById('playButton').addEventListener('click', () => {
    try {
        // Check if the game start function is available in RetroBowl.js
        if (typeof startGame === "function") {
            startGame();  // Replace with the actual function that starts the game
        } else {
            alert("Game start function not found.");
        }
    } catch (error) {
        console.error("Error starting the game:", error);
        alert("An error occurred while starting the game. Check the console for details.");
    }
});

// Full Screen button functionality
document.getElementById('fullScreenButton').addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) { // Firefox
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari, Opera
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) { // IE/Edge
        canvas.msRequestFullscreen();
    }
});

// Refresh button functionality
document.getElementById('refreshButton').addEventListener('click', () => {
    location.reload();  // Reloads the page to restart the game
});
