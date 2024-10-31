// Play Now button
document.getElementById("play-now").addEventListener("click", function (event) {
    event.preventDefault();
    startGame();
});

// Refresh button
document.getElementById("refresh").addEventListener("click", function () {
    location.reload();
});

// Fullscreen button
document.getElementById("fullscreen").addEventListener("click", function () {
    const gameContainer = document.getElementById("game-container");
    if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen();
    } else if (gameContainer.mozRequestFullScreen) { // Firefox
        gameContainer.mozRequestFullScreen();
    } else if (gameContainer.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) { // IE/Edge
        gameContainer.msRequestFullscreen();
    }
});

// Function to start the game
function startGame() {
    if (typeof RetroBowl !== 'undefined' && typeof RetroBowl.start === 'function') {
        RetroBowl.start();
    } else {
        console.error("Game start function not found in RetroBowl.js");
    }
}
